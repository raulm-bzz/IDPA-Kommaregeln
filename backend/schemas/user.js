const mongoose = require('mongoose');

// Define the schema for users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    completedExercises: {
        type: [String],  // Array of exercise IDs
        default: []
    }
});

// Create and export the schema
const User = mongoose.model('User', userSchema);
module.exports = User;