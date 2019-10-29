import React from 'react';
import PropTypes from 'prop-types';

const AuthForm = ({ handleSubmit, handleUpdate, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input name="username" type="test" onChange={handleUpdate}></input>
      </label>
      <label>password:
        <input name="password" type="password" onChange={handleUpdate}></input>
      </label>
      <button>Submit</button>
      <span>{errorMessage}</span>
    </form>
  );
};

AuthForm.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default AuthForm;
