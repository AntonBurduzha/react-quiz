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

export {
  getCurrentCategoryQuizes,
  getCurrentQuiz
}