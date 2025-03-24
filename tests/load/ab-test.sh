#!/bin/bash

# Create results directory if it doesn't exist
mkdir -p tests/load/results

# Test 1: Basic GET requests to scholarships endpoint
echo "Testing GET /api/scholarships"
ab -n 1000000 -c 100 http://localhost:3001/api/scholarships > tests/load/results/get-scholarships.txt

# Test 2: Authentication and protected endpoints
echo "Testing POST /api/auth/login"
ab -n 100000 -c 50 -p tests/load/login-data.json -T 'application/json' http://localhost:3001/api/auth/login > tests/load/results/auth-login.txt

# Test 3: Application submission
echo "Testing POST /api/applications"
ab -n 100000 -c 50 -p tests/load/application-data.json -T 'application/json' http://localhost:3001/api/applications > tests/load/results/post-applications.txt

# Test 4: Mixed workload
echo "Testing mixed workload"
for i in {1..10}; do
    ab -n 10000 -c 10 http://localhost:3001/api/scholarships > tests/load/results/mixed-$i.txt
    sleep 1
done

# Generate summary report
echo "Generating summary report..."
cat tests/load/results/*.txt > tests/load/results/summary.txt 