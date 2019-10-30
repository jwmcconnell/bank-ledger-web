import {
  makeDeposit,
  DEPOSIT,
  DEPOSIT_LOADING,
  makeWithdrawal,
  WITHDRAWAL,
  WITHDRAWAL_LOADING,
  checkTransactions,
  TRANSACTIONS,
  TRANSACTIONS_LOADING,
} from '../actions/ledgerActions';

jest.mock('../services/ledger-api.js', () => ({
  fetchDeposit: () => Promise.resolve({ balance: 124 }),
  fetchWithdrawal: () => Promise.resolve({ balance: 123 }),
  fetchTransactions: () => Promise.resolve([{ 
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
  }])
}));

describe('Ledger Actions', () => {
  it('it dispatches a deposit and deposit loading action', () => {
    const thunk = makeDeposit();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: DEPOSIT_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: DEPOSIT,
          payload: { balance: 124 }
        });
      });
  });

  it('it dispatches a withdrawal and withdrawal loading action', () => {
    const thunk = makeWithdrawal();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: WITHDRAWAL_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: WITHDRAWAL,
          payload: { balance: 123 }
        });
      });
  });

  it('it dispatches a transactions and transactions loading action', () => {
    const thunk = checkTransactions();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: TRANSACTIONS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
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
      });
  });
});
