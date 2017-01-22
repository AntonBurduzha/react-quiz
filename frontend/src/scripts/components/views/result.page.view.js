import React, { Component } from 'react'
import {Link} from 'react-router'
import {Col} from 'react-bootstrap'

export default class ResultPageView extends Component {
  render() {
    return (
      <Col mdOffset={2} md={8} className="article-home">
        <h1>Результат</h1>
        <h3>{this.props.quizName}</h3>
        <h3>{this.props.result}%</h3>
        <Link to="/userpage">Вернуться на страницу тестов</Link>
      </Col>
    )
  }
}