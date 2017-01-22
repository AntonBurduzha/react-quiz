import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import HomeContainer from './components/containers/home.container'
import RegisterContainer from './components/containers/register.container'
import AuthContainer from './components/containers/auth.container'
import UserPageContainer from './components/containers/user.page.container'
import CurrentCategoryContainer from './components/containers/current.category.container'
import UserPageLayer from './components/layers/user.page.layer'
import QuizContainer from './components/containers/quiz.container'
import ResultPageContainer from './components/containers/result.page.container'

export default(
  <Router history={browserHistory}>
    <Route path='/' component={HomeContainer} />
    <Route path='register' component={RegisterContainer} />
    <Route path='auth' component={AuthContainer} />
    <Route path='userpage' component={UserPageLayer}>
      <IndexRoute component={UserPageContainer}/>
      <Route path='category' component={CurrentCategoryContainer}/>
      <Route path='quiz' component={QuizContainer}/>
      <Route path='result' component={ResultPageContainer}/>
    </Route>
  </Router>
);