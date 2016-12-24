import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setToken, checkToken } from '../../actions/login.actions'
import AuthView from '../views/auth.view'

class AuthContainer extends Component {
  constructor(){
    super();
    this.handleResponse = this.handleResponse.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.state = {
      login: '',
      password: ''
    };
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
      body: `login=${this.state.login}&password=${this.state.password}`
    }).then(response => response.json()).then(result => {
      this.props.setToken(result);
      if(result.message === 'ok'){
        fetch('/secret', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `JWT ${this.props.tokenChecking.token}`
          }
        }).then(response => response.json())
          .then(result => this.props.checkToken(result));
      }
    });
  }

  render(){
    return (
      <div>
        <AuthView
          handleLoginInput={this.handleLoginInput}
          handlePasswordInput={this.handlePasswordInput}
          handleResponse={this.handleResponse}
          token={this.props.tokenChecking.token}
          checkedToken={this.props.tokenChecking.message}/>
      </div>
    )
  }
}

AuthContainer.propTypes = {
  tokenChecking: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    tokenChecking: state.loginState
  };
};

const mapDispatchToProps = (dispatch) => ({
  setToken: (tokenChecking) => setToken(dispatch, tokenChecking),
  checkToken: (tokenChecking) => checkToken(dispatch, tokenChecking)
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
