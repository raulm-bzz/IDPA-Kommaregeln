// Server is run locally with "express"
const express = require('express');
const connectDB = require('./config/database');

// routes
const userRoutes = require('./routes/userRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

const app = express();

connectDB();

app.use(express.json());

// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/exercises', exerciseRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
