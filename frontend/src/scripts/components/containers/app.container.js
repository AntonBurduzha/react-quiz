import React, { Component } from 'react'
import AppView from '../views/app.view'

export default class App extends Component {
  constructor(){
    super();
    this.handleResponse = this.handleResponse.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.state = {
      login: '',
      mail: '',
      password: '',
      token: ''
    };
  }
  handleEmailInput(e){
    this.setState({mail: e.target.value});
  }
  handleLoginInput(e){
    this.setState({login: e.target.value});
  }
  handlePasswordInput(e){
    this.setState({password: e.target.value});
  }

  handleResponse(){
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `mail=${this.state.mail}&login=${this.state.login}&password=${this.state.password}`
    }).then(response => response.json()).then(result => {
      this.setState({token: result.token});
      console.log(result);
      fetch('/secret', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `JWT ${this.state.token}`
        }
      }).then(response => response.json()).then(result => console.log(result));
    });
  }

  render(){
    return (
      <div>
        <AppView
          handleLoginInput={this.handleLoginInput}
          handleEmailInput={this.handleEmailInput}
          handlePasswordInput={this.handlePasswordInput}
          handleResponse={this.handleResponse}
          token={this.state.token}/>
      </div>
    )
  }
}