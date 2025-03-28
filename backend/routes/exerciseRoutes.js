const express = require('express')
const router = express.Router()
const { addExercise, getExercises } = require('../controllers/exerciseController')

// Route to add a new exercise
router.post('/add', addExercise)

// Route to get all exercises
router.get('/', getExercises)

module.exports = router