import React, { Component } from 'react'
import {Link} from 'react-router'
import {Col} from 'react-bootstrap'

export default class QuizView extends Component {
  render() {
    let quizData, quizAnswers;
    quizData = this.props.quizData.questions.map((question, i) => {
      quizAnswers = this.props.quizData.questions[i].answers.map((answer, j) => {
        return <div key={j}>
          <input type="radio" name={i} id={answer}/>
          <label htmlFor={answer}>{answer}</label>
        </div>
      });
      return <li key={i}>
        <div>
          <p>{question.question}</p>
          {quizAnswers}
        </div>
      </li>
    });
    return (
      <Col mdOffset={2} md={8} className="article-home">
        <p>{this.props.quizData.name}</p>
        <ol>{quizData}</ol>
      </Col>
    )
  }
}