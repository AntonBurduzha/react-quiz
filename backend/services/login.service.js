const jwt = require('jsonwebtoken');
var cfg = require("../config.js");
let UserData = require('../models/login.schema');

const loginService = {};
loginService.loginUser = loginUser;

function loginUser(req) {
  let mail = '';
  if(req.body.mail && req.body.password){
    mail = req.body.mail;
  }
  return new Promise((resolve, reject) => {
    UserData.findOne({mail: mail}).then(userData => {
      if(!userData){
        resolve({message:"no such user found"});
      }
      if(userData.password === req.body.password) {
        let payload = {login: userData.login};
        let token = jwt.sign(payload, cfg.secretOrKey);
        resolve({message: 'ok', token: token});
      } else {
        resolve({message: 'passwords did not match'});
      }
    });
  });
}

module.exports = loginService;