const express = require('express');
const router = express.Router();
const scholarshipController = require('../controllers/scholarshipController');
const { authenticateToken } = require('../middleware/auth');
const { validateScholarship } = require('../middleware/validation');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// Security middleware
router.use(helmet());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
router.use(limiter);

// Public routes
router.get('/search', scholarshipController.searchScholarships);
router.get('/active', scholarshipController.getActiveScholarships);
router.get('/:id', scholarshipController.getScholarship);

// Protected routes (require authentication)
router.use(authenticateToken);

router.post('/', validateScholarship, scholarshipController.createScholarship);
router.put('/:id', validateScholarship, scholarshipController.updateScholarship);
router.delete('/:id', scholarshipController.deleteScholarship);
router.post('/:id/increment-popularity', scholarshipController.incrementPopularity);

module.exports = router; 