import React, { Component } from 'react'
import {Link} from 'react-router'
import {Col, Button} from 'react-bootstrap'

export default class QuizView extends Component {
  render() {
    let quizData, quizAnswers;
    quizData = this.props.quizData.questions.map((question, i) => {
      quizAnswers = this.props.quizData.questions[i].answers.map((answer, j) => {
        return <div key={j}>
          <label>
            <input className="input-check" type="radio" name={i} value={answer}/>
            {answer}</label>
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
        <Button onClick={this.props.checkResult} className="btn-check-result">Проверить</Button>
      </Col>
    )
  }
}