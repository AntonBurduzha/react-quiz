import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkUniqueUser } from '../../actions/login.actions'
import RegisterView from '../views/register.view'

class RegisterContainer extends Component {
  constructor(){
    super();
    this.handleAccountRegistration = this.handleAccountRegistration.bind(this);
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

  handleAccountRegistration(){
    if(this.state.login && this.state.mail && this.state.password){
      fetch(`/register/${this.state.mail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => response.json())
        .then(result => {
          this.props.checkUniqueUser(result);
          if(this.props.userChecking.unique) {
            fetch('/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `mail=${this.state.mail}&login=${this.state.login}&password=${this.state.password}`
            });
          }
        });
    }
  }

  render(){
    return (
      <div>
        <RegisterView
          handleLoginInput={this.handleLoginInput}
          handleEmailInput={this.handleEmailInput}
          handlePasswordInput={this.handlePasswordInput}
          handleResponse={this.handleAccountRegistration}/>
      </div>
    )
  }
}

RegisterContainer.propTypes = {
  userChecking: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    userChecking: state.loginState
  };
};

const mapDispatchToProps = (dispatch) => ({
  checkUniqueUser: (unique) => checkUniqueUser(dispatch, unique)
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
