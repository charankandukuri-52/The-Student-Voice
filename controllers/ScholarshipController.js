const { ScholarshipModel } = require('../models/ScholarshipModel');

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
    static async createScholarship(req, res) {
        try {
            const scholarship = new ScholarshipModel(req.body);
            await scholarship.save();
            res.status(201).json({
                success: true,
                data: scholarship
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to create scholarship"
            });
        }
    }

    // Update scholarship
    static async updateScholarship(req, res) {
        try {
            const scholarship = await ScholarshipModel.findOneAndUpdate(
                { id: req.params.id },
                req.body,
                { new: true }
            );
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
                error: "Failed to update scholarship"
            });
        }
    }

    // Delete scholarship
    static async deleteScholarship(req, res) {
        try {
            const scholarship = await ScholarshipModel.findOneAndDelete({ id: req.params.id });
            if (!scholarship) {
                return res.status(404).json({
                    success: false,
                    error: "Scholarship not found"
                });
            }
            res.json({
                success: true,
                message: "Scholarship deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to delete scholarship"
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
    static async searchScholarships(req, res) {
        try {
            const { query } = req.query;
            const scholarships = await ScholarshipModel.find({
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { provider: { $regex: query, $options: 'i' } },
                    { category: { $regex: query, $options: 'i' } },
                    { tags: { $in: [new RegExp(query, 'i')] } }
                ]
            });
            res.json({
                success: true,
                data: scholarships
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Failed to search scholarships"
            });
        }
    }
}

module.exports = ScholarshipController;
