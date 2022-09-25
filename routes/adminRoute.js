const express = require("express");
const User = require("../models/User");
const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authAdmin = require("../middleware/authAdmin");

const router = express.Router();

// @route  get/admin
// @desc  Show admin
// @access admin

router.get("/", authAdmin, (req, res) => {
  res.json("Hiiii i m admin");
});

module.exports = router;
