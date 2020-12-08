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
        begGameStatus: {
            desc: "Whether or not this use has completed the beginner game",
            type: Boolean,
            required: false
        },
        intGameStatus: {
            desc: "Whether or not this use has completed the beginner game",
            type: Boolean,
            required: false
        },
        expGameStatus: {
            desc: "Whether or not this use has completed the beginner game",
            type: Boolean,
            required: false
        }
    }
);

module.exports = mongoose.model("user", schema);
