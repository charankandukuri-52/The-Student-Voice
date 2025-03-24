const mongoose = require('mongoose');
const logger = require('../config/logger');

// Define the Scholarship Schema
const scholarshipSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    provider: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['government', 'private', 'international'],
        required: true,
        index: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    degree: {
        type: String,
        enum: ['undergraduate', 'postgraduate', 'both', 'phd'],
        required: true,
        index: true
    },
    gender: {
        type: String,
        enum: ['all', 'female', 'male'],
        required: true,
        default: 'all'
    },
    fieldOfStudy: [{
        type: String,
        trim: true
    }],
    eligibilityCriteria: [{
        type: String,
        trim: true
    }],
    amount: {
        type: String,
        required: true
    },
    amountRange: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        }
    },
    deadline: {
        type: String,
        required: true
    },
    deadlineDate: {
        type: Date,
        required: true,
        index: true
    },
    requiredDocuments: [{
        type: String,
        trim: true
    }],
    applicationLink: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: {
            type: String,
            enum: ['india', 'abroad', 'both'],
            required: true
        },
        specificRegion: String
    },
    financialAidType: [{
        type: String,
        enum: ['full-tuition', 'partial-tuition', 'living-stipend', 'research-grant']
    }],
    tags: [{
        type: String,
        trim: true
    }],
    applicationStatus: {
        type: String,
        enum: ['open', 'closed', 'upcoming'],
        required: true,
        default: 'upcoming',
        index: true
    },
    popularity: {
        type: Number,
        default: 0,
        index: true
    },
    incomeLimit: {
        type: Number,
        required: true
    },
    instituteType: [{
        type: String,
        trim: true
    }]
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Indexes for common queries
scholarshipSchema.index({ type: 1, category: 1 });
scholarshipSchema.index({ degree: 1, fieldOfStudy: 1 });
scholarshipSchema.index({ deadlineDate: 1, applicationStatus: 1 });
scholarshipSchema.index({ amountRange: 1, incomeLimit: 1 });

// Virtual for checking if scholarship is active
scholarshipSchema.virtual('isActive').get(function() {
    const now = new Date();
    return this.deadlineDate > now && this.applicationStatus === 'open';
});

// Pre-save middleware for data validation
scholarshipSchema.pre('save', function(next) {
    if (this.amountRange.min > this.amountRange.max) {
        next(new Error('Minimum amount cannot be greater than maximum amount'));
    }
    next();
});

// Static method for finding active scholarships
scholarshipSchema.statics.findActive = function() {
    const now = new Date();
    return this.find({
        deadlineDate: { $gt: now },
        applicationStatus: 'open'
    });
};

// Static method for finding scholarships by criteria
scholarshipSchema.statics.findByCriteria = function(criteria) {
    const query = {
        applicationStatus: 'open',
        deadlineDate: { $gt: new Date() }
    };

    if (criteria.type) query.type = criteria.type;
    if (criteria.category) query.category = criteria.category;
    if (criteria.degree) query.degree = criteria.degree;
    if (criteria.gender) query.gender = criteria.gender;
    if (criteria.fieldOfStudy) query.fieldOfStudy = criteria.fieldOfStudy;
    if (criteria.incomeLimit) query.incomeLimit = { $gte: criteria.incomeLimit };

    return this.find(query).sort({ deadlineDate: 1 });
};

// Instance method for updating popularity
scholarshipSchema.methods.incrementPopularity = async function() {
    this.popularity += 1;
    return this.save();
};

// Create the model
const ScholarshipModel = mongoose.model('Scholarship', scholarshipSchema);

// Error handling middleware
scholarshipSchema.post('save', function(error, doc, next) {
    if (error.name === 'ValidationError') {
        logger.error('Validation Error:', error);
        next(new Error('Invalid scholarship data'));
    } else if (error.code === 11000) {
        logger.error('Duplicate Key Error:', error);
        next(new Error('Scholarship ID already exists'));
    } else {
        next(error);
    }
});

module.exports = ScholarshipModel;
