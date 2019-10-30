import reducer from './authReducer';
import {
  LOGIN_ERROR,
  LOGIN,
  LOGIN_LOADING,
  SIGN_UP_ERROR,
  SIGN_UP_LOADING,
  SIGN_UP,
} from '../actions/authActions';
import { DEPOSIT, DEPOSIT_LOADING, DEPOSIT_ERROR, WITHDRAWAL, WITHDRAWAL_LOADING, WITHDRAWAL_ERROR } from '../actions/ledgerActions';

describe('Auth Reducer', () => {
  it('Handles the sign up action', () => {
    const initialState = {
      loading: true,
      username: null,
      balance: 0,
      error: null,
      transactions: []
    };

    const newState = reducer(initialState, {
      type: SIGN_UP,
      payload: { username: 'jack', balance: 0 }
    });

    expect(newState).toEqual({
      loading: false,
      username: 'jack',
      balance: 0,
      error: null,
      transactions: []
    });
  });

  it('Handles the sign up loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      balance: 0,
      error: null,
      transactions: []
    };

    const newState = reducer(initialState, {
      type: SIGN_UP_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      balance: 0,
      error: null,
      transactions: []
    });
  });

  it('Handles the sign up error action', () => {
    const initialState = {
      loading: true,
      username: null,
      balance: 0,
      error: null,
      transactions: []
    };

    const newState = reducer(initialState, {
      type: SIGN_UP_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      balance: 0,
      error: 'error',
      transactions: []
    });
  });

  it('Handles the login action', () => {
    const initialState = {
      loading: true,
      username: null,
      balance: 0,
      error: null,
      transactions: []
    };

    const newState = reducer(initialState, {
      type: LOGIN,
      payload: { username: 'jack', balance: 0 }
    });

    expect(newState).toEqual({
      loading: false,
      username: 'jack',
      balance: 0,
      error: null,
      transactions: []
    });
  });

  it('Handles the login loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      balance: 0,
      error: null,
      transactions: []
    };

    const newState = reducer(initialState, {
      type: LOGIN_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      balance: 0,
      error: null,
      transactions: []
    });
  });

  it('Handles the login error action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: LOGIN_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: 'error',
      transactions: [],
      balance: 0,
    });
  });

  it('Handles the deposit action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: DEPOSIT,
      payload: { balance: 10 }
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: null,
      transactions: [],
      balance: 10
    });
  });

  it('Handles the deposit loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: DEPOSIT_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0
    });
  });

  it('Handles the deposit error action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: DEPOSIT_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: 'error',
      transactions: [],
      balance: 0
    });
  });

  it('Handles the withdrawal action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: WITHDRAWAL,
      payload: { balance: 10 }
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: null,
      transactions: [],
      balance: 10
    });
  });

  it('Handles the withdrawal loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: WITHDRAWAL_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0
    });
  });

  it('Handles the withdrawal error action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: WITHDRAWAL_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: 'error',
      transactions: [],
      balance: 0
    });
  });
});
