const express = require('express');
var _ = require("lodash");
const path = require('path');
const bodyParser = require("body-parser");

var jwt = require('jsonwebtoken');
let users = require('./users');
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'tasmanianDevil';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  var user = users[_.findIndex(users, {id: jwt_payload.id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

const mongoose = require('mongoose');
mongoose.connect('localhost:27017/react-quiz');
let Schema = mongoose.Schema;

let userDataSchema = new Schema({
  login: {type: String, required: true},
  password: String
}, {collection: 'user-data'});

let UserData = mongoose.model('UserData', userDataSchema);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(passport.initialize());

app.post("/login", function(req, res) {
  console.log(req.body);
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  // usually this would be a database call:
  var user = users[_.findIndex(users, {name: name})];
  if( ! user ){
    res.status(401).json({message:"no such user found"});
  }

  if(user.password === req.body.password) {
    // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
    var payload = {id: user.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message:"passwords did not match"});
  }
});

/*app.post('/login', (req, res) => {
  let login = req.body.login;
  UserData.find({login: login}).remove().exec();
});*/

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

module.exports = app;