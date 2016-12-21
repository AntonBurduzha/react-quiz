import AppActionTypes from '../actions/action.types'

const loginReducer = (state = {}, action) => {
  switch(action.type){
    case AppActionTypes.SET_TOKEN:
      return action.tokenChecking;
    case AppActionTypes.CHECK_TOKEN:
      return Object.assign({}, state, action.tokenChecking);
    default:
      return state;
  }
};

export default loginReducer;