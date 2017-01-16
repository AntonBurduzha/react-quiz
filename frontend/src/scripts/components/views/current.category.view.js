import React, { Component } from 'react'
import {Link} from 'react-router'
import {Button, Grid, Row, Col, Image, FormControl} from 'react-bootstrap'

export default class CurrentCategoryView extends Component {
  render() {
    return (
      <Grid>
        <Row className="header-user-page">
          <Link to="/" className="text-header-logo">Quiz test App</Link>
          <Link to="/auth" className="text-header-logout">Logout</Link>
          <p className="text-header-name">Hi, Nickname</p>
        </Row>
        <Row className="article-home-cols">
          <Col mdOffset={2} md={8} className="article-home">
            <h1>List of quizes</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}