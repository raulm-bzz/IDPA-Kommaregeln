const Exercise = require('../schemas/exercise');

// Add new exercise
const addExercise = async (req, res) => {
    try {
        const {_id, text } = req.body;
        const newExercise = new Exercise({_id, text});
        await newExercise.save();
        res.status(201).json({ message: "Exercise added successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to add exercise" });
    }
};

// Get all exercises
const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (error) {
        res.status(400).json({ error: "Failed to fetch exercises" });
    }
};

module.exports = { addExercise, getExercises };