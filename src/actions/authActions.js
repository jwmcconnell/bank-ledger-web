import { fetchLogin, fetchSignUp } from '../services/auth-api';

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
