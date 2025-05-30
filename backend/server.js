// Server is run locally with "express"
const express = require('express')
const connectDB = require('./config/database')
// cors middleware because frontend (63342) and backend(5000) is run on seperate ports
const cors = require('cors')
const path = require("path");

// routes
const userRoutes = require('./routes/userRoutes')
const exerciseRoutes = require('./routes/exerciseRoutes')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "../frontend")));

// Optional: Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

// Use the routes
app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes)

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
