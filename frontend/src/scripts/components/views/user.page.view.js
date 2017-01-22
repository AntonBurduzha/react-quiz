import React, { Component } from 'react'
import {Col, Image} from 'react-bootstrap'

export default class UserPageView extends Component {
  render() {
    let completedQuizes = this.props.completedQuizes.map((item, i) => {
      return <li key={i}>{item.quizName} - {item.result}%</li>
    });
    return (
      <Col mdOffset={2} md={8} className="article-home">
        <div>
          <h2 className="text-category text-center">Categories</h2>
          <div className="article-categories">
            <div
              className="article-category-current"
              onClick={this.props.goToCurrentCategory}>
              <h3 className="text-category-current text-center">История</h3>
              <Image className="img-category" src='http://imgdepo.com/id/i10170419' responsive />
            </div>
            <div className="article-category-current"
                 onClick={this.props.goToCurrentCategory}>
              <h3 className="text-category-current text-center">Математика</h3>
              <Image className="img-category" src='http://imgdepo.com/id/i10170418' responsive />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-category text-center">Results</h2>
          <ol>{completedQuizes}</ol>
        </div>
      </Col>
    )
  }
}