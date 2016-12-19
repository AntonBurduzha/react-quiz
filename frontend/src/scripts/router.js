import React, { Component } from 'react'
import {Link} from 'react-router'

export default class App extends Component {
  constructor(){
    super();
    this.handleResponse = this.handleResponse.bind(this);
    this.state = {
      show: ''
    };
  }
  handleResponse(){
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'id=Anton'
    }).then(response => response.json()).then(res => this.setState({show: res.Auth}))
  }
  render(){
    return (
      <div>
        <h2 className="route1">Hello 1</h2>
        <button onClick={this.handleResponse}>Click me</button>
        <h3>{this.state.show}</h3>
      </div>
    )
  }
}