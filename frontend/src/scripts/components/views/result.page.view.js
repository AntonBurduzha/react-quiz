import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Col} from 'react-bootstrap'

const ResultPageView = (props) => {
  return (
    <Col mdOffset={2} md={8} className="article-main-content">
      <h1>Результат</h1>
      <h3>{props.quizName}</h3>
      <h3>{props.result}%</h3>
      <Link to="/userpage" onClick={props.goToUserPage}>Вернуться на страницу тестов</Link>
    </Col>
  );
};

export{
  ResultPageView
}