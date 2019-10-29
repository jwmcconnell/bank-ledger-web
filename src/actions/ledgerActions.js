import { fetchBalance } from '../services/ledger-api';

export const BALANCE_LOADING = 'BALANCE_LOADING';
export const BALANCE = 'BALANCE';
export const BALANCE_ERROR = 'BALANCE_ERROR';
export const getBalance = () => dispatch => {
  dispatch({
    type: BALANCE_LOADING
  });

  return fetchBalance()
    .then(user => {
      dispatch({
        type: BALANCE,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: BALANCE_ERROR,
        payload: err
      });
    });
};
