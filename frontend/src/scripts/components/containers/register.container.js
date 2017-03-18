import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setHomePageHeigth, clearInputs, showEmptyInputs } from '../../api/common.api'
import { getCurrentUser, createNewUser } from '../../api/login.api'
import { checkUniqueUser } from '../../actions/login.actions'
import { RegisterView } from '../views/register.view'

class RegisterContainer extends Component {
  constructor(){
    super();
    this.handleAccountRegistration = this.handleAccountRegistration.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.changeWrongFields = this.changeWrongFields.bind(this);
    this.clearWrongInputs = this.clearWrongInputs.bind(this);
    this.state = {
      login: '',
      mail: '',
      password: '',
      showUniqUser: ''
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

  changeWrongFields(e){
    e.target.style.borderColor = '#66afe9';
  }

  clearWrongInputs(){
    clearInputs();
    this.setState({mail: '', login: '', password: ''});
  }

  componentDidMount(){
    setHomePageHeigth();
  }

  handleAccountRegistration(){
    if(this.state.login && this.state.mail && this.state.password){
      getCurrentUser(this.state.mail).then(result => {
          this.props.checkUniqueUser(result);
          if(this.props.userChecking.unique) {
            this.setState({showUniqUser: true});
            createNewUser(this.state.login, this.state.mail, this.state.password);
            setTimeout(() => {
              this.props.history.push('/auth');
            }, 400);
          }
          else {
            this.setState({showUniqUser: false});
            this.clearWrongInputs();
          }
        });
    } else {
      showEmptyInputs();
      this.clearWrongInputs();
    }
  }

  render(){
    return (
      <RegisterView
        handleLoginInput={this.handleLoginInput}
        handleEmailInput={this.handleEmailInput}
        handlePasswordInput={this.handlePasswordInput}
        handleResponse={this.handleAccountRegistration}
        changeWrongFields={this.changeWrongFields}
        showUniqUser={this.state.showUniqUser}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterContainer));
