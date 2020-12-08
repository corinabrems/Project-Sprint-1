// db.js
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/mydb");
mongoose.connect("mongodb+srv://mwagnerPSU:mwagnerPSU1@cluster0.ldz9s.mongodb.net/group6db?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));
module.exports = mongoose;