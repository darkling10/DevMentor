const mongoose = require("mongoose");



const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.CONNECTIONCLOUD}`);
        console.log("MongoDB connected...🤩");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;