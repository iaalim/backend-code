# User Authentication Backend

This is a backend implementation for user authentication features, including signup, login, and user details retrieval. It is built using Node.js with Express.js and an RDBMS (MySQL) to store user information. The implementation includes user authentication and validation, secure password hashing, token-based authentication, error handling, and integration with a database.

## Requirements

- Node.js
- MySQL

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

curl -X POST -H "Content-Type: application/json" -d '{
  "firstName": "John",
  "lastName": "abc",
  "username": "xyz",
  "email": "abc@example.com",
  "password": "password123"
}' http://localhost:3000/api/users/register


## User Login

curl -X POST -H "Content-Type: application/json" -d '{
  "email": "abc@example.com",
  "password": "password123"
}' http://localhost:3000/api/users/login

## User Details

curl -X GET -H "Authorization: Bearer <token>" http://localhost:3000/api/users/user-details

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
