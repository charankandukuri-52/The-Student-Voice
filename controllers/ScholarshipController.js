const { ScholarshipModel } = require('../models/ScholarshipModel');
const scholarshipService = require('../services/scholarshipService');
const logger = require('../config/logger');

class ScholarshipController {
    // Get all scholarships
    static async getAllScholarships(req, res) {
        try {
            const scholarships = await ScholarshipModel.find({});
            res.json({
                success: true,
                data: scholarships
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to fetch scholarships"
            });
        }
    }

    // Get scholarship by ID
    static async getScholarshipById(req, res) {
        try {
            const scholarship = await ScholarshipModel.findOne({ id: req.params.id });
            if (!scholarship) {
                return res.status(404).json({
                    success: false,
                    error: "Scholarship not found"
                });
            }
            res.json({
                success: true,
                data: scholarship
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to fetch scholarship"
            });
        }
    }

    // Create new scholarship
    async createScholarship(req, res) {
        try {
            const scholarship = await scholarshipService.createScholarship(req.body);
            res.status(201).json({
                success: true,
                data: scholarship
            });
        } catch (error) {
            logger.error('Error in createScholarship controller:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    // Update scholarship
    async updateScholarship(req, res) {
        try {
            const scholarship = await scholarshipService.updateScholarship(
                req.params.id,
                req.body
            );
            res.status(200).json({
                success: true,
                data: scholarship
            });
        } catch (error) {
            logger.error('Error in updateScholarship controller:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    // Delete scholarship
    async deleteScholarship(req, res) {
        try {
            await scholarshipService.deleteScholarship(req.params.id);
            res.status(204).send();
        } catch (error) {
            logger.error('Error in deleteScholarship controller:', error);
            res.status(404).json({
                success: false,
                error: error.message
            });
        }
    }

    // Get scholarships by type
    static async getScholarshipsByType(req, res) {
        try {
            const scholarships = await ScholarshipModel.find({ type: req.params.type });
            res.json({
                success: true,
                data: scholarships
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to fetch scholarships by type"
            });
        }
    }

    // Get scholarships by category
    static async getScholarshipsByCategory(req, res) {
        try {
            const scholarships = await ScholarshipModel.find({ category: req.params.category });
            res.json({
                success: true,
                data: scholarships
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to fetch scholarships by category"
            });
        }
    }

    // Get scholarships by degree
    static async getScholarshipsByDegree(req, res) {
        try {
            const scholarships = await ScholarshipModel.find({
                $or: [
                    { degree: req.params.degree },
                    { degree: 'both' }
                ]
            });
            res.json({
                success: true,
                data: scholarships
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to fetch scholarships by degree"
            });
        }
    }

    // Search scholarships
    async searchScholarships(req, res) {
        try {
            const { page = 1, limit = 10, ...criteria } = req.query;
            const result = await scholarshipService.searchScholarships(
                criteria,
                parseInt(page),
                parseInt(limit)
            );
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            logger.error('Error in searchScholarships controller:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    async getActiveScholarships(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query;
            const result = await scholarshipService.getActiveScholarships(
                parseInt(page),
                parseInt(limit)
            );
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            logger.error('Error in getActiveScholarships controller:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    async incrementPopularity(req, res) {
        try {
            const scholarship = await scholarshipService.incrementPopularity(req.params.id);
            res.status(200).json({
                success: true,
                data: scholarship
            });
        } catch (error) {
            logger.error('Error in incrementPopularity controller:', error);
            res.status(404).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = new ScholarshipController();
