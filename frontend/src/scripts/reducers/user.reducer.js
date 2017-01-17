import AppActionTypes from '../actions/action.types'
import update from 'immutability-helper';

const initUserState = {
  login: ''
};

let newState = {};

const userReducer = (state = initUserState, action) => {
  switch(action.type){
    case AppActionTypes.SET_USERNAME:
      newState = update(state, {login: {$set: action.login}});
      return newState;
    default:
      return state;
  }
};

export default userReducer;