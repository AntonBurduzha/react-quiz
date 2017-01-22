const express = require('express');
const router = express.Router();
const userService = require('../services/user.service.js');

router.get('/category/:id', getCurrentQuiz);
router.get('/quiz/:id', getCurrentCategoryQuizes);
router.post('/result', postQuizResult);
router.get('/user/:id', getUserData);

function getUserData(req, res) {
  userService.getUserData(req).then(result => {
    if (result || result === 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
}

function postQuizResult(req, res) {
  userService.postQuizResult(req).then(result => {
    if (result || result === 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
}

function getCurrentQuiz(req, res) {
  userService.getCurrentQuiz(req).then(result => {
    if (result || result === 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
}

function getCurrentCategoryQuizes(req, res) {
  userService.getCurrentCategoryQuizes(req).then(result => {
    if (result || result === 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
}


module.exports = router;