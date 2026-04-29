const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/SensorDB');
        console.log("Database connected successfully...");
    } catch (err) {
        console.error("❌ Database connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;