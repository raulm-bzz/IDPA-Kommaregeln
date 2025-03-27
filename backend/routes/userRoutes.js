const express = require('express');
const router = express.Router();
const { registerUser, getUser } = require('../controllers/userController');

// Route to register a new user
router.post('/register', registerUser);

// Route to get user by username
router.get('/:username', getUser);

module.exports = router;