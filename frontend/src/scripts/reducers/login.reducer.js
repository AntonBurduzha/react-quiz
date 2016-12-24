import AppActionTypes from '../actions/action.types'

const initLoginState = {
  message: '',
  token: '',
  unique: false
};

const loginReducer = (state = initLoginState, action) => {
  switch(action.type){
    case AppActionTypes.CHECK_UNIQUE_USER:
      return Object.assign({}, state, action.unique);
    case AppActionTypes.SET_TOKEN:
      return Object.assign({}, state, action.tokenChecking);
    case AppActionTypes.CHECK_TOKEN:
      return Object.assign({}, state, action.tokenChecking);
    default:
      return state;
  }
};

export default loginReducer;