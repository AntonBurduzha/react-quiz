import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.handleResponse = this.handleResponse.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSecretResponse = this.handleSecretResponse.bind(this);
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

  handleSecretResponse(){
    fetch('/secret', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `JWT ${this.state.token}`
      }
    }).then(response => response.json()).then(result => console.log(result));
  }

  render(){
    return (
      <div>
        <h2 className="route1">Creating new user</h2>
        <input onChange={this.handleLoginInput} type="text" placeholder="login"/>
        <input onChange={this.handleEmailInput} type="text" placeholder="email"/>
        <input onChange={this.handlePasswordInput} type="text" placeholder="password"/>
        <button onClick={this.handleResponse}>Get token</button>
        <button onClick={this.handleSecretResponse}>Get secret</button>
        <p>{this.state.token}</p>
      </div>
    )
  }
}