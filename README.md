# User Authentication Backend

This is a backend implementation for user authentication features, including signup, login, and user details retrieval. It is built using Node.js with Express.js and an RDBMS (MySQL) to store user information. The implementation includes user authentication and validation, secure password hashing, token-based authentication, error handling, and integration with a database.

## Requirements

- Node.js (version X.X.X)
- MySQL (version X.X.X)

## Installation

Install dependencies:

- npm install

Set up the database:

- Create a MySQL database.
- Update the database connection string in src/models/user.js with your MySQL credentials.

Start the server:

- npm run start

## API Documentation

## Features

- User Signup
- User Login
- User Details

## User Registration

- Endpoint: POST /api/users/register

- Request Body:

{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123"
}

- Response:

{
  "message": "User registered successfully"
}

## User Login

- Endpoint: POST /api/users/login

- Request Body:

{
  "email": "johndoe@example.com",
  "password": "password123"
}

- Response:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyMzg2MzIxMCwiZXhwIjoxNjIzODg5NjEwfQ.3PzS4VXJ_wdIu8DEJnG2I9UIgwnFgTh0o29mGZk8cjs"
}

## User Details

- Endpoint: GET /api/users/user-details

- Request Header:

- Authorization: Bearer <token>

- Response:

{
  "userId": 1,
  "message": "User details fetched successfully"
}

## Security Considerations

- The user passwords are securely hashed using bcrypt before storage.
- Token-based authentication (JWT) is used to manage user sessions and authentication status.
- Server-side validation and input sanitization are implemented to prevent common security vulnerabilities.
- Parameterized queries are used to prevent SQL injection attacks.
- Protection against cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks is implemented.

## Folder Structure

backend-code/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
