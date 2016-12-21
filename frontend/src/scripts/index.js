import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import router from './router'
import store from './store'
import '../styles/style.scss'

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);