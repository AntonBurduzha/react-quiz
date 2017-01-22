import React, { Component, PropTypes } from 'react'
import {browserHistory} from 'react-router'
import {getUserData } from '../../api/user.api'
import UserPageView from '../views/user.page.view'

export default class UserPageContainer extends Component {
  constructor() {
    super();
    this.goToCurrentCategory = this.goToCurrentCategory.bind(this);
    this.state = {
      completedQuizes: []
    };
  }

  goToCurrentCategory(event){
    if(event.target.classList.contains('article-category-current')){
      localStorage.setItem('category', event.target.childNodes[0].textContent);
      browserHistory.push('/userpage/category');
    }
    else if(event.target.parentNode.classList.contains('article-category-current')){
      localStorage.setItem('category', event.target.parentNode.childNodes[0].textContent);
      browserHistory.push('/userpage/category');
    }
  }

  componentDidMount(){
    getUserData(localStorage.getItem('nickname')).then(result => {
      this.setState({completedQuizes: result.quizResults});
    });
  }

  render(){
    return (
      <UserPageView
        goToCurrentCategory={this.goToCurrentCategory}
        completedQuizes={this.state.completedQuizes}/>
    );
  }
}