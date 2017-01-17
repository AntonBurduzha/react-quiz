const express = require('express');
const router = express.Router();
const userService = require('../services/user.service.js');

router.get('/quiz/:id', getCurrentQuiz);

function getCurrentQuiz(req, res) {
  userService.getCurrentQuiz(req).then(result => {
    if (result || result === 0) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });
}


module.exports = router;