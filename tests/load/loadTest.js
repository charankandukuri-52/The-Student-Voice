const artillery = require('artillery');

const loadTestConfig = {
    config: {
        target: 'http://localhost:3001',
        phases: [
            { duration: 300, arrivalRate: 100, name: 'Warm up' },
            { duration: 600, arrivalRate: 500, name: 'Ramping up load' },
            { duration: 1200, arrivalRate: 1000, name: 'Peak load' },
            { duration: 600, arrivalRate: 2000, name: 'Stress test' },
            { duration: 300, arrivalRate: 500, name: 'Ramp down' }
        ],
        variables: {
            token: ''
        },
        payload: {
            path: 'test-data.json',
            fields: ['email', 'password']
        },
        plugins: {
            metrics: {
                enabled: true,
                output: 'load-test-results.json'
            }
        }
    },
    scenarios: [
        {
            name: 'Scholarship API Flow',
            flow: [
                { post: { url: '/api/auth/login', json: { email: '{{ email }}', password: '{{ password }}' } } },
                { think: 1 },
                { get: { url: '/api/scholarships' } },
                { think: 1 },
                { get: { url: '/api/scholarships/search?type=government' } },
                { think: 1 },
                { get: { url: '/api/applications' } },
                { think: 1 }
            ]
        },
        {
            name: 'Application Submission Flow',
            flow: [
                { post: { url: '/api/auth/login', json: { email: '{{ email }}', password: '{{ password }}' } } },
                { think: 1 },
                { post: { url: '/api/applications', json: {
                    scholarshipId: '{{ $randomString() }}',
                    personalInfo: {
                        fullName: 'Test User',
                        dateOfBirth: '2000-01-01',
                        address: '123 Test St',
                        phone: '1234567890'
                    },
                    academicInfo: {
                        currentGPA: 3.8,
                        expectedGraduation: '2024-12-31',
                        major: 'Computer Science'
                    }
                }}},
                { think: 1 }
            ]
        }
    ]
};

artillery.run(loadTestConfig, (err, report) => {
    if (err) {
        console.error('Load test failed:', err);
        process.exit(1);
    }
    console.log('Load test completed:', report);
}); 