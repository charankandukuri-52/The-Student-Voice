const Joi = require('joi');
const logger = require('../config/logger');

const scholarshipSchema = Joi.object({
    id: Joi.string().required().pattern(/^[A-Z0-9]+$/),
    name: Joi.string().required().min(3).max(200),
    provider: Joi.string().required().min(2).max(100),
    type: Joi.string().valid('government', 'private', 'international').required(),
    category: Joi.string().required().min(2).max(50),
    degree: Joi.string().valid('undergraduate', 'postgraduate', 'both', 'phd').required(),
    gender: Joi.string().valid('all', 'female', 'male').default('all'),
    fieldOfStudy: Joi.array().items(Joi.string()),
    eligibilityCriteria: Joi.array().items(Joi.string()),
    amount: Joi.string().required(),
    amountRange: Joi.object({
        min: Joi.number().required().min(0),
        max: Joi.number().required().min(0)
    }).required(),
    deadline: Joi.string().required(),
    deadlineDate: Joi.date().iso().required(),
    requiredDocuments: Joi.array().items(Joi.string()),
    applicationLink: Joi.string().uri().required(),
    location: Joi.object({
        type: Joi.string().valid('india', 'abroad', 'both').required(),
        specificRegion: Joi.string()
    }).required(),
    financialAidType: Joi.array().items(
        Joi.string().valid('full-tuition', 'partial-tuition', 'living-stipend', 'research-grant')
    ),
    tags: Joi.array().items(Joi.string()),
    applicationStatus: Joi.string().valid('open', 'closed', 'upcoming').default('upcoming'),
    popularity: Joi.number().min(0).default(0),
    incomeLimit: Joi.number().required().min(0),
    instituteType: Joi.array().items(Joi.string())
});

const validateScholarship = (req, res, next) => {
    const { error } = scholarshipSchema.validate(req.body, {
        abortEarly: false,
        allowUnknown: true
    });

    if (error) {
        logger.error('Validation error:', error.details);
        const errors = error.details.map(detail => detail.message);
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: errors
        });
    }

    next();
};

module.exports = {
    validateScholarship
}; 