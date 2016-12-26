const express = require('express');
const passport = require("passport");
const router = express.Router();
const loginService = require('../services/login.service.js');

router.post('/login', loginUser);
router.get('/secret', passport.authenticate('jwt', { session: false }), checkSecret);
router.get('/register/:id', checkUniqueUser);
router.post('/register', createNewUser);

function createNewUser(req, res) {
  let result = loginService.createNewUser(req);
  if (result || result === 0) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
}

function checkUniqueUser(req, res) {
  loginService.checkUniqueUser(req).then(result => {
    if (result || result === 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
}

/*fetch('/secret', {
 method: 'GET',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded',
 'Authorization': `JWT ${this.props.tokenChecking.token}`
 }
 }).then(response => response.json())
 .then(result => this.props.checkToken(result));*/

function checkSecret(req, res) {
  let msg = {message: "Success! You can not see this without a token"};
  res.json(msg);
}

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