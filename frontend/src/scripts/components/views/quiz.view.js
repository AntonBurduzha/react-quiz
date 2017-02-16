import React, { Component } from 'react'
import {Col, Button} from 'react-bootstrap'

const QuizView = (props) => {
  return (
    <Col mdOffset={2} md={8} className="article-main-content">
      <p>{props.quizData.name}</p>
      <QuizDataList quizData={props.quizData}/>
      <Button onClick={props.checkResult} className="btn-check-result">Проверить</Button>
    </Col>
  );
};

const QuizDataList = (props) => {
  let quizData = props.quizData.questions.map((question, questionNumber) => {
    return <QuizDataListItem key={questionNumber}
                             question={question.question}
                             questionNumber={questionNumber}
                             quizData={props.quizData}/>
  });
  return <ol>{quizData}</ol>
};

const QuizDataListItem = (props) => {
  return (
    <li>
      <p>{props.question}</p>
      <QuizAnswersList questionNumber={props.questionNumber} quizData={props.quizData}/>
    </li>
  );
};

const QuizAnswersList = (props) => {
  let quizAnswers = props.quizData.questions[props.questionNumber].answers.map((answer, answerNumber) => {
    return <QuizAnswersListItem key={answerNumber}
                                answer={answer}
                                questionNumber={props.questionNumber}/>
  });
  return <div>{quizAnswers}</div>
};

const QuizAnswersListItem = (props) => {
  return (
    <div>
      <label>
        <input className="input-check" type="radio" name={props.questionNumber} value={props.answer}/>
        {props.answer}
      </label>
    </div>
  );
};

export {
  QuizView
}