require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Redis = require('ioredis');

// Connect to test database
beforeAll(async () => {
    const testDbUri = process.env.MONGODB_URI.replace('scholarship-db', 'scholarship-test');
    await mongoose.connect(testDbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

// Clear database after each test
afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany();
    }
});

// Close database connection after all tests
afterAll(async () => {
    await mongoose.connection.close();
});

// Clear Redis cache after each test
const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

afterEach(async () => {
    await redis.flushall();
});

afterAll(async () => {
    await redis.quit();
}); 