var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var User = require("./models/user");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), {extensions: 'html'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

/*
app.post("/create", function(req, res) {

    // Create a student from the submitted form data
    var stu = new Person({
       name: req.body.name,
       gpa: req.body.gpa,
       birthDate: new Date(req.body.birthdate)
    });
 
    stu.save(function(err, stu) {
       if (err) {
          res.status(400).send(err);
       } 
       else {
          res.send("Person was saved.");
       }
    });
 });
*/

module.exports = app;
