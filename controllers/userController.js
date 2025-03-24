const UserService = require('../services/userService');
const EmailService = require('../services/emailService');
const logger = require('../config/logger');

class UserController {
    // Register new user
    async register(req, res) {
        try {
            const { firstName, lastName, email, password, role } = req.body;

            // Validate required fields
            if (!firstName || !lastName || !email || !password || !role) {
                return res.status(400).json({
                    success: false,
                    message: 'Missing required fields'
                });
            }

            // Create user
            const user = await UserService.createUser({
                firstName,
                lastName,
                email,
                password,
                role
            });

            // Send verification email
            await EmailService.sendVerificationEmail(user);

            res.status(201).json({
                success: true,
                message: 'Registration successful! Please check your email to verify your account.',
                data: {
                    user: {
                        id: user._id,
                        firstName: user.maskedFirstName,
                        lastName: user.maskedLastName,
                        email: user.maskedEmail,
                        role: user.role,
                        isVerified: user.emailVerified
                    },
                    token: user.generateAuthToken()
                }
            });
        } catch (error) {
            logger.error('Registration error:', error.message);
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    // Login user
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await UserService.login(email, password);
            res.json({
                success: true,
                data: {
                    user: {
                        id: result.user._id,
                        firstName: result.user.firstName,
                        lastName: result.user.lastName,
                        email: result.user.email,
                        role: result.user.role,
                        isVerified: result.user.emailVerified
                    },
                    token: result.token
                }
            });
        } catch (error) {
            logger.error('Login error:', error.message);
            res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }

    // Logout user
    async logout(req, res) {
        try {
            await UserService.logout(req.user.id);
            res.json({
                success: true,
                message: 'Logged out successfully'
            });
        } catch (error) {
            logger.error('Logout error:', error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    // Get user profile
    async getProfile(req, res) {
        try {
            const user = await UserService.findById(req.user.id);
            res.json({
                success: true,
                data: {
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        isVerified: user.emailVerified
                    }
                }
            });
        } catch (error) {
            logger.error('Get profile error:', error.message);
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    // Update user profile
    async updateProfile(req, res) {
        try {
            const user = await UserService.updateUser(req.user.id, req.body);
            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            logger.error('Update profile error:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    // Forgot password
    async forgotPassword(req, res) {
        try {
            const { email } = req.body;
            const resetToken = await UserService.forgotPassword(email);
            res.json({
                success: true,
                message: 'Password reset token sent to email',
                data: { resetToken } // In production, remove this line
            });
        } catch (error) {
            logger.error('Forgot password error:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    // Reset password
    async resetPassword(req, res) {
        try {
            const { token, newPassword } = req.body;
            const user = await UserService.resetPassword(token, newPassword);
            res.json({
                success: true,
                message: 'Password reset successfully',
                data: user
            });
        } catch (error) {
            logger.error('Reset password error:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    // Verify email
    async verifyEmail(req, res) {
        try {
            const { token } = req.params;
            const user = await UserService.verifyEmail(token);
            
            res.json({
                success: true,
                message: 'Email verified successfully',
                data: {
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        isVerified: user.emailVerified
                    }
                }
            });
        } catch (error) {
            logger.error('Email verification error:', error.message);
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    // Get all users (admin only)
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.json({
                success: true,
                count: users.length,
                data: users
            });
        } catch (error) {
            logger.error('Get all users error:', error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    // Update user role (admin only)
    async updateUserRole(req, res) {
        try {
            const { userId, role } = req.body;
            const user = await UserService.updateUserRole(userId, role);
            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            logger.error('Update user role error:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    // Delete user (admin only)
    async deleteUser(req, res) {
        try {
            const { userId } = req.params;
            await UserService.deleteUser(userId);
            res.json({
                success: true,
                message: 'User deleted successfully'
            });
        } catch (error) {
            logger.error('Delete user error:', error);
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }

    // Change password
    async changePassword(req, res) {
        try {
            const { currentPassword, newPassword } = req.body;
            const userId = req.user.id;

            if (!currentPassword || !newPassword) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide both current and new password'
                });
            }

            const user = await UserService.findById(userId);
            const isMatch = await user.comparePassword(currentPassword);

            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: 'Current password is incorrect'
                });
            }

            user.password = newPassword;
            await user.save();

            res.json({
                success: true,
                message: 'Password changed successfully'
            });
        } catch (error) {
            logger.error('Change password error:', error.message);
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    // Get user by ID (admin only)
    async getUserById(req, res) {
        try {
            const user = await UserService.findById(req.params.id);
            res.json({
                success: true,
                data: {
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        isVerified: user.emailVerified
                    }
                }
            });
        } catch (error) {
            logger.error('Get user by ID error:', error.message);
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new UserController(); 