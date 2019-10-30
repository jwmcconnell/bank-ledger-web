import {
  loginUser,
  LOGIN,
  LOGIN_LOADING,
  signUpUser,
  SIGN_UP_LOADING,
  SIGN_UP,
  VERIFY,
  VERIFY_LOADING,
  LOG_OUT_LOADING,
  LOG_OUT,
  verifyUser,
  logOutUser,
} from '../actions/authActions';

jest.mock('../services/auth-api.js', () => ({
  fetchLogin: () => Promise.resolve({ username: 'jack' }),
  fetchSignUp: () => Promise.resolve({ username: 'jack' }),
  fetchVerify: () => Promise.resolve({ username: 'jack', balance: 0 }),
  fetchLogOut: () => Promise.resolve({})
}));

describe('Auth Actions', () => {
  it('it dispatches a loading action and a fetch login action', () => {
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

  it('it dispatches a loading action and a fetch sign up action', () => {
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

  it('it dispatches a loading action and a fetch log out action', () => {
    const thunk = logOutUser();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: LOG_OUT_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: LOG_OUT,
        });
      });
  });

  it('it dispatches a loading action and a fetch verify action', () => {
    const thunk = verifyUser();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: VERIFY_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: VERIFY,
          payload: { username: 'jack', balance: 0 }
        });
      });
  });
});
