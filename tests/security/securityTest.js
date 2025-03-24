const zap = require('zap-api');

const securityTestConfig = {
    target: 'http://localhost:3001',
    context: {
        name: 'scholarship-api',
        urls: [
            'http://localhost:3001/api/auth/*',
            'http://localhost:3001/api/scholarships/*'
        ]
    },
    activeScan: {
        scanPolicyName: 'API-Scan',
        target: 'http://localhost:3001',
        recurse: true,
        inScopeOnly: true,
        scanAsUser: true
    },
    spider: {
        maxDepth: 5,
        acceptCookies: true
    }
};

async function runSecurityTests() {
    try {
        const zapApi = new zap({
            apiKey: process.env.ZAP_API_KEY,
            proxy: {
                host: 'localhost',
                port: 8080
            }
        });

        // Start new session
        await zapApi.core.newSession('scholarship-api-test');

        // Spider the application
        await zapApi.spider.scan(securityTestConfig.target);

        // Run active scan
        const scanId = await zapApi.ascan.scan(securityTestConfig.target);
        
        // Wait for scan to complete
        let scanStatus = 0;
        while (scanStatus < 100) {
            const status = await zapApi.ascan.status(scanId);
            scanStatus = status;
            await new Promise(resolve => setTimeout(resolve, 5000));
        }

        // Get alerts
        const alerts = await zapApi.core.alerts();
        
        // Generate report
        const report = await zapApi.reports.generate({
            title: 'Scholarship API Security Report',
            template: 'traditional-html',
            reportFileName: 'security-report.html',
            reportDir: '../../reports'
        });

        console.log('Security test completed. Report generated:', report);
        console.log('Alerts found:', alerts.length);
        
        // Close session
        await zapApi.core.shutdown();
    } catch (error) {
        console.error('Security test failed:', error);
        process.exit(1);
    }
}

runSecurityTests(); 