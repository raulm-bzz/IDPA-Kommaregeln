const express = require('express')
const router = express.Router()
const { registerUser, findUser, getAllUsers, addUserEx, loginUser, findUserByID } = require('../controllers/userController')

// Route to register a new user
router.post('/register', registerUser)

router.post('/login', loginUser)

// Route to get user by username
// router.get('/:username', findUser)

router.get('/', getAllUsers)

router.post('/adduserex', addUserEx)

router.get('/:id', findUserByID)

module.exports = router