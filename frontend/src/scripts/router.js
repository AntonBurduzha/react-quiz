import React, { Component } from 'react'
import {Link} from 'react-router'

export default class App extends Component {
  constructor(){
    super();
    this.handleResponse = this.handleResponse.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleUserReq = this.handleUserReq.bind(this);
    this.state = {
      login: 'sarah@mail.com',
      password: 'sarah123',
      token: ''
    };
  }
  handleLoginInput(e){
    this.setState({login: e.target.value});
  }
  handlePasswordInput(e){
    this.setState({password: e.target.value});
  }
  handleUserReq(){
    fetch('/secret', {
      method: 'GET',
      headers: {
        'Authorization': `JWT${this.state.token}`
      }
    }).then(response => response.json());
  }

  handleResponse(){
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${this.state.login}&password=${this.state.password}`
    }).then(response => response.json()).then(result => this.setState({token: result.message}));
  }
  render(){
    return (
      <div>
        <h2 className="route1">Creating new user</h2>
        <input onChange={this.handleLoginInput} type="text" placeholder="login"/>
        <input onChange={this.handlePasswordInput} type="text" placeholder="password"/>
        <button onClick={this.handleResponse}>to /token</button>
        <button onClick={this.handleUserReq}>to /user</button>
        <p>{this.state.token}</p>
      </div>
    )
  }
}