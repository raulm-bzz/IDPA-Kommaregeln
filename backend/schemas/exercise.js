const mongoose = require('mongoose');

// Define the schema for exercises
const exerciseSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

// Export the model
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;