const mongoose = require('mongoose');
const {mongo} = require("mongoose");


//MongoDB connection
const connectDB = async () => {
    try {
        // URL leading to the MongoDB Database
        mongodb_url = "mongodb+srv://kommaregelnidpa:idpanlr@kommaregelndb.vo178sh.mongodb.net/KommaregelnDB?retryWrites=true&w=majority&appName=KommaregelnDB"

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