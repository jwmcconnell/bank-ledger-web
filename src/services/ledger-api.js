const fetchBalance = (user) => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/ledger/balance', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Incorrect username or password.';

      return json;
    });
};

const fetchDeposit = (amount) => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/ledger/deposit', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ amount })
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Error making deposit.';

      return json;
    });
};

const fetchWithdrawal = (amount) => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/ledger/withdrawal', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ amount })
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Error making withdrawal.';

      return json;
    });
};

const fetchTransactions = () => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/ledger/transactions', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Error retrieving transactions.';

      return json;
    });
};

export {
  fetchBalance,
  fetchDeposit,
  fetchWithdrawal,
  fetchTransactions
};
