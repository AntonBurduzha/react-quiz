import React, { PureComponent } from 'react'
import {Link, browserHistory} from 'react-router'
import {Button, Image} from 'react-bootstrap'
import {setHomePageHeigth} from '../../api/common.api'
import {AuthLayer} from '../layers/auth.layer'

export default class HomeContainer extends PureComponent {
  constructor(){
    super();
    this.checkAccessToken = this.checkAccessToken.bind(this);
    this.goToRegisterPage = this.goToRegisterPage.bind(this);
  }

  componentDidMount(){
    setHomePageHeigth();
  }

  checkAccessToken(){
    const userAccessToken = localStorage.getItem('token');
    if(userAccessToken !== null){
      setTimeout(() => {
        browserHistory.push('/userpage');
      }, 300);
    }
    else{
      setTimeout(() => {
        browserHistory.push('/auth');
      }, 300);
    }
  }

  goToRegisterPage() {
    setTimeout(() => {
      browserHistory.push('/register');
    }, 300);
  }

  render(){
    return (
      <AuthLayer>
        <Image className="img-logo" src='http://imgdepo.com/id/i10075670' responsive />
        <Button
          onClick={this.checkAccessToken}
          className="btn-login btn-login-top">Войти</Button>
        <Button className="btn-login">
          <Link className="link-home" onClick={this.goToRegisterPage}>Регистрация</Link>
        </Button>
      </AuthLayer>
    );
  }
}
