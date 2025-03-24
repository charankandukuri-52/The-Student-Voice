const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logger = require('../config/logger');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No authentication token, access denied'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if user is pending verification
        if (user.isPendingVerification) {
            return res.status(403).json({
                success: false,
                message: 'Please verify your email address before accessing this feature'
            });
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        logger.error('Authentication error:', error.message);
        res.status(401).json({
            success: false,
            message: 'Please authenticate'
        });
    }
};

const checkRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Insufficient permissions.'
            });
        }
        next();
    };
};

module.exports = {
    auth,
    checkRole
}; 