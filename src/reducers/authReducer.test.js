import reducer from './authReducer';
import {
  LOGIN_ERROR,
  LOGIN,
  LOGIN_LOADING,
  SIGN_UP_ERROR,
  SIGN_UP_LOADING,
  SIGN_UP,
} from '../actions/authActions';

describe('Auth Reducer', () => {
  it('Handles the sign up action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: SIGN_UP,
      payload: { username: 'jack' }
    });

    expect(newState).toEqual({
      loading: false,
      username: 'jack',
      error: null
    });
  });

  it('Handles the sign up loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: SIGN_UP_LOADING,
      payload: { username: 'jack' }
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      error: null
    });
  });

  it('Handles the sign up error action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: SIGN_UP_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: 'error'
    });
  });

  it('Handles the login action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: LOGIN,
      payload: { username: 'jack' }
    });

    expect(newState).toEqual({
      loading: false,
      username: 'jack',
      error: null
    });
  });

  it('Handles the login loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: LOGIN_LOADING,
      payload: { username: 'jack' }
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      error: null
    });
  });

  it('Handles the login error action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: LOGIN_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: 'error'
    });
  });
});
