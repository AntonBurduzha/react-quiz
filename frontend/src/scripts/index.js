import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import ReactDOM from 'react-dom'
import App from './router'
import '../styles/style.scss'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
  </Router>,
document.getElementById('root'));