import AppActionTypes from './action.types'

const setQuizList = (dispatch, names) => {
  dispatch( {
    type: AppActionTypes.SET_QUIZ_LIST,
    names
  });
};

export {
  setQuizList
};