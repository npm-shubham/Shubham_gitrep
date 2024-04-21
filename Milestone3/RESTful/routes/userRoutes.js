// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../model/user');  // Make sure the path to your model is correct

// GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET a user by ID
router.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST a new user
router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password ) {
            return res.status(400).json({ message: 'username, email and password are required' });
        }
        const newUser = new User({
            username,
            email,
            password
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern.email) {
            // Duplicate email error
            return res.status(400).json({ message: 'Duplicate email' });
        }
        console.error('Failed to create user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PATCH update a user by ID
router.patch('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email, password } = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: { username, email, password } }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('Failed to update user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE a user by ID
router.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        console.error('Failed to delete user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
