const express = require('express');
const cors = require('cors')

const connectDB = require("./config/db");
const app = express();


connectDB();

// middlewares
app.use(express.json({ extended: false }))

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to DevMentor");
})

app.use("/Profile", require("./routes/userProfile"));
app.use("/auth", require("./routes/auth"));
app.use("/User", require("./routes/users"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})