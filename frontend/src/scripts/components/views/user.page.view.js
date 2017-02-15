import React, { Component } from 'react'
import {Col, Image} from 'react-bootstrap'

export default class UserPageView extends Component {
  render() {
    return (
      <Col mdOffset={2} md={8} className="article-main-content">
        <h2 className="text-category text-center">Categories</h2>
        <div className="article-categories">
          <CategoryItem
            goToCurrentCategory={this.props.goToCurrentCategory}
            theme="История"
            src="http://imgdepo.com/id/i10170419"/>
          <CategoryItem
            goToCurrentCategory={this.props.goToCurrentCategory}
            theme="Математика"
            src="http://imgdepo.com/id/i10170418"/>
        </div>
        <h2 className="text-category text-center">Results</h2>
        <CompletedQuizesList completedQuizes={this.props.completedQuizes}/>
      </Col>
    )
  }
}

const CompletedQuizesListItem = (props) => {
  return <li>{props.quizName} - {props.result}%</li>
};

const CompletedQuizesList = (props) => {
  let completedQuizes = props.completedQuizes.map((item, i) => {
    return <CompletedQuizesListItem key={i} quizName={item.quizName} result={item.result}/>
  });
  return <ol>{completedQuizes}</ol>
};

const CategoryItem = (props) => {
  return (
    <div className="article-category-current" onClick={props.goToCurrentCategory}>
      <h3 className="text-category-current text-center">{props.theme}</h3>
      <Image className="img-category" src={props.src} responsive />
    </div>
  );
};