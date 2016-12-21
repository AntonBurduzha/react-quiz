const express = require('express');
const passport = require("passport");
const router = express.Router();
const loginService = require('../services/login.service.js');

router.post('/login', loginUser);
router.get('/secret', passport.authenticate('jwt', { session: false }), checkSecret);

function checkSecret(req, res) {
  let msg = {message: "Success! You can not see this without a token"};
  res.json(msg);
}

/*app.post('/login', (req, res) => {
 let payload = {hashedPass: req.body.password};
 let token = jwt.sign(payload, cfg.secretOrKey);
 let userData = {
 mail: req.body.mail,
 login: req.body.login,
 password: req.body.password
 };
 let user = new UserData(userData);
 user.save();
 });*/

function loginUser(req, res) {
  loginService.loginUser(req).then(result => {
    if (result || result === 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
}

module.exports = router;