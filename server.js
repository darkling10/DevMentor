const express = require('express');
const connectDB = require("./config/db");
const app = express();



connectDB();
app.use(express.json({ extended: false }))




const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
    res.send("Welcome to DevMentor");
})


// app.use("/api/User", require("./routes/api/UserProfile"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})