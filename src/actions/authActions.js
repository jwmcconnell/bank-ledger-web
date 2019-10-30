import { fetchLogin, fetchSignUp, fetchVerify, fetchLogOut } from '../services/auth-api';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginUser = (user) => dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });

  return fetchLogin(user)
    .then(user => {
      dispatch({
        type: LOGIN,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err
      });
    });
};

export const SIGN_UP_LOADING = 'SIGN_UP_LOADING';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const signUpUser = (user) => dispatch => {
  dispatch({
    type: SIGN_UP_LOADING
  });

  return fetchSignUp(user)
    .then(user => {
      dispatch({
        type: SIGN_UP,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: err
      });
    });
};

export const VERIFY_LOADING = 'VERIFY_LOADING';
export const VERIFY = 'VERIFY';
export const VERIFY_ERROR = 'VERIFY_ERROR';
export const verifyUser = (user) => dispatch => {
  dispatch({
    type: VERIFY_LOADING
  });

  return fetchVerify(user)
    .then(user => {
      dispatch({
        type: VERIFY,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: VERIFY_ERROR,
        payload: err
      });
    });
};

export const LOG_OUT_LOADING = 'LOG_OUT_LOADING';
export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';
export const logOutUser = (user) => dispatch => {
  dispatch({
    type: LOG_OUT_LOADING
  });

  return fetchLogOut(user)
    .then(() => {
      dispatch({
        type: LOG_OUT,
      });
    })
    .catch(err => {
      dispatch({
        type: LOG_OUT_ERROR,
        payload: err
      });
    });
};
