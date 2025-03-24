# User Management Service

This is the User Management Microservice for the TSV Backend. It handles user authentication, authorization, and management with role-based access control.

## Features

- User registration and authentication
- JWT-based authentication
- Role-based access control (Admin and User roles)
- Password reset functionality
- Email verification
- Account security features (login attempts, account locking)
- Comprehensive logging
- API documentation

## Prerequisites

- Node.js (>=14.0.0)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/users-db
   JWT_SECRET=your-secret-key
   JWT_EXPIRES_IN=24h
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   BCRYPT_SALT_ROUNDS=10
   MAX_LOGIN_ATTEMPTS=5
   ACCOUNT_LOCKOUT_DURATION=30
   LOG_LEVEL=info
   LOG_FILE=logs/user-service.log
   ```

## Running the Service

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Public Routes

#### Register User
- **POST** `/api/users/register`
- Body:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "phoneNumber": "1234567890"
  }
  ```

#### Login
- **POST** `/api/users/login`
- Body:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Forgot Password
- **POST** `/api/users/forgot-password`
- Body:
  ```json
  {
    "email": "john@example.com"
  }
  ```

#### Reset Password
- **POST** `/api/users/reset-password`
- Body:
  ```json
  {
    "token": "reset-token",
    "newPassword": "newpassword123"
  }
  ```

#### Verify Email
- **GET** `/api/users/verify-email/:token`

### Protected Routes (Requires Authentication)

#### Logout
- **POST** `/api/users/logout`
- Headers: `Authorization: Bearer <token>`

#### Get Profile
- **GET** `/api/users/profile`
- Headers: `Authorization: Bearer <token>`

#### Update Profile
- **PUT** `/api/users/profile`
- Headers: `Authorization: Bearer <token>`
- Body:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "phoneNumber": "1234567890"
  }
  ```

### Admin Routes

#### Get All Users
- **GET** `/api/users/users`
- Headers: `Authorization: Bearer <token>`

#### Update User Role
- **PUT** `/api/users/users/:userId/role`
- Headers: `Authorization: Bearer <token>`
- Body:
  ```json
  {
    "role": "admin"
  }
  ```

#### Delete User
- **DELETE** `/api/users/users/:userId`
- Headers: `Authorization: Bearer <token>`

## Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Linting

Run linter:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control
- Account locking after failed login attempts
- Secure password reset flow
- Email verification
- Helmet for security headers
- CORS enabled
- Input validation
- Error handling

## Logging

The service uses Winston for logging with the following features:
- Console logging in development
- File logging in production
- Log rotation
- Different log levels
- Structured JSON logging

## Error Handling

The service includes comprehensive error handling:
- Validation errors
- Authentication errors
- Authorization errors
- Database errors
- Unhandled promise rejections
- Custom error responses

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
