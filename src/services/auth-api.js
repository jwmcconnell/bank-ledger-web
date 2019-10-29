const fetchLogin = (user) => {
  return fetch('http://localhost:3000/api/v1/auth/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
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
  return fetch('http://localhost:3000/api/v1/auth/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
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

export {
  fetchLogin,
  fetchSignUp,
};
