const prometheus = require('prom-client');
const express = require('express');
const os = require('os');

// Create a Registry to register the metrics
const register = new prometheus.Registry();
prometheus.collectDefaultMetrics({ register });

// Custom metrics
const httpRequestDuration = new prometheus.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 2, 5]
});

const activeUsers = new prometheus.Gauge({
    name: 'active_users',
    help: 'Number of active users'
});

const memoryUsage = new prometheus.Gauge({
    name: 'memory_usage_bytes',
    help: 'Memory usage in bytes',
    labelNames: ['type']
});

const cpuUsage = new prometheus.Gauge({
    name: 'cpu_usage_percent',
    help: 'CPU usage percentage',
    labelNames: ['cpu']
});

// Register custom metrics
register.registerMetric(httpRequestDuration);
register.registerMetric(activeUsers);
register.registerMetric(memoryUsage);
register.registerMetric(cpuUsage);

// Create Express app for metrics endpoint
const app = express();

// Metrics endpoint
app.get('/metrics', async (req, res) => {
    try {
        // Update memory metrics
        const used = process.memoryUsage();
        Object.keys(used).forEach(key => {
            memoryUsage.set({ type: key }, used[key]);
        });

        // Update CPU metrics
        const cpus = os.cpus();
        cpus.forEach((cpu, index) => {
            const total = Object.values(cpu.times).reduce((acc, time) => acc + time, 0);
            const idle = cpu.times.idle;
            const usage = ((total - idle) / total) * 100;
            cpuUsage.set({ cpu: `cpu${index}` }, usage);
        });

        res.set('Content-Type', register.contentType);
        res.end(await register.metrics());
    } catch (err) {
        res.status(500).end(err);
    }
});

// Start metrics server
const PORT = process.env.METRICS_PORT || 9090;
app.listen(PORT, () => {
    console.log(`Metrics server running on port ${PORT}`);
});

// Export metrics for use in main application
module.exports = {
    httpRequestDuration,
    activeUsers,
    memoryUsage,
    cpuUsage
}; 