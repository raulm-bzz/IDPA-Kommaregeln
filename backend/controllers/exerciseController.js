const Exercise = require('../schemas/exercise')

// Add new exercise
const addExercise = async (req, res) => {
    try {
        content = req.body
        const exerciseType = content.exerciseType, name = content.name, text = content.text
        const newExercise = new Exercise({exerciseType, name, text})
        await newExercise.save()
        res.status(201).json({ message: "Exercise added successfully" })
    } catch (error) {
        res.status(400).json({ error: "Failed to add exercise" })
    }
}

// Get all exercises
const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find({})
        res.json(exercises)
    } catch (error) {
        res.status(400).json({ error: "Failed to get exercises" })
    }
}

module.exports = { addExercise, getExercises }