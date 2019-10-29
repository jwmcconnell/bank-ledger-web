import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    alignItems: 'center',
    margin: 'auto'
  },
  label: {
    margin: 10
  }
};

const AuthForm = ({ handleSubmit, handleUpdate, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Username:
        <input name="username" type="test" onChange={handleUpdate}></input>
      </label>
      <label style={styles.label}>Password:
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
