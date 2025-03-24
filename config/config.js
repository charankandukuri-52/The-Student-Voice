require('dotenv').config();

module.exports = {
    // Server configuration
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',

    // MongoDB configuration
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/user-db',

    // JWT configuration
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',

    // Email configuration
    email: {
        user: process.env.EMAIL_USER || 'your-gmail@gmail.com',
        password: process.env.EMAIL_PASSWORD || 'your-app-password'
    },

    // Security configuration
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,
    maxLoginAttempts: parseInt(process.env.MAX_LOGIN_ATTEMPTS) || 5,
    accountLockoutDuration: parseInt(process.env.ACCOUNT_LOCKOUT_DURATION) || 30, // minutes

    // Logging configuration
    logLevel: process.env.LOG_LEVEL || 'info',
    logFile: process.env.LOG_FILE || 'logs/user-service.log'
}; 