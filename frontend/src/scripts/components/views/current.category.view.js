import React, { Component } from 'react'
import {Link} from 'react-router'
import {Col} from 'react-bootstrap'

const CurrentCategoryView = (props) => {
  return (
    <Col mdOffset={2} md={8} className="article-main-content">
      <CurrentCategoryList getQuizName={props.getQuizName} quizList={props.quizList} />
    </Col>
  );
};

const CurrentCategoryListItem = (props) => {
  return <li><Link onClick={props.getQuizName}>{props.name}</Link></li>
};

const CurrentCategoryList = (props) => {
  let quizList = props.quizList.map((item, i) => {
    return <CurrentCategoryListItem key={i} getQuizName={props.getQuizName} name={item} />
  });
  return <ol>{quizList}</ol>
};

export {
  CurrentCategoryView
}