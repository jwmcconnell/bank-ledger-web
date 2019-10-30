const fetchLogin = (user) => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/auth/login', {
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

const fetchSignUp = (user) => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/auth/signup', {
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
      if(!ok) throw 'That username is taken. Please try a different one.';

      return json;
    });
};

const fetchVerify = () => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/auth/verify', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
    .then(res => res.json());
};

const fetchLogOut = () => {
  return fetch('https://bank-ledger.herokuapp.com/api/v1/auth/log-out', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
    .then(res => res.json());
};

export {
  fetchLogin,
  fetchSignUp,
  fetchVerify,
  fetchLogOut
};
