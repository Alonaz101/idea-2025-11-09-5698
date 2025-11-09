const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/users - create new user
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }
    const user = new User({ username });
    await user.setPassword(password);
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
