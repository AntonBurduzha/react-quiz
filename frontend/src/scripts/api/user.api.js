const getCurrentCategoryQuizes = (category) => {
  return fetch(`/category/${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response.json())
};

const getCurrentQuiz = (name) => {
  return fetch(`/quiz/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response.json())
};

const postQuizResult = (user, quizName, result) => {
  return fetch(`/result`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `result=${result}&user=${user}&quizName=${quizName}`
  }).then(response => response.json())
};

const getUserData = (user) => {
  return fetch(`/user/${user}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response.json())
};

export {
  getCurrentCategoryQuizes,
  getCurrentQuiz,
  postQuizResult,
  getUserData
}