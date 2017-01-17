import AppActionTypes from './action.types'

const setUserName = (dispatch, login) => {
  dispatch( {
    type: AppActionTypes.SET_USERNAME,
    login
  });
};

export {
  setUserName
};