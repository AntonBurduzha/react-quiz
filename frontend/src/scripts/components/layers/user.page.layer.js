import React, { Component, PropTypes } from 'react'
import {browserHistory, Link} from 'react-router'
import {setUserPageHeigth} from '../../api/common.api'
import { connect } from 'react-redux'
import {setUserName} from '../../actions/user.actions'
import {Grid, Row} from 'react-bootstrap'

class UserPageLayer extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.setUserName(localStorage.getItem('nickname'));
    setUserPageHeigth();
  }

  render(){
    return (
      <Grid>
        <Row className="header-user-page">
          <Link to="/" className="text-header-logo">Quiz test App</Link>
          <Link to="/auth" className="text-header-logout">Logout</Link>
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