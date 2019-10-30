import reducer from './authReducer';
import {
  LOGIN_ERROR,
  LOGIN,
  LOGIN_LOADING,
  SIGN_UP_ERROR,
  SIGN_UP_LOADING,
  SIGN_UP,
  LOG_OUT,
  LOG_OUT_LOADING,
  LOG_OUT_ERROR,
} from '../actions/authActions';
import { DEPOSIT, DEPOSIT_LOADING, DEPOSIT_ERROR, WITHDRAWAL, WITHDRAWAL_LOADING, WITHDRAWAL_ERROR, TRANSACTIONS, TRANSACTIONS_LOADING, TRANSACTIONS_ERROR } from '../actions/ledgerActions';

describe('Auth Reducer', () => {
  it('Handles the sign up action', () => {
    const initialState = {
      loading: true,
      username: null,
      balance: 0,
      error: null,
      transactions: [],
      loggedOut: true
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
      transactions: [],
      loggedOut: false
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
      transactions: [],
      loggedOut: true
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
      transactions: [],
      loggedOut: false
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
      balance: 20,
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

  it('Handles the transactions action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: TRANSACTIONS,
      payload: [{ 
        startingBalance: 10533.88,
        amount: 100,
        type: 'Deposit',
        date: '10-29-2019',
        endingBalance: 10633.88,
      }, {
        startingBalance: 13656.88,
        amount: 3123,
        type: 'Withdrawal',
        date: '10-29-2019',
        endingBalance: 10533.88,
      }]
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: null,
      transactions: [{ 
        startingBalance: 10533.88,
        amount: 100,
        type: 'Deposit',
        date: '10-29-2019',
        endingBalance: 10633.88,
      }, {
        startingBalance: 13656.88,
        amount: 3123,
        type: 'Withdrawal',
        date: '10-29-2019',
        endingBalance: 10533.88,
      }],
      balance: 0
    });
  });

  it('Handles the transactions loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: TRANSACTIONS_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0
    });
  });

  it('Handles the transactions error action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
    };

    const newState = reducer(initialState, {
      type: TRANSACTIONS_ERROR,
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

  it('Handles the log out action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
      loggedOut: false
    };

    const newState = reducer(initialState, {
      type: LOG_OUT,
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
      loggedOut: true
    });
  });

  it('Handles the log out loading action', () => {
    const initialState = {
      loading: false,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
      loggedOut: false
    };

    const newState = reducer(initialState, {
      type: LOG_OUT_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
      loggedOut: false
    });
  });

  it('Handles the log out error action', () => {
    const initialState = {
      loading: true,
      username: null,
      error: null,
      transactions: [],
      balance: 0,
      loggedOut: false
    };

    const newState = reducer(initialState, {
      type: LOG_OUT_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      loading: false,
      username: null,
      error: 'error',
      transactions: [],
      balance: 0,
      loggedOut: false
    });
  });
});
