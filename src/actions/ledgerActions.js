import { fetchBalance, fetchDeposit } from '../services/ledger-api';

export const BALANCE_LOADING = 'BALANCE_LOADING';
export const BALANCE = 'BALANCE';
export const BALANCE_ERROR = 'BALANCE_ERROR';
export const getBalance = () => dispatch => {
  dispatch({
    type: BALANCE_LOADING
  });

  return fetchBalance()
    .then(balance => {
      dispatch({
        type: BALANCE,
        payload: balance
      });
    })
    .catch(err => {
      dispatch({
        type: BALANCE_ERROR,
        payload: err
      });
    });
};

export const DEPOSIT_LOADING = 'DEPOSIT_LOADING';
export const DEPOSIT = 'DEPOSIT';
export const DEPOSIT_ERROR = 'DEPOSIT_ERROR';
export const makeDeposit = (amount) => dispatch => {
  dispatch({
    type: DEPOSIT_LOADING
  });

  return fetchDeposit(amount)
    .then(transaction => {
      dispatch({
        type: DEPOSIT,
        payload: transaction
      });
    })
    .catch(err => {
      dispatch({
        type: DEPOSIT_ERROR,
        payload: err
      });
    });
};
