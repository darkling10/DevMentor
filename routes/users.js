const express = require("express");
const User = require("../models/User");
const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require("config");
const router = express.Router();

// @route  POST/users
// @desc  Register user
// @access public

router.post("/", [check("name", "Name is required")
    .not()
    .isEmpty(),
check("email", "please include valid email").isEmail(),
check("password", "please enter a password with 6 or more characters").isLength({ min: 6 })
],


    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;
        try {
            // see if user exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: "User already exists" }] });
            }
            user = new User({
                name,
                email,
                password
            })
            // Encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            // Return JWT

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 300000 },
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.json({ token })
                    console.log("User registered")

                }
            )
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }
    });

module.exports = router;