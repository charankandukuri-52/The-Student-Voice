const request = require('supertest');
const app = require('../../src/index');
const setupTestDB = require('../config/test.config');
const { createTestUser, createTestScholarship, createTestApplication, clearTestData } = require('../helpers/test.helpers');

setupTestDB();

describe('Application Tests', () => {
    let token;
    let testUser;
    let testScholarship;
    let testApplication;

    beforeEach(async () => {
        testUser = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123',
            role: 'student'
        };

        const { user, token: userToken } = await createTestUser(testUser);
        token = userToken;

        testScholarship = {
            title: 'Test Scholarship',
            description: 'Test Description',
            amount: 1000,
            deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
            requirements: ['GPA > 3.5', 'Must be a senior'],
            category: 'Academic'
        };

        const scholarship = await createTestScholarship(testScholarship);

        testApplication = {
            scholarshipId: scholarship._id,
            personalInfo: {
                fullName: 'John Doe',
                dateOfBirth: '2000-01-01',
                address: '123 Test St',
                phone: '1234567890'
            },
            academicInfo: {
                currentGPA: 3.8,
                expectedGraduation: '2024-12-31',
                major: 'Computer Science'
            },
            documents: {
                transcript: 'transcript.pdf',
                resume: 'resume.pdf',
                essay: 'essay.pdf'
            }
        };
    });

    afterEach(async () => {
        await clearTestData();
    });

    describe('POST /api/applications', () => {
        it('should create a new application', async () => {
            const response = await request(app)
                .post('/api/applications')
                .set('Authorization', `Bearer ${token}`)
                .send(testApplication);

            expect(response.status).toBe(201);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('scholarshipId', testScholarship._id);
            expect(response.body.data).toHaveProperty('status', 'pending');
        });

        it('should not create application without authentication', async () => {
            const response = await request(app)
                .post('/api/applications')
                .send(testApplication);

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });

        it('should not create duplicate application for same scholarship', async () => {
            await createTestApplication(testUser._id, testScholarship._id, testApplication);
            const response = await request(app)
                .post('/api/applications')
                .set('Authorization', `Bearer ${token}`)
                .send(testApplication);

            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
        });

        it('should not create application with invalid data', async () => {
            const invalidApplication = {
                ...testApplication,
                academicInfo: {
                    ...testApplication.academicInfo,
                    currentGPA: 5.0 // Invalid GPA
                }
            };

            const response = await request(app)
                .post('/api/applications')
                .set('Authorization', `Bearer ${token}`)
                .send(invalidApplication);

            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
        });
    });

    describe('GET /api/applications', () => {
        beforeEach(async () => {
            await createTestApplication(testUser._id, testScholarship._id, testApplication);
        });

        it('should get user applications', async () => {
            const response = await request(app)
                .get('/api/applications')
                .set('Authorization', `Bearer ${token}`);

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(Array.isArray(response.body.data)).toBe(true);
            expect(response.body.data.length).toBeGreaterThan(0);
        });

        it('should not get applications without authentication', async () => {
            const response = await request(app)
                .get('/api/applications');

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });

        it('should filter applications by status', async () => {
            const response = await request(app)
                .get('/api/applications')
                .set('Authorization', `Bearer ${token}`)
                .query({ status: 'pending' });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data.every(a => a.status === 'pending')).toBe(true);
        });
    });

    describe('GET /api/applications/:id', () => {
        let applicationId;

        beforeEach(async () => {
            const application = await createTestApplication(testUser._id, testScholarship._id, testApplication);
            applicationId = application._id;
        });

        it('should get application by id', async () => {
            const response = await request(app)
                .get(`/api/applications/${applicationId}`)
                .set('Authorization', `Bearer ${token}`);

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('_id', applicationId);
        });

        it('should not get application without authentication', async () => {
            const response = await request(app)
                .get(`/api/applications/${applicationId}`);

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });

        it('should not get application of another user', async () => {
            // Create another user and application
            const otherUser = {
                username: 'otheruser',
                email: 'other@example.com',
                password: 'password123'
            };

            const { token: otherToken } = await createTestUser(otherUser);

            const response = await request(app)
                .get(`/api/applications/${applicationId}`)
                .set('Authorization', `Bearer ${otherToken}`);

            expect(response.status).toBe(403);
            expect(response.body.success).toBe(false);
        });
    });

    describe('PUT /api/applications/:id/status', () => {
        let applicationId;
        let adminToken;

        beforeEach(async () => {
            const application = await createTestApplication(testUser._id, testScholarship._id, testApplication);
            applicationId = application._id;

            // Create admin user
            const adminUser = {
                username: 'admin',
                email: 'admin@example.com',
                password: 'password123',
                role: 'admin'
            };

            const { token: adminUserToken } = await createTestUser(adminUser);
            adminToken = adminUserToken;
        });

        it('should update application status', async () => {
            const response = await request(app)
                .put(`/api/applications/${applicationId}/status`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ status: 'approved' });

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('status', 'approved');
        });

        it('should not update status without authentication', async () => {
            const response = await request(app)
                .put(`/api/applications/${applicationId}/status`)
                .send({ status: 'approved' });

            expect(response.status).toBe(401);
            expect(response.body.success).toBe(false);
        });

        it('should not update status with invalid value', async () => {
            const response = await request(app)
                .put(`/api/applications/${applicationId}/status`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ status: 'invalid_status' });

            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
        });

        it('should not update status without admin role', async () => {
            const response = await request(app)
                .put(`/api/applications/${applicationId}/status`)
                .set('Authorization', `Bearer ${token}`)
                .send({ status: 'approved' });

            expect(response.status).toBe(403);
            expect(response.body.success).toBe(false);
        });
    });
}); 