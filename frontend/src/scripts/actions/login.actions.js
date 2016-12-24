import AppActionTypes from './action.types'

const checkUniqueUser = (dispatch, unique) => {
  dispatch( {
    type: AppActionTypes.CHECK_UNIQUE_USER,
    unique
  });
};

const setToken = (dispatch, tokenChecking) => {
  dispatch( {
    type: AppActionTypes.SET_TOKEN,
    tokenChecking
  });
};

const checkToken = (dispatch, tokenChecking) => {
  dispatch( {
    type: AppActionTypes.CHECK_TOKEN,
    tokenChecking
  });
};

export {
  setToken,
  checkToken,
  checkUniqueUser
};