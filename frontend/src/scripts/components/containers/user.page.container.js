import React, { Component, PropTypes } from 'react'
import UserPageView from '../views/user.page.view'

export default class UserPageContainer extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <UserPageView/>
    );
  }
}