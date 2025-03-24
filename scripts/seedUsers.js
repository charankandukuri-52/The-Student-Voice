const mongoose = require('mongoose');
const config = require('../config/config');
const User = require('../models/User');
const logger = require('../config/logger');

// Mock data generator
const generateMockUsers = () => {
    const users = [];
    const roles = ['admin', 'user'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    const states = ['NY', 'CA', 'IL', 'TX', 'AZ', 'PA', 'TX', 'CA', 'TX', 'CA'];
    
    // Generate 50 users
    for (let i = 1; i <= 50; i++) {
        const isAdmin = i <= 5; // First 5 users will be admins
        const firstName = `User${i}`;
        const lastName = `LastName${i}`;
        const email = `user${i}@example.com`;
        const phoneNumber = `+1${Math.floor(1000000000 + Math.random() * 9000000000)}`;
        const cityIndex = Math.floor(Math.random() * cities.length);
        
        users.push({
            firstName,
            lastName,
            email,
            password: 'Password123!', // Will be hashed by the model
            role: isAdmin ? 'admin' : 'user',
            phoneNumber,
            address: {
                street: `${Math.floor(Math.random() * 9999) + 1} Main St`,
                city: cities[cityIndex],
                state: states[cityIndex],
                zipCode: Math.floor(10000 + Math.random() * 90000).toString(),
                country: 'USA'
            },
            isActive: true,
            emailVerified: Math.random() > 0.2, // 80% of users are verified
            lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
            failedLoginAttempts: 0,
            accountLocked: false
        });
    }

    return users;
};

// Seed database
const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(config.mongoUri);
        logger.info('Connected to MongoDB');

        // Clear existing users
        await User.deleteMany({});
        logger.info('Cleared existing users');

        // Generate mock users
        const mockUsers = generateMockUsers();

        // Insert mock users
        const insertedUsers = await User.insertMany(mockUsers);
        logger.info(`Successfully inserted ${insertedUsers.length} users`);

        // Log admin users
        const adminUsers = insertedUsers.filter(user => user.role === 'admin');
        logger.info('Admin users created:', adminUsers.map(user => user.email));

        // Close connection
        await mongoose.connection.close();
        logger.info('Database connection closed');

        process.exit(0);
    } catch (error) {
        logger.error('Error seeding database:', error);
        process.exit(1);
    }
};

// Run the seed function
seedDatabase(); 