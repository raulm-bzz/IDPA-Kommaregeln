const mongoose = require('mongoose');
const {mongo} = require("mongoose");


//MongoDB connection
const connectDB = async () => {
    try {
        // URL leading to the MongoDB Database
        mongodb_url = 'mongodb://localhost:27017/kommaregeln';

        await mongoose.connect(mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;