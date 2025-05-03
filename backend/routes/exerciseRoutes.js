const express = require('express')
const router = express.Router()
const { addExercise, getExercises, findExerciseByID } = require('../controllers/exerciseController')

// Route to add a new exercise
router.post('/add', addExercise)

// Route to get all exercises
router.get('/', getExercises)

// Route to get exercise by ID
router.get('/:id', findExerciseByID)

module.exports = router