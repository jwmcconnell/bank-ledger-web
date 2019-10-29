import {
  loginUser,
  LOGIN,
  LOGIN_LOADING,
  signUpUser,
  SIGN_UP_LOADING,
  SIGN_UP,
} from '../actions/authActions';

jest.mock('../services/auth-api.js', () => ({
  fetchLogin: () => Promise.resolve({ username: 'jack' }),
  fetchSignUp: () => Promise.resolve({ username: 'jack' })
}));

describe('Auth Actions', () => {
  it('it dispatches a loading action adn a fetch login action', () => {
    const thunk = loginUser();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: LOGIN_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: LOGIN,
          payload: { username: 'jack' }
        });
      });
  });

  it('it dispatches a loading action adn a fetch login action', () => {
    const thunk = signUpUser();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SIGN_UP_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: SIGN_UP,
          payload: { username: 'jack' }
        });
      });
  });
});
