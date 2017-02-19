import React, { PureComponent, PropTypes } from 'react'
import {Link} from 'react-router'
import {setUserPageHeigth, setContentMinHeigth} from '../../api/common.api'
import { connect } from 'react-redux'
import {setUserName} from '../../actions/user.actions'
import {Grid, Row} from 'react-bootstrap'
import {browserHistory} from 'react-router'

class UserPageLayer extends PureComponent {
  constructor() {
    super();
    this.goToHomePage = this.goToHomePage.bind(this);
    this.goToAuthPage = this.goToAuthPage.bind(this);
  }

  componentDidMount(){
    this.props.setUserName(localStorage.getItem('nickname'));
    setUserPageHeigth();
    setContentMinHeigth();
  }

  goToHomePage(){
    setTimeout(() => {
      browserHistory.push('/');
    }, 300);
  }

  goToAuthPage(){
    setTimeout(() => {
      browserHistory.push('/auth');
    }, 300);
  }

  render(){
    return (
      <Grid>
        <Row className="header-user-page">
          <Link onClick={this.goToHomePage} className="text-header-logo">Quiz test App</Link>
          <Link onClick={this.goToAuthPage} className="text-header-logout">Logout</Link>
          <p className="text-header-name">Hi, {this.props.userData.login}</p>
        </Row>
        <Row className="article-home-cols">
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}

UserPageLayer.propTypes = {
  userData: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    userData: state.userState
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserName: (login) => setUserName(dispatch, login)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPageLayer);