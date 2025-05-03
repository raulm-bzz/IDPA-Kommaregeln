const Exercise = require('../schemas/exercise')
const User = require("../schemas/user");

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

const findExerciseByID = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id)
        console.log(exercise)
        if (!exercise) return res.status(404).json({error: 'Aufgabe nicht gefunden'});
        res.json(exercise);
    } catch (err) {
        res.status(500).json({error: 'Serverfehler'});
    }
}

module.exports = { addExercise, getExercises, findExerciseByID }