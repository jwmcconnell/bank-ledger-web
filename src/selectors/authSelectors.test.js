import { getAuthState, getUsername, getAuthError } from './authSelectors';

describe('Auth Selectors', () => {
  it('Gets the auth state', () => {
    const state = {
      auth: {
        username: 'jack',
        loading: false,
        error: null,
      }
    };

    expect(getAuthState(state)).toEqual({
      username: 'jack',
      loading: false,
      error: null,
    });
  });

  it('Gets the username', () => {
    const state = {
      auth: {
        username: 'jack',
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
        loading: false,
        error: 'error',
      }
    };

    expect(getAuthError(state)).toEqual('error');
  });
});
