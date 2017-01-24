import React, { Component } from 'react'
import {Link} from 'react-router'
import {Col} from 'react-bootstrap'

export default class CurrentCategoryView extends Component {
  render() {
    let quizList;
    quizList = this.props.quizList.map((item, i) => {
      return <li key={i}><Link onClick={this.props.getQuizName}>{item}</Link></li>
    });
    return (
      <Col mdOffset={2} md={8} className="article-main-content">
        <ol>{quizList}</ol>
      </Col>
    )
  }
}