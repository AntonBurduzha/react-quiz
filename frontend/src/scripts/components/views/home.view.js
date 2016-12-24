import React, { Component } from 'react'
import {Link} from 'react-router'

export default class HomeView extends Component {
  render(){
    return (
      <div>
        <Link to="/auth">Войти</Link>
        <Link to="/register">Регистрация</Link>
      </div>
    );
  }
}