const setHomePageHeigth = () => {
  let homePageArticle = document.querySelector('.article-home');
  homePageArticle.style.height = document.documentElement.clientHeight - 40 + 'px';
};

export {
  setHomePageHeigth
}