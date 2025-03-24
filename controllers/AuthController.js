const UserModel = require('../models/UserModel');

class AuthController {
    // Register new user
    static async register(req, res) {
        try {
            const { username, email, password } = req.body;

            // Check if user already exists
            const existingUser = await UserModel.findOne({ 
                $or: [{ email }, { username }] 
            });

            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    error: 'User already exists'
                });
            }

            // Create new user
            const user = new UserModel({
                username,
                email,
                password
            });

            await user.save();
            const token = user.generateAuthToken();

            res.status(201).json({
                success: true,
                data: {
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        role: user.role
                    },
                    token
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Error registering user'
            });
        }
    }

    // Login user
    static async login(req, res) {
        try {
            const { email, password } = req.body;

            // Find user
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(401).json({
                    success: false,
                    error: 'Invalid credentials'
                });
            }

            // Check password
            const isMatch = await user.checkPassword(password);
            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    error: 'Invalid credentials'
                });
            }

            // Generate token
            const token = user.generateAuthToken();

            res.json({
                success: true,
                data: {
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        role: user.role
                    },
                    token
                }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Error logging in'
            });
        }
    }

    // Get current user
    static async getCurrentUser(req, res) {
        try {
            const user = await UserModel.findById(req.user._id).select('-password');
            res.json({
                success: true,
                data: user
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: 'Error fetching user'
            });
        }
    }
}

module.exports = AuthController; 