const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('../config/config');
const logger = require('../config/logger');

class UserService {
    // Create new user
    async createUser(userData) {
        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email: userData.email });
            if (existingUser) {
                throw new Error('Email already registered');
            }

            // Create new user
            const user = new User(userData);
            await user.save();

            logger.info('User created successfully');
            return user;
        } catch (error) {
            logger.error('Error creating user:', error.message);
            throw error;
        }
    }

    // Find user by email
    async findByEmail(email) {
        try {
            return await User.findOne({ email }).select('+password');
        } catch (error) {
            logger.error('Error finding user by email:', error);
            throw error;
        }
    }

    // Find user by ID
    async findById(id) {
        try {
            const user = await User.findById(id);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            logger.error('Error finding user:', error.message);
            throw error;
        }
    }

    // Update user
    async updateUser(id, updateData) {
        try {
            const user = await User.findByIdAndUpdate(
                id,
                { $set: updateData },
                { new: true, runValidators: true }
            );

            if (!user) {
                throw new Error('User not found');
            }

            return user;
        } catch (error) {
            logger.error('Error updating user:', error.message);
            throw error;
        }
    }

    // Delete user
    async deleteUser(userId) {
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            logger.error('Error deleting user:', error.message);
            throw error;
        }
    }

    // Generate JWT token
    generateToken(user) {
        return jwt.sign(
            { userId: user._id, role: user.role },
            config.jwtSecret,
            { expiresIn: config.jwtExpiresIn }
        );
    }

    // Handle login
    async login(email, password) {
        try {
            const user = await User.findOne({ email }).select('+password');
            
            if (!user) {
                throw new Error('Invalid credentials');
            }

            if (user.accountLocked) {
                if (user.accountLockedUntil > Date.now()) {
                    throw new Error('Account is locked. Please try again later.');
                } else {
                    // Reset lock if expired
                    user.accountLocked = false;
                    user.failedLoginAttempts = 0;
                    await user.save();
                }
            }

            if (!user.emailVerified) {
                throw new Error('Please verify your email before logging in');
            }

            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                await user.incrementFailedLoginAttempts();
                throw new Error('Invalid credentials');
            }

            // Reset failed attempts on successful login
            await user.resetFailedLoginAttempts();
            user.lastLogin = Date.now();
            await user.save();

            const token = this.generateToken(user);
            return { user, token };
        } catch (error) {
            logger.error('Login error:', error.message);
            throw error;
        }
    }

    // Handle logout
    async logout(userId) {
        try {
            // In a real application, you might want to invalidate the token
            // by adding it to a blacklist or updating the user's last logout time
            return true;
        } catch (error) {
            logger.error('Logout error:', error);
            throw error;
        }
    }

    // Handle forgot password
    async forgotPassword(email) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('User not found');
            }

            if (!user.emailVerified) {
                throw new Error('Please verify your email first');
            }

            const resetToken = user.generatePasswordResetToken();
            await user.save();

            return resetToken;
        } catch (error) {
            logger.error('Error in forgot password:', error.message);
            throw error;
        }
    }

    // Handle reset password
    async resetPassword(token, newPassword) {
        try {
            const hashedToken = crypto
                .createHash('sha256')
                .update(token)
                .digest('hex');

            const user = await User.findOne({
                passwordResetToken: hashedToken,
                passwordResetExpires: { $gt: Date.now() }
            });

            if (!user) {
                throw new Error('Invalid or expired reset token');
            }

            user.password = newPassword;
            user.passwordResetToken = undefined;
            user.passwordResetExpires = undefined;
            await user.save();

            return user;
        } catch (error) {
            logger.error('Error resetting password:', error.message);
            throw error;
        }
    }

    // Verify email
    async verifyEmail(token) {
        try {
            // Find user by verification token
            const user = await User.findOne({
                verificationToken: token,
                verificationTokenExpires: { $gt: Date.now() }
            });

            if (!user) {
                throw new Error('Invalid or expired verification token');
            }

            // Verify email
            const verified = user.verifyEmail(token);
            if (!verified) {
                throw new Error('Invalid or expired verification token');
            }

            await user.save();
            logger.info('Email verified successfully for user:', user.email);
            return user;
        } catch (error) {
            logger.error('Email verification error:', error.message);
            throw error;
        }
    }

    // Get all users (admin only)
    async getAllUsers() {
        try {
            return await User.find().select('-password');
        } catch (error) {
            logger.error('Error getting all users:', error.message);
            throw error;
        }
    }

    // Update user role (admin only)
    async updateUserRole(userId, role) {
        try {
            const user = await User.findByIdAndUpdate(
                userId,
                { role },
                { new: true, runValidators: true }
            );

            if (!user) {
                throw new Error('User not found');
            }

            return user;
        } catch (error) {
            logger.error('Error updating user role:', error.message);
            throw error;
        }
    }
}

module.exports = new UserService(); 