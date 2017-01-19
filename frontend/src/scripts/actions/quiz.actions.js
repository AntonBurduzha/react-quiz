import AppActionTypes from './action.types'

const setQuizList = (dispatch, names) => {
  dispatch( {
    type: AppActionTypes.SET_QUIZ_LIST,
    names
  });
};

const setCurrentQuizData = (dispatch, currentQuizData) => {
  dispatch( {
    type: AppActionTypes.SET_CURRENT_QUIZ_DATA,
    currentQuizData
  });
};

export {
  setQuizList,
  setCurrentQuizData
};