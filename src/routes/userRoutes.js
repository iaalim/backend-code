const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const authenticateUser = require('../middlewares/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/user-details', authenticateUser, (req, res) => {
    res.json({ userId: req.userId, message: 'User details fetched successfully' });
  });

module.exports = router;
