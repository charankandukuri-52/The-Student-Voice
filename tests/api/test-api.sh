#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# Base URL
BASE_URL="http://localhost:3001"

# Test counter
TESTS=0
PASSED=0
FAILED=0

# Function to print test result
print_result() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ $1${NC}"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗ $1${NC}"
        FAILED=$((FAILED + 1))
    fi
    TESTS=$((TESTS + 1))
}

# Function to make API request
make_request() {
    local method=$1
    local endpoint=$2
    local data=$3
    local token=$4
    
    if [ -n "$token" ]; then
        curl -s -X $method "$BASE_URL$endpoint" \
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer $token" \
            ${data:+-d "$data"}
    else
        curl -s -X $method "$BASE_URL$endpoint" \
            -H "Content-Type: application/json" \
            ${data:+-d "$data"}
    fi
}

echo "Starting API Tests..."

# Test 1: Register new user
echo -e "\nTesting /api/auth/register"
REGISTER_DATA='{
    "email": "test@example.com",
    "password": "testpassword123",
    "role": "student",
    "firstName": "Test",
    "lastName": "User",
    "phoneNumber": "+1234567890"
}'
response=$(make_request "POST" "/api/auth/register" "$REGISTER_DATA")
print_result "Register new user"

# Test 2: Login user
echo -e "\nTesting /api/auth/login"
LOGIN_DATA='{
    "email": "test@example.com",
    "password": "testpassword123"
}'
response=$(make_request "POST" "/api/auth/login" "$LOGIN_DATA")
TOKEN=$(echo $response | grep -o '"token":"[^"]*' | cut -d'"' -f4)
print_result "Login user"

# Test 3: Get all scholarships
echo -e "\nTesting GET /api/scholarships"
response=$(make_request "GET" "/api/scholarships" "" "$TOKEN")
print_result "Get all scholarships"

# Test 4: Create new scholarship (Admin only)
echo -e "\nTesting POST /api/scholarships"
SCHOLARSHIP_DATA='{
    "title": "Test Scholarship",
    "description": "Test Description",
    "amount": 5000,
    "deadline": "2024-12-31",
    "requirements": {
        "minGPA": 3.5,
        "academicLevel": "undergraduate",
        "majors": ["Computer Science"],
        "citizenship": ["US"],
        "documents": ["transcript"]
    },
    "type": "merit",
    "status": "active",
    "maxAwards": 5,
    "renewable": true
}'
response=$(make_request "POST" "/api/scholarships" "$SCHOLARSHIP_DATA" "$TOKEN")
SCHOLARSHIP_ID=$(echo $response | grep -o '"_id":"[^"]*' | cut -d'"' -f4)
print_result "Create new scholarship"

# Test 5: Get scholarship by ID
echo -e "\nTesting GET /api/scholarships/:id"
response=$(make_request "GET" "/api/scholarships/$SCHOLARSHIP_ID" "" "$TOKEN")
print_result "Get scholarship by ID"

# Test 6: Update scholarship
echo -e "\nTesting PUT /api/scholarships/:id"
UPDATE_DATA='{
    "title": "Updated Test Scholarship",
    "amount": 6000
}'
response=$(make_request "PUT" "/api/scholarships/$SCHOLARSHIP_ID" "$UPDATE_DATA" "$TOKEN")
print_result "Update scholarship"

# Test 7: Submit application
echo -e "\nTesting POST /api/applications"
APPLICATION_DATA='{
    "scholarshipId": "'$SCHOLARSHIP_ID'",
    "personalInfo": {
        "fullName": "Test User",
        "dateOfBirth": "2000-01-01",
        "address": "123 Test St",
        "city": "Test City",
        "state": "TS",
        "zipCode": "12345",
        "phoneNumber": "+1234567890",
        "citizenship": "US"
    },
    "academicInfo": {
        "currentGPA": 3.8,
        "expectedGraduation": "2024-12-31",
        "major": "Computer Science",
        "minor": "Mathematics",
        "currentYear": "Junior",
        "creditsCompleted": 75,
        "creditsInProgress": 15
    },
    "financialInfo": {
        "fafsaSubmitted": true,
        "expectedFamilyContribution": 5000,
        "otherScholarships": []
    }
}'
response=$(make_request "POST" "/api/applications" "$APPLICATION_DATA" "$TOKEN")
APPLICATION_ID=$(echo $response | grep -o '"_id":"[^"]*' | cut -d'"' -f4)
print_result "Submit application"

# Test 8: Get user's applications
echo -e "\nTesting GET /api/applications"
response=$(make_request "GET" "/api/applications" "" "$TOKEN")
print_result "Get user's applications"

# Test 9: Get application by ID
echo -e "\nTesting GET /api/applications/:id"
response=$(make_request "GET" "/api/applications/$APPLICATION_ID" "" "$TOKEN")
print_result "Get application by ID"

# Test 10: Get scholarship analytics
echo -e "\nTesting GET /api/analytics/scholarships"
response=$(make_request "GET" "/api/analytics/scholarships" "" "$TOKEN")
print_result "Get scholarship analytics"

# Test 11: Get application analytics
echo -e "\nTesting GET /api/analytics/applications"
response=$(make_request "GET" "/api/analytics/applications" "" "$TOKEN")
print_result "Get application analytics"

# Test 12: Get user analytics
echo -e "\nTesting GET /api/analytics/users"
response=$(make_request "GET" "/api/analytics/users" "" "$TOKEN")
print_result "Get user analytics"

# Print summary
echo -e "\nTest Summary:"
echo "Total Tests: $TESTS"
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}" 