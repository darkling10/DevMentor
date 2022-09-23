const express = require("express");
const router = express.Router();
const User = require("../models/User")

router.get("/", (req, res) => {
    // try {

    // } catch (error) {

    // }
    res.send("Hello")
})

module.exports = router;