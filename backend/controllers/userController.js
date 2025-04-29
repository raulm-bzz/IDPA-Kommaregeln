const User = require('../schemas/user')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register new user
const registerUser = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        console.log(password)
        const hashed = await bcrypt.hash(password, 10)
        console.log(hashed)

        const newUser = new User({
            username: username,
            password: hashed
        })
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" })
    } catch (error) {
        if (error.code === 11000){
            res.status(400).json({ error: "Failed to register user, username already exists" })
        }
        else{
            res.status(422).json({ error: "Failed to register user" })
        }
    }
}

const loginUser = async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    try {
        const user = await User.findOne({username});
        console.log(user)
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Ungültige Anmeldedaten" });
        }

        const token = jwt.sign({ userId: user._id }, "SECRET_KEY");
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: "Serverfehler" });
    }
}


// Get user by username
const findUser = async (req, res) => {
    try {
        const username = req.params.username                                    // use the param "/:username"
        const user = await User.findOne({username})                      // use the findOne function by mongoose
        if (!user) {
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

module.exports = { registerUser, loginUser, findUser, getAllUsers, addUserEx }