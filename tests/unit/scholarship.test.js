const request = require('supertest');
const app = require('../../src/index');
const setupTestDB = require('../config/test.config');
const { createTestUser, createTestScholarship, clearTestData } = require('../helpers/test.helpers');

setupTestDB();

describe('Scholarship Tests', () => {
    let token;
    let testUser;
    let testScholarship;

    beforeEach(async () => {
        testUser = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
            role: 'admin'
        };

        const { token: userToken } = await createTestUser(testUser);
        token = userToken;

        testScholarship = {
            title: 'Test Scholarship',
            description: 'Test Description',
            amount: 1000,
            deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
            requirements: ['GPA > 3.5', 'Must be a senior'],
            category: 'Academic'
        };
    });

    afterEach(async () => {
        await clearTestData();
    });

    describe('POST /api/scholarships', () => {
        it('should create a new scholarship', async () => {
            const response = await request(app)
                .post('/api/scholarships')
                .set('Authorization', `Bearer ${token}`)
                .send(testScholarship);

            expect(response.status).toBe(201);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('title', testScholarship.title);
            expect(response.body.data).toHaveProperty('description', testScholarship.description);
            expect(response.body.data).toHaveProperty('amount', testScholarship.amount);
        });

        it('should not create scholarship without authentication', async () => {
            const response = await request(app)
                .post('/api/scholarships')
                .send(testScholarship);

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });

        it('should not create scholarship without required fields', async () => {
            const response = await request(app)
                .post('/api/scholarships')
                .set('Authorization', `Bearer ${token}`)
                .send({ title: 'Incomplete Scholarship' });

            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
        });
    });

    describe('GET /api/scholarships', () => {
        beforeEach(async () => {
            await createTestScholarship(testScholarship);
        });

        it('should get all scholarships', async () => {
            const response = await request(app)
                .get('/api/scholarships');

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(Array.isArray(response.body.data)).toBe(true);
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        it('should filter scholarships by category', async () => {
            const response = await request(app)
                .get('/api/scholarships')
                .query({ category: 'Academic' });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data.every(s => s.category === 'Academic')).toBe(true);
        });

        it('should filter scholarships by amount range', async () => {
            const response = await request(app)
                .get('/api/scholarships')
                .query({ minAmount: 500, maxAmount: 1500 });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data.every(s => s.amount >= 500 && s.amount <= 1500)).toBe(true);
        });
    });

    describe('GET /api/scholarships/:id', () => {
        let scholarshipId;

        beforeEach(async () => {
            const scholarship = await createTestScholarship(testScholarship);
            scholarshipId = scholarship._id;
        });

        it('should get scholarship by id', async () => {
            const response = await request(app)
                .get(`/api/scholarships/${scholarshipId}`);

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('_id', scholarshipId);
        });

        it('should return 404 for non-existent scholarship', async () => {
            const response = await request(app)
                .get(`/api/scholarships/${scholarshipId.slice(0, -1)}1`);

            expect(response.status).toBe(404);
            expect(response.body.success).toBe(false);
        });
    });

    describe('PUT /api/scholarships/:id', () => {
        let scholarshipId;

        beforeEach(async () => {
            const scholarship = await createTestScholarship(testScholarship);
            scholarshipId = scholarship._id;
        });

        it('should update scholarship', async () => {
            const updateData = {
                title: 'Updated Scholarship',
                amount: 2000
            };

            const response = await request(app)
                .put(`/api/scholarships/${scholarshipId}`)
                .set('Authorization', `Bearer ${token}`)
                .send(updateData);

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('title', updateData.title);
            expect(response.body.data).toHaveProperty('amount', updateData.amount);
        });

        it('should not update scholarship without authentication', async () => {
            const response = await request(app)
                .put(`/api/scholarships/${scholarshipId}`)
                .send({ title: 'Unauthorized Update' });

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });

        it('should not update scholarship with invalid data', async () => {
            const response = await request(app)
                .put(`/api/scholarships/${scholarshipId}`)
                .set('Authorization', `Bearer ${token}`)
                .send({ amount: -1000 });

            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
        });
    });

    describe('DELETE /api/scholarships/:id', () => {
        let scholarshipId;

        beforeEach(async () => {
            const scholarship = await createTestScholarship(testScholarship);
            scholarshipId = scholarship._id;
        });

        it('should delete scholarship', async () => {
            const response = await request(app)
                .delete(`/api/scholarships/${scholarshipId}`)
                .set('Authorization', `Bearer ${token}`);

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);

            // Verify scholarship is deleted
            const getResponse = await request(app)
                .get(`/api/scholarships/${scholarshipId}`);
            expect(getResponse.status).toBe(404);
        });

        it('should not delete scholarship without authentication', async () => {
            const response = await request(app)
                .delete(`/api/scholarships/${scholarshipId}`);

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });
    });
}); 