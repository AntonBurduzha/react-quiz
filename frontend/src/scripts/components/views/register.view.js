import React, { Component } from 'react'
import {Button, Grid, Row, Col, Image, FormControl} from 'react-bootstrap'

export default class RegisterView extends Component {
  render(){
    let showUniqUser;
    if(this.props.showUniqUser === false){
      showUniqUser = <p className="text-register text-center">Пользователь с таким email уже существует</p>
    }
    return (
    <Grid>
      <Row className="article-home-cols">
        <Col mdOffset={3} md={6} className="article-home">
          <Image className="img-register" src='http://imgdepo.com/id/i10075670' responsive />
          <h2 className="text-center">Регистрация</h2>
          <FormControl
            className="input-register"
            onChange={this.props.handleLoginInput}
            onFocus={this.props.changeWrongFields}
            type="text"
            placeholder="Логин"/>
          <FormControl
            className="input-register"
            onChange={this.props.handleEmailInput}
            onFocus={this.props.changeWrongFields}
            type="text"
            placeholder="Еmail"/>
          {showUniqUser}
          <FormControl
            className="input-register"
            onChange={this.props.handlePasswordInput}
            onFocus={this.props.changeWrongFields}
            type="text"
            placeholder="Пароль"/>
          <Button
            className="btn-register"
            onClick={this.props.handleResponse}>Подтвердить</Button>
        </Col>
      </Row>
    </Grid>
    )
  }
}