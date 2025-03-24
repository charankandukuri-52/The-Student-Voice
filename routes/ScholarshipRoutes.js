const express = require('express');
const router = express.Router();
const ScholarshipController = require('../controllers/ScholarshipController');

// Get all scholarships
router.get('/', ScholarshipController.getAllScholarships);

// Search scholarships
router.get('/search', ScholarshipController.searchScholarships);

// Get scholarships by type (government/private/international)
router.get('/type/:type', ScholarshipController.getScholarshipsByType);

// Get scholarships by category
router.get('/category/:category', ScholarshipController.getScholarshipsByCategory);

// Get scholarships by degree
router.get('/degree/:degree', ScholarshipController.getScholarshipsByDegree);

// Get scholarship by ID (this should be last among GET routes to avoid conflicts)
router.get('/:id', ScholarshipController.getScholarshipById);

// Create new scholarship
router.post('/', ScholarshipController.createScholarship);

// Update scholarship
router.put('/:id', ScholarshipController.updateScholarship);

// Delete scholarship
router.delete('/:id', ScholarshipController.deleteScholarship);

module.exports = router; 