const bcrypt = require('bcrypt');
const User = require('../models/user');

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
};

module.exports = {
  registerUser,
};
