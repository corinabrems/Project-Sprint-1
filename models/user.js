// models/user.js
const mongoose = require("../db");
const schema = new mongoose.Schema(
    {
        username: {
            desc: "The user's name",
            trim: true,
            type: String,
            index: true,
            unique: true,
            required: true
        },
        password: {
            desc: "The user's password",
            trim: true,
            type: String,
            required: true
        },
        favoriteLocation: {
            desc: "The user's favorite location",
            trim: true,
            type: String,
            required: false
        }
    }
);

module.exports = mongoose.model("user", schema);
