import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import AppContainer from './components/containers/app.container'

export default(
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer} />
  </Router>
);