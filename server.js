const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const app = express();

const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

connectDB();

// middlewares
app.use(express.json({ extended: false }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to DevMentor");
});

app.use("/user", require("./routes/usersRoute"));
app.use("/admin", require("./routes/adminRoute"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
