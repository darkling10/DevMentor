const express = require("express");
const router = express.Router();
const Profile = require("../models/UserProfile")

router.get("/", (req, res) => {
    res.send("User profile route")
})



module.exports = router;