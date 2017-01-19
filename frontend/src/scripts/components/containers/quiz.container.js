import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCurrentQuiz} from '../../api/user.api'
import {setCurrentQuizData} from '../../actions/quiz.actions'
import QuizView from '../views/quiz.view'

class QuizContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    getCurrentQuiz(localStorage.getItem('quizName')).then(result => {
      this.props.setCurrentQuizData(result);
      console.log(this.props.quizData.currentQuizData);
    });
  }

  render(){
    return (
      <QuizView
        quizData={this.props.quizData.currentQuizData}/>
    );
  }
}

QuizContainer.propTypes = {
  quizData: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    quizData: state.quizState
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentQuizData: (currentQuizData) => setCurrentQuizData(dispatch, currentQuizData)
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);