 const mongoose = require("mongoose");
 require('dotenv').config();

// const URL = process.env.MONGODB_URL_LOCAL

const mongoURL  = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('connection successful to database');
    } catch (error) {
        console.log("databse connection failed" ,error);
        process.exit(0);
    }
};

module.exports = connectDB; 
