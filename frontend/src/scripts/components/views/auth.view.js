import React, { Component } from 'react'
import {Button, Grid, Row, Col, Image, FormControl} from 'react-bootstrap'

export default class AuthView extends Component {
  render(){
    let loginIsVirified;
    let passIsVerified;
    if(this.props.loginIsVirified === false){
      loginIsVirified = <p className="text-register text-center">Пользователь с таким логином не существует</p>
    }
    if(this.props.passIsVirified === false){
      passIsVerified = <p className="text-register text-center">Не верный пароль</p>
    }
    return (
      <Grid>
        <Row className="article-home-cols">
          <Col mdOffset={3} md={6} className="article-home">
            <Image className="img-register" src='http://imgdepo.com/id/i10075670' responsive />
            <h2 className="text-center">Авторизация</h2>
            <FormControl
              className="input-register"
              onChange={this.props.handleLoginInput}
              onFocus={this.props.changeWrongFields}
              type="text"
              placeholder="Логин"/>
            {loginIsVirified}
            <FormControl
              className="input-register"
              onChange={this.props.handlePasswordInput}
              onFocus={this.props.changeWrongFields}
              type="text"
              placeholder="Пароль"/>
            {passIsVerified}
            <Button
              className="btn-register"
              onClick={this.props.handleResponse}>Войти</Button>
            <p>{this.props.token}</p>
            <p>{this.props.checkedToken}</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}