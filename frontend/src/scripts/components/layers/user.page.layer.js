import React, { Component, PropTypes } from 'react'
import {setUserPageHeigth, setContentMinHeigth} from '../../api/common.api'
import { connect } from 'react-redux'
import {setUserName} from '../../actions/user.actions'
import {Grid, Row} from 'react-bootstrap'
import {withRouter, Link, Route } from 'react-router-dom'

import UserPageContainer from '../containers/user.page.container'
import CurrentCategoryContainer from '../containers/current.category.container'
import QuizContainer from '../containers/quiz.container'
import ResultPageContainer from '../containers/result.page.container'

class UserPageLayer extends Component {
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
      this.props.history.push('/');
    }, 300);
  }

  goToAuthPage(){
    console.log(this.props);
    setTimeout(() => {
      this.props.history.push('/auth');
    }, 300);
  }

  render(){
    return (
      <Grid>
        <Row className="header-user-page">
          <Link to="/" onClick={this.goToHomePage} className="text-header-logo">Quiz test App</Link>
          <Link to="/auth" onClick={this.goToAuthPage} className="text-header-logout">Logout</Link>
          <p className="text-header-name">Hi, {this.props.userData.login}</p>
        </Row>
        <Row className="article-home-cols">
          <Route exact path='/userpage' component={UserPageContainer}/>
          <Route path='/userpage/category' component={CurrentCategoryContainer} />
          <Route path='/userpage/quiz' component={QuizContainer}/>
          <Route path='/userpage/result' component={ResultPageContainer}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserPageLayer));