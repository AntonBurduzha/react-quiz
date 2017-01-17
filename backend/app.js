const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

/*init auth dependencies*/
const jwt = require('jsonwebtoken');
const passport = require("passport");
var cfg = require("./config.js");
const strategy = require('./auth');
passport.use(strategy);

/*init mongo adapter*/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/react-quiz');

const loginControl = require('./controllers/login.controller');
const userControl = require('./controllers/user.controller');


const app = express();
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use('/', userControl);
app.use('/', loginControl);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

module.exports = app;