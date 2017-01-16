import React, { Component, PropTypes } from 'react'
import {browserHistory} from 'react-router'
import {setUserPageHeigth} from '../../api/common.api'
import UserPageView from '../views/user.page.view'

export default class UserPageContainer extends Component {
  constructor() {
    super();
    this.goToCurrentCategory = this.goToCurrentCategory.bind(this);
  }

  goToCurrentCategory(event){
    if(event.target.classList.contains('article-category-current')){
      localStorage.setItem('category', event.target.childNodes[0].textContent);
      browserHistory.push('/category');
    }
    else if(event.target.parentNode.classList.contains('article-category-current')){
      localStorage.setItem('category', event.target.parentNode.childNodes[0].textContent);
      browserHistory.push('/category');
    }
  }

  componentDidMount(){
    setUserPageHeigth();
  }

  render(){
    return (
      <UserPageView
        goToCurrentCategory={this.goToCurrentCategory}/>
    );
  }
}