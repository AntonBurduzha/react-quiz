import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import HomeContainer from './components/containers/home.container'
import RegisterContainer from './components/containers/register.container'
import AuthContainer from './components/containers/auth.container'
import UserPageContainer from './components/containers/user.page.container'

export default(
  <Router history={browserHistory}>
    <Route path='/' component={HomeContainer} />
    <Route path='/register' component={RegisterContainer} />
    <Route path='/auth' component={AuthContainer} />
    <Route path='/userpage' component={UserPageContainer}/>
  </Router>
);