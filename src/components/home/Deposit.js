import React from 'react';
import PropTypes from 'prop-types';

const Deposit = ({ handleUpdate, handleSubmit, depositValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Amoutn:
        <input name="deposit" type="number" step="0.01" onChange={handleUpdate} value={depositValue}/>
      </label>
      <button>Submit</button>
    </form>
  );
};

Deposit.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  depositValue: PropTypes.number.isRequired
};

export default Deposit;
