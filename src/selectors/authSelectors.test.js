import { getAuthState, getUsername, getAuthError, getAccountBalance, getTransactions, getLoggedOut } from './authSelectors';

describe('Auth Selectors', () => {
  it('Gets the auth state', () => {
    const state = {
      auth: {
        username: 'jack',
        balance: 0,
        loading: false,
        error: null,
      }
    };

    expect(getAuthState(state)).toEqual({
      username: 'jack',
      balance: 0,
      loading: false,
      error: null,
    });
  });

  it('Gets the username', () => {
    const state = {
      auth: {
        username: 'jack',
        balance: 0,
        loading: false,
        error: null,
      }
    };

    expect(getUsername(state)).toEqual('jack');
  });

  it('Gets the username', () => {
    const state = {
      auth: {
        username: 'jack',
        balance: 0,
        loading: false,
        error: 'error',
      }
    };

    expect(getAuthError(state)).toEqual('error');
  });

  it('Gets the balance', () => {
    const state = {
      auth: {
        username: 'jack',
        balance: 0,
        loading: false,
        error: 'error',
      }
    };

    expect(getAccountBalance(state)).toEqual(0);
  });

  it('Gets the transactions', () => {
    const state = {
      auth: {
        username: 'jack',
        balance: 0,
        loading: false,
        error: 'error',
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
        }]
      }
    };

    expect(getTransactions(state)).toEqual([{ 
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
    }]);
  });

  it('Gets if the user is logged out', () => {
    const state = {
      auth: {
        username: 'jack',
        balance: 0,
        loading: false,
        error: 'error',
        loggedOut: true
      }
    };

    expect(getLoggedOut(state)).toEqual(true);
  });
});
