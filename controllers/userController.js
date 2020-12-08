const User = require("../models/user");

/**
 * this method is to create a new user
 */
exports.create = (req, res) => {

    console.log("Create method called");

    /**
     * validation request
     */
    if (!req.body.username || !req.body.password){
        return res.status(400).send({
            message: "Required field can not be empty"
        });
    }

    /**
     * create a new user
     */
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        favoriteLocation: req.body.favoriteLocation,
    });

    console.log("New User: " + user);

    /**
     * save new user to database
     */
    user
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while trying to create the new user."
            });
        });
};

/**
 * find all users in database
 */
exports.findAll = (req, res) => {
    User.find()
        .then((users) => {
            console.log("findAll called");
            res.status(200).send(users);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occurred"
            });
        });
};

exports.remove = (req, res) => {
    User.deleteOne({username: req.body.delUsername})
        .then((data) =>{
            console.log("Deleted User" + data);
        })
};
