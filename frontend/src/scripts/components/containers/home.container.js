import React, { Component } from 'react'
import {Link, browserHistory} from 'react-router'
import {Button, Grid, Row, Col, Image} from 'react-bootstrap'
import {setHomePageHeigth} from '../../api/common.api'

export default class HomeContainer extends Component {
  constructor(){
    super();
    this.checkAccessToken = this.checkAccessToken.bind(this);
  }

  componentDidMount(){
    setHomePageHeigth();
  }

  checkAccessToken(){
    const userAccessToken = localStorage.getItem('token');
    userAccessToken !== null ? browserHistory.push('/userpage') : browserHistory.push('/auth');
  }

  render(){
    return (
      <Grid>
        <Row className="article-home-cols">
          <Col mdOffset={3} md={6} className="article-home">
            <Image className="img-logo" src='http://imgdepo.com/id/i10075670' responsive />
            <div>
              <Button
                onClick={this.checkAccessToken}
                className="btn-login btn-login-top">Войти</Button>
              <Button className="btn-login">
                <Link className="link-home" to="/register">Регистрация</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
