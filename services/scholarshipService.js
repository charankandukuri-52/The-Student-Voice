const ScholarshipModel = require('../models/ScholarshipModel');
const logger = require('../config/logger');
const Redis = require('ioredis');

// Initialize Redis client
const redis = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD,
    retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
    }
});

// Cache duration in seconds
const CACHE_DURATION = 3600; // 1 hour

class ScholarshipService {
    async createScholarship(scholarshipData) {
        try {
            const scholarship = new ScholarshipModel(scholarshipData);
            await scholarship.save();
            
            // Invalidate relevant caches
            await this.invalidateCaches();
            
            return scholarship;
        } catch (error) {
            logger.error('Error creating scholarship:', error);
            throw error;
        }
    }

    async getScholarshipById(id) {
        try {
            const cacheKey = `scholarship:${id}`;
            
            // Try to get from cache first
            const cachedData = await redis.get(cacheKey);
            if (cachedData) {
                return JSON.parse(cachedData);
            }

            const scholarship = await ScholarshipModel.findOne({ id });
            if (!scholarship) {
                throw new Error('Scholarship not found');
            }

            // Cache the result
            await redis.setex(cacheKey, CACHE_DURATION, JSON.stringify(scholarship));

            return scholarship;
        } catch (error) {
            logger.error('Error fetching scholarship:', error);
            throw error;
        }
    }

    async updateScholarship(id, updateData) {
        try {
            const scholarship = await ScholarshipModel.findOneAndUpdate(
                { id },
                { $set: updateData },
                { new: true, runValidators: true }
            );

            if (!scholarship) {
                throw new Error('Scholarship not found');
            }

            // Invalidate caches
            await this.invalidateCaches();

            return scholarship;
        } catch (error) {
            logger.error('Error updating scholarship:', error);
            throw error;
        }
    }

    async deleteScholarship(id) {
        try {
            const scholarship = await ScholarshipModel.findOneAndDelete({ id });
            if (!scholarship) {
                throw new Error('Scholarship not found');
            }

            // Invalidate caches
            await this.invalidateCaches();

            return scholarship;
        } catch (error) {
            logger.error('Error deleting scholarship:', error);
            throw error;
        }
    }

    async searchScholarships(criteria, page = 1, limit = 10) {
        try {
            const cacheKey = `search:${JSON.stringify(criteria)}:${page}:${limit}`;
            
            // Try to get from cache first
            const cachedData = await redis.get(cacheKey);
            if (cachedData) {
                return JSON.parse(cachedData);
            }

            const query = ScholarshipModel.findByCriteria(criteria);
            const total = await ScholarshipModel.countDocuments(query.getQuery());
            
            const scholarships = await query
                .skip((page - 1) * limit)
                .limit(limit)
                .lean();

            const result = {
                scholarships,
                pagination: {
                    total,
                    page,
                    pages: Math.ceil(total / limit)
                }
            };

            // Cache the result
            await redis.setex(cacheKey, CACHE_DURATION, JSON.stringify(result));

            return result;
        } catch (error) {
            logger.error('Error searching scholarships:', error);
            throw error;
        }
    }

    async getActiveScholarships(page = 1, limit = 10) {
        try {
            const cacheKey = `active:${page}:${limit}`;
            
            // Try to get from cache first
            const cachedData = await redis.get(cacheKey);
            if (cachedData) {
                return JSON.parse(cachedData);
            }

            const scholarships = await ScholarshipModel.findActive()
                .skip((page - 1) * limit)
                .limit(limit)
                .lean();

            const total = await ScholarshipModel.countDocuments({
                applicationStatus: 'open',
                deadlineDate: { $gt: new Date() }
            });

            const result = {
                scholarships,
                pagination: {
                    total,
                    page,
                    pages: Math.ceil(total / limit)
                }
            };

            // Cache the result
            await redis.setex(cacheKey, CACHE_DURATION, JSON.stringify(result));

            return result;
        } catch (error) {
            logger.error('Error fetching active scholarships:', error);
            throw error;
        }
    }

    async incrementPopularity(id) {
        try {
            const scholarship = await ScholarshipModel.findOne({ id });
            if (!scholarship) {
                throw new Error('Scholarship not found');
            }

            await scholarship.incrementPopularity();
            
            // Invalidate caches
            await this.invalidateCaches();

            return scholarship;
        } catch (error) {
            logger.error('Error incrementing popularity:', error);
            throw error;
        }
    }

    async invalidateCaches() {
        try {
            const keys = await redis.keys('scholarship:*');
            const searchKeys = await redis.keys('search:*');
            const activeKeys = await redis.keys('active:*');

            if (keys.length > 0) await redis.del(keys);
            if (searchKeys.length > 0) await redis.del(searchKeys);
            if (activeKeys.length > 0) await redis.del(activeKeys);
        } catch (error) {
            logger.error('Error invalidating caches:', error);
        }
    }
}

module.exports = new ScholarshipService(); 