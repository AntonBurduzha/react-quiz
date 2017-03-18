import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCurrentQuiz, postQuizResult } from '../../api/user.api'
import { setContentMinHeigth } from '../../api/common.api'
import { setCurrentQuizData } from '../../actions/quiz.actions'
import { QuizView } from '../views/quiz.view'
import { withRouter } from 'react-router-dom'

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
    let verifiedAnswers = [];
    let trueAnswersQuantity = 0;
    let trueAnswersPercent = 0;
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
      setTimeout(() => {
        this.props.history.push('/userpage/result');
      }, 300);
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(QuizContainer));