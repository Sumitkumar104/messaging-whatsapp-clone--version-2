const mongoose = require("mongoose");

// Function to establish a connection to the MongoDB database
exports.databaseconnection = async () => {
    const URL = `mongodb://localhost:27017/whatsapp_clone`; // MongoDB connection URL

    try {
        // Attempt to connect to the MongoDB database using Mongoose
        await mongoose.connect(URL);
        console.log('Database Connected Successfully');
    } catch (error) {
        // Handle connection errors and log the error message
        console.log('Error: ', error.message);
    }
};
