const jwt = require('jsonwebtoken');
var cfg = require("../config.js");
let UserData = require('../models/login.schema');

const loginService = {};
loginService.loginUser = loginUser;
loginService.checkUniqueUser = checkUniqueUser;
loginService.createNewUser = createNewUser;

function createNewUser(req) {
  let userData = {
    mail: req.body.mail,
    login: req.body.login,
    password: req.body.password
  };
  let user = new UserData(userData);
  user.save();
  return userData;
}

function checkUniqueUser(req) {
  let mail = req.params.id;
  return new Promise((resolve, reject) => {
    UserData.findOne({mail: mail}).then(userData => {
      if(!userData){
        resolve({unique: true});
      } else {
        resolve({unique: false});
      }
    });
  });
}

function loginUser(req) {
  let login = '';
  if(req.body.login && req.body.password){
    login = req.body.login;
  }
  return new Promise((resolve, reject) => {
    UserData.findOne({login: login}).then(userData => {
      if(!userData){
        resolve({message:"no such user found"});
      }
      if(userData.password === req.body.password) {
        let payload = {mail: userData.mail};
        let token = jwt.sign(payload, cfg.secretOrKey);
        resolve({message: 'ok', token: token});
      } else {
        resolve({message: 'passwords did not match'});
      }
    });
  });
}

module.exports = loginService;