import React, { Component } from 'react'
import {Link} from 'react-router'
import {Button, Grid, Row, Col, Image, FormControl} from 'react-bootstrap'

export default class CurrentCategoryView extends Component {
  render() {
    return (
      <Col mdOffset={2} md={8} className="article-home">
        <h1>List of quizes</h1>
      </Col>
    )
  }
}