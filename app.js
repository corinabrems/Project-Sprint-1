var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var User = require("./models/user");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var usersCreateRouter = require('./routes/users/create');
//var usersRemoveRouter = require('./routes/users/remove');
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
//app.use('/users/create', usersCreateRouter);
//app.use('/users/remove', usersRemoveRouter);
app.use('/api', apiRouter);

module.exports = app;
