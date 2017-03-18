import React, { PureComponent } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Button, Image} from 'react-bootstrap'
import {setHomePageHeigth} from '../../api/common.api'
import {AuthLayer} from '../layers/auth.layer'

class HomeContainer extends PureComponent {
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
        this.props.history.push('/userpage');
      }, 300);
    }
    else{
      setTimeout(() => {
        this.props.history.push('/auth');
      }, 300);
    }
  }

  goToRegisterPage() {
    setTimeout(() => {
      this.props.history.push('/register');
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
          <Link to="/register" className="link-home" onClick={this.goToRegisterPage}>Регистрация</Link>
        </Button>
      </AuthLayer>
    );
  }
}

export default withRouter(HomeContainer);
