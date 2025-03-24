const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth, checkRole } = require('../middleware/auth');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/verify-email/:token', userController.verifyEmail);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password/:token', userController.resetPassword);

// Protected routes (require email verification)
router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateProfile);
router.put('/change-password', auth, userController.changePassword);

// Admin routes
router.get('/users', auth, checkRole(['admin']), userController.getAllUsers);
router.get('/users/:id', auth, checkRole(['admin']), userController.getUserById);
router.put('/users/:id/role', auth, checkRole(['admin']), userController.updateUserRole);
router.delete('/users/:id', auth, checkRole(['admin']), userController.deleteUser);

module.exports = router; 