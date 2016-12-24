var cfg = require("./config.js");
var passportJWT = require("passport-jwt");
let UserData = require('./models/login.schema');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = cfg.secretOrKey;

let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  UserData.findOne({mail: jwt_payload.mail}).then(userData => {
    if (userData) {
      next(null, userData);
    } else {
      next(null, false);
    }
  });
});

module.exports = strategy;