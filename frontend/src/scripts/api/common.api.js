const setHomePageHeigth = () => {
  let homePageArticle = document.querySelector('.article-home');
  homePageArticle.style.height = document.documentElement.clientHeight - 40 + 'px';
};

const setUserPageHeigth = () => {
  let homePageArticle = document.querySelector('.article-home-cols');
  let userPageHeaderHeight = document.querySelector('.header-user-page').offsetHeight;
  homePageArticle.style.height = document.documentElement.clientHeight - userPageHeaderHeight + 'px';
};

const clearInputs = () => {
  let inputs = document.querySelectorAll('.input-register');
  inputs.forEach(item => item.value = '');
};

const showEmptyInputs = () => {
  let inputs = document.querySelectorAll('.input-register');
  inputs.forEach(item => {
    if(item.value === '') {
      item.style.borderColor = 'red'
    }
  });
};

export {
  setHomePageHeigth,
  clearInputs,
  showEmptyInputs,
  setUserPageHeigth
}