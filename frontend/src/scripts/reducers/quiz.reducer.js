import AppActionTypes from '../actions/action.types'
import update from 'immutability-helper';

const initQuizState = {
  names: []
};

let newState = {};

const quizReducer = (state = initQuizState, action) => {
  switch(action.type){
    case AppActionTypes.SET_QUIZ_LIST:
      newState = update(state, {names: {$set: action.names}});
      return newState;
    default:
      return state;
  }
};

export default quizReducer;