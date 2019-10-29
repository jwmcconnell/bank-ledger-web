const fetchBalance = (user) => {
  return fetch('http://localhost:3000/api/v1/ledger/balance', {
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

export {
  fetchBalance
};
