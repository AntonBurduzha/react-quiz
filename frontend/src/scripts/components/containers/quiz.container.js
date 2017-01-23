import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {getCurrentQuiz, postQuizResult} from '../../api/user.api'
import {setContentMinHeigth} from '../../api/common.api'
import {setCurrentQuizData} from '../../actions/quiz.actions'
import QuizView from '../views/quiz.view'
import {browserHistory} from 'react-router'

class QuizContainer extends Component {
  constructor() {
    super();
    this.checkResult = this.checkResult.bind(this);
  }

  componentDidMount(){
    setContentMinHeigth();
    getCurrentQuiz(localStorage.getItem('quizName')).then(result => {
      this.props.setCurrentQuizData(result);
    });
  }

  checkResult(){
    let clickedAnswers = document.querySelectorAll('.input-check');
    let verifiedAnswers = [],
      trueAnswersQuantity = 0,
      trueAnswersPercent = 0;
    clickedAnswers.forEach(answer => {
      if(answer.checked){
        verifiedAnswers.push(answer.parentNode.textContent);
      }
    });
    for(let i = 0; i < this.props.quizData.currentQuizData.questions.length; i++){
      if(this.props.quizData.currentQuizData.questions[i].trueAnswer === verifiedAnswers[i]){
        trueAnswersQuantity++;
      }
    }
    trueAnswersPercent = (trueAnswersQuantity * 100 / this.props.quizData.currentQuizData.questions.length).toFixed(2);
    postQuizResult(localStorage.getItem('nickname'), localStorage.getItem('quizName'), trueAnswersPercent).then(result => {
      browserHistory.push('/userpage/result');
    });
  }

  render(){
    return (
      <QuizView
        quizData={this.props.quizData.currentQuizData}
        checkResult={this.checkResult}/>
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