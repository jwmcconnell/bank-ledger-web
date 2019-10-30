import { fetchBalance, fetchDeposit, fetchWithdrawal, fetchTransactions } from '../services/ledger-api';

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

export const WITHDRAWAL_LOADING = 'WITHDRAWAL_LOADING';
export const WITHDRAWAL = 'WITHDRAWAL';
export const WITHDRAWAL_ERROR = 'WITHDRAWAL_ERROR';
export const makeWithdrawal = (amount) => dispatch => {
  dispatch({
    type: WITHDRAWAL_LOADING
  });

  return fetchWithdrawal(amount)
    .then(transaction => {
      dispatch({
        type: WITHDRAWAL,
        payload: transaction
      });
    })
    .catch(err => {
      dispatch({
        type: WITHDRAWAL_ERROR,
        payload: err
      });
    });
};

export const TRANSACTIONS_LOADING =  'TRANSACTIONS_LOADING';
export const TRANSACTIONS =  'TRANSACTIONS';
export const TRANSACTIONS_ERROR =  'TRANSACTIONS_ERROR';
export const checkTransactions = (amount) => dispatch => {
  console.log('TRING THINGSFASD');
  dispatch({
    type: TRANSACTIONS_LOADING
  });

  return fetchTransactions(amount)
    .then(list => {
      console.log({ list });
      dispatch({
        type: TRANSACTIONS,
        payload: list
      });
    })
    .catch(err => {
      dispatch({
        type: TRANSACTIONS_ERROR,
        payload: err
      });
    });
};

