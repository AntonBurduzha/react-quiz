import React, { Component, PropTypes } from 'react'
import {getUserData } from '../../api/user.api'
import { setContentMinHeigth } from '../../api/common.api'
import { ResultPageView } from '../views/result.page.view'
import { withRouter } from 'react-router-dom'

class ResultPageContainer extends Component {
  constructor() {
    super();
    this.goToUserPage = this.goToUserPage.bind(this);
    this.state = {
      quizName: '',
      result: ''
    };
  }

  componentDidMount(){
    setContentMinHeigth();
    getUserData(localStorage.getItem('nickname')).then(result => {
      this.setState({
        quizName: result.quizResults[result.quizResults.length - 1].quizName,
        result: result.quizResults[result.quizResults.length - 1].result
      });
    });
  }

  goToUserPage(){
    setTimeout(() => {
      this.props.history.push('/userpage');
    }, 300);
  }

  render(){
    return (
      <ResultPageView
        quizName={this.state.quizName}
        result={this.state.result}
        goToUserPage={this.goToUserPage}/>
    );
  }
}

export default withRouter(ResultPageContainer);