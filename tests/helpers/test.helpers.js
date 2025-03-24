const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Scholarship = require('../../models/Scholarship');
const Application = require('../../models/Application');

const generateTestToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

const createTestUser = async (userData = {}) => {
    const defaultUser = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        role: 'student',
        ...userData
    };

    const user = await User.create(defaultUser);
    const token = generateTestToken(user._id);
    return { user, token };
};

const createTestScholarship = async (scholarshipData = {}) => {
    const defaultScholarship = {
        title: 'Test Scholarship',
        description: 'Test Description',
        amount: 1000,
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        requirements: ['GPA > 3.5', 'Must be a senior'],
        category: 'Academic',
        ...scholarshipData
    };

    return await Scholarship.create(defaultScholarship);
};

const createTestApplication = async (userId, scholarshipId, applicationData = {}) => {
    const defaultApplication = {
        userId,
        scholarshipId,
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
        },
        status: 'pending',
        ...applicationData
    };

    return await Application.create(defaultApplication);
};

const clearTestData = async () => {
    await User.deleteMany({});
    await Scholarship.deleteMany({});
    await Application.deleteMany({});
};

module.exports = {
    generateTestToken,
    createTestUser,
    createTestScholarship,
    createTestApplication,
    clearTestData
}; 