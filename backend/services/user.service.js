let Quizes = require('../models/quiz.schema');

const userService = {};

userService.getCurrentQuiz = getCurrentQuiz;

function getCurrentQuiz(req) {
  let category = req.params.id;
  return new Promise((resolve, reject) => {
    Quizes.find({category: category}).then(quizData => {
      resolve(quizData);
    });
  });
}

module.exports = userService;