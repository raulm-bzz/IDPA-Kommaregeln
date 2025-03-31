const User = require('../schemas/user')

// Register new user
const registerUser = async (req, res) => {
    try {
        const username = req.body.username, password = req.body.password
        const newUser = new User({ username, password })
        await newUser.save()
        res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        res.status(400).json({ error: "Failed to register user" })
    }
}

// Get user by username
const findUser = async (req, res) => {
    try {
        const username = req.params.username                                    // use the param "/:username"
        const user = await User.findOne({username})                      // use the findOne function by mongoose
        if (!user) {
            console.error("User does not exist")
            return res.status(404).json({ error: "User not found" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ error: "Failed to execute findUser function" })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: "Failed to execute getAllUsers" })
    }
}

const addUserEx = async (req, res) => {
    // Body:
    // {userID: int, exerciseID: int, checks: int, solved: bool}

    try {
        const completedExercise = req.body


        res.status(201).json({ message: "Done" })
    }
    catch (error) {
        res.status(500).json({ error: "Failed execute addUserEx" })
    }
}

module.exports = { registerUser, findUser, getAllUsers, addUserEx }