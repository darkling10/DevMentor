const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    preference: {
        type: [String],
        required: true
    },
    // post: {

    // }

});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);