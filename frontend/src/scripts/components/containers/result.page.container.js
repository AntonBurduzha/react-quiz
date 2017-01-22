import React, { Component, PropTypes } from 'react'
import {getUserData } from '../../api/user.api'
import ResultPageView from '../views/result.page.view'

export default class ResultPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      quizName: '',
      result: ''
    };
  }

  componentDidMount(){
    getUserData(localStorage.getItem('nickname')).then(result => {
      this.setState({
        quizName: result.quizResults[result.quizResults.length - 1].quizName,
        result: result.quizResults[result.quizResults.length - 1].result
      });
    });
  }

  render(){
    return (
      <ResultPageView
        quizName={this.state.quizName}
        result={this.state.result}/>
    );
  }
}