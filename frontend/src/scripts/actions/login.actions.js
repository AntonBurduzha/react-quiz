import AppActionTypes from './action.types'

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
  checkToken
};