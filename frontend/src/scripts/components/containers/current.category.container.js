import React, { Component, PropTypes } from 'react'
import {setUserPageHeigth} from '../../api/common.api'
import CurrentCategoryView from '../views/current.category.view'

export default class CurrentCategoryContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    setUserPageHeigth();
  }

  render(){
    return (
      <CurrentCategoryView/>
    );
  }
}