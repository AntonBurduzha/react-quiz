import { combineReducers } from 'redux';
import loginReducer from './login.reducer'
import userReducer from './user.reducer'

let reducers = combineReducers({
  loginState: loginReducer,
  userState: userReducer
});

export default reducers;