import React, { Component } from 'react'
import {Link} from 'react-router'
import {Col} from 'react-bootstrap'

export default class CurrentCategoryView extends Component {
  render() {
    let quizList;
    quizList = this.props.quizList.map((item, i) => {
      return <li key={i}><Link to="/userpage/quiz">{item}</Link></li>
    });
    return (
      <Col mdOffset={2} md={8} className="article-home">
        <ol>{quizList}</ol>
      </Col>
    )
  }
}