// routes/userRoutes.js

const express = require('express');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();
        
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email and password
        const user = await User.findOne({ email, password });
        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
