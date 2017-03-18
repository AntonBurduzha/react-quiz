import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'

import HomeContainer from './components/containers/home.container'
import RegisterContainer from './components/containers/register.container'
import AuthContainer from './components/containers/auth.container'
import UserPageLayer from './components/layers/user.page.layer'

export default(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/register' component={RegisterContainer} />
      <Route path='/auth' component={AuthContainer} />
      <Route path='/userpage' component={UserPageLayer} />
    </div>
  </BrowserRouter>
);