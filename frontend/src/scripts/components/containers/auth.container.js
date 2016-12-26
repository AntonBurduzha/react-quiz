import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'
import { setToken, checkToken } from '../../actions/login.actions'
import {setHomePageHeigth, clearInputs, showEmptyInputs} from '../../api/common.api'
import {verifyUserAuth} from '../../api/login.api'
import AuthView from '../views/auth.view'

class AuthContainer extends Component {
  constructor(){
    super();
    this.handleResponse = this.handleResponse.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.clearWrongInputs = this.clearWrongInputs.bind(this);
    this.changeWrongFields = this.changeWrongFields.bind(this);
    this.state = {
      login: '',
      password: '',
      loginIsVerified: '',
      passIsVerified: ''
    };
  }

  changeWrongFields(e){
    e.target.style.borderColor = '#66afe9';
    this.setState({loginIsVerified: '', passIsVerified: ''});
  }

  clearWrongInputs(){
    clearInputs();
    this.setState({login: '', password: ''});
  }

  handleLoginInput(e){
    this.setState({login: e.target.value});
  }

  handlePasswordInput(e){
    this.setState({password: e.target.value});
  }

  componentDidMount(){
    setHomePageHeigth();
  }

  handleResponse(){
    if(this.state.login && this.state.password){
      verifyUserAuth(this.state.login, this.state.password).then(result => {
        this.props.setToken(result);
        switch(this.props.tokenChecking.message){
          case 'ok':
            this.setState({loginIsVerified: true, passIsVerified: true});
            localStorage.setItem('token', this.props.tokenChecking.token);
            setTimeout(() => {
              browserHistory.push('/userpage');
            }, 400);
            break;
          case 'no such user found':
            this.setState({loginIsVerified: false});
            this.clearWrongInputs();
            break;
          case 'passwords did not match':
            this.setState({passIsVerified: false});
            this.clearWrongInputs();
            break;
        }
      });
    }
    else {
      showEmptyInputs();
      this.clearWrongInputs();
    }
  }

  render(){
    return (
      <div>
        <AuthView
          handleLoginInput={this.handleLoginInput}
          handlePasswordInput={this.handlePasswordInput}
          handleResponse={this.handleResponse}
          changeWrongFields={this.changeWrongFields}
          loginIsVirified={this.state.loginIsVerified}
          passIsVirified={this.state.passIsVerified}/>
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
