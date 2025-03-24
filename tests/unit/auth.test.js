const request = require('supertest');
const app = require('../../src/index');
const setupTestDB = require('../config/test.config');
const { createTestUser, clearTestData } = require('../helpers/test.helpers');

setupTestDB();

describe('Authentication Tests', () => {
    let testUser;

    beforeEach(async () => {
        testUser = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
        };
    });

    afterEach(async () => {
        await clearTestData();
    });

    describe('POST /api/auth/register', () => {
        it('should register a new user', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send(testUser);

            expect(response.status).toBe(201);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('token');
            expect(response.body.data.user).toHaveProperty('username', testUser.username);
            expect(response.body.data.user).toHaveProperty('email', testUser.email);
            expect(response.body.data.user).not.toHaveProperty('password');
        });

        it('should not register user with existing email', async () => {
            await createTestUser(testUser);
            const response = await request(app)
                .post('/api/auth/register')
                .send(testUser);

            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
        });
    });

    describe('POST /api/auth/login', () => {
        beforeEach(async () => {
            await createTestUser(testUser);
        });

        it('should login with valid credentials', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: testUser.email,
                    password: testUser.password
                });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('token');
        });

        it('should not login with invalid password', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: testUser.email,
                    password: 'wrongpassword'
                });

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });
    });

    describe('GET /api/auth/me', () => {
        let token;

        beforeEach(async () => {
            const { token: userToken } = await createTestUser(testUser);
            token = userToken;
        });

        it('should get current user profile', async () => {
            const response = await request(app)
                .get('/api/auth/me')
                .set('Authorization', `Bearer ${token}`);

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('username', testUser.username);
            expect(response.body.data).toHaveProperty('email', testUser.email);
        });

        it('should not get profile without token', async () => {
            const response = await request(app)
                .get('/api/auth/me');

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });
    });
}); 