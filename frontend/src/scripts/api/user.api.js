const getCurrentQuiz = (category) => {
  return fetch(`/quiz/${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response.json())
};

export {
  getCurrentQuiz
}