import React, { Component } from 'react'

export default class AppView extends Component {
  render(){
    return (
      <div>
        <h2 className="route1">Creating new user</h2>
        <input onChange={this.props.handleLoginInput} type="text" placeholder="login"/>
        <input onChange={this.props.handleEmailInput} type="text" placeholder="email"/>
        <input onChange={this.props.handlePasswordInput} type="text" placeholder="password"/>
        <button onClick={this.props.handleResponse}>Get token</button>
        <button onClick={this.props.handleSecretResponse}>Get secret</button>
        <p>{this.props.token}</p>
      </div>
    )
  }
}