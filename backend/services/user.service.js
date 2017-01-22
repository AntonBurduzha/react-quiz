let Quizes = require('../models/quiz.schema');
let UserData = require('../models/login.schema');

const userService = {};

userService.getCurrentQuiz = getCurrentQuiz;
userService.getCurrentCategoryQuizes = getCurrentCategoryQuizes;
userService.postQuizResult = postQuizResult;
userService.getUserData = getUserData;

function getUserData(req) {
  let userName = req.params.id;
  return new Promise((resolve, reject) => {
    UserData.findOne({login: userName}).then(quizData => {
      resolve(quizData);
    });
  });
}

function postQuizResult(req) {
  let newQuizResult = {};
  newQuizResult.result = req.body.result;
  newQuizResult.quizName = req.body.quizName;
  let user = req.body.user;
  return new Promise((resolve, reject) => {
    UserData.findOne({login: user}, (err, doc) => {
      if(err){
        console.log('error');
      }
      doc.quizResults.push(newQuizResult);
      doc.save();
      resolve(newQuizResult);
    });
  });
}

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