const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Public routes
router.post('/register', registerUser);

module.exports = router;
