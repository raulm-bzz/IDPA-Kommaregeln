const User = require('../schemas/user');

// Register new user
const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to register user" });
    }
};

// Get user by username
const getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: "Failed to fetch user" });
    }
};

module.exports = { registerUser, getUser };