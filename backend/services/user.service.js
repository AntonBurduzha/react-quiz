let Quizes = require('../models/quiz.schema');

const userService = {};

userService.getCurrentQuiz = getCurrentQuiz;
userService.getCurrentCategoryQuizes = getCurrentCategoryQuizes;

function getCurrentQuiz(req) {
  let category = req.params.id;
  return new Promise((resolve, reject) => {
    Quizes.find({category: category}).then(quizData => {
      resolve(quizData);
    });
  });
}

function getCurrentCategoryQuizes(req) {
  let quizName = req.params.id;
  return new Promise((resolve, reject) => {
    Quizes.findOne({name: quizName}).then(quizData => {
      resolve(quizData);
    });
  });
}

module.exports = userService;