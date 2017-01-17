import { combineReducers } from 'redux';
import loginReducer from './login.reducer'
import userReducer from './user.reducer'
import quizReducer from './quiz.reducer'

let reducers = combineReducers({
  loginState: loginReducer,
  userState: userReducer,
  quizState: quizReducer
});

export default reducers;