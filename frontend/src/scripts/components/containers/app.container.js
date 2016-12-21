import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setToken, checkToken } from '../../actions/login.actions'
import AppView from '../views/app.view'

class AppContainer extends Component {
  constructor(){
    super();
    this.handleResponse = this.handleResponse.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.state = {
      login: '',
      mail: '',
      password: ''
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
        <AppView
          handleLoginInput={this.handleLoginInput}
          handleEmailInput={this.handleEmailInput}
          handlePasswordInput={this.handlePasswordInput}
          handleResponse={this.handleResponse}
          token={this.props.tokenChecking.token}
          checkedToken={this.props.tokenChecking.message}/>
      </div>
    )
  }
}

/*AppContainer.propTypes = {
  token: PropTypes.String.isRequired,
  checkedToken: PropTypes.String.isRequired
};*/

const mapStateToProps = function(state) {
  return {
    tokenChecking: state.loginState
  };
};

const mapDispatchToProps = (dispatch) => ({
  setToken: (tokenChecking) => setToken(dispatch, tokenChecking),
  checkToken: (tokenChecking) => checkToken(dispatch, tokenChecking)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
