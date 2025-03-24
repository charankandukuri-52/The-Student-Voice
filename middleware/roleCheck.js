const logger = require('../config/logger');

const checkRole = (roles) => {
    return (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    error: 'User not authenticated'
                });
            }

            if (!roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    error: 'Access denied. Insufficient permissions.'
                });
            }

            next();
        } catch (error) {
            logger.error('Role check error:', error);
            res.status(500).json({
                success: false,
                error: 'Server error during role check'
            });
        }
    };
};

module.exports = {
    checkRole
}; 