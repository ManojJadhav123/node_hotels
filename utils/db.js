 const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/hotels"
// mongoose.connect(URI);

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('connection successful to database');
    } catch (error) {
        console.log("databse connection failed");
        process.exit(0);
    }
};

module.exports = connectDB; 
