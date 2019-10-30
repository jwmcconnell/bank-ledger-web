import React from 'react';
import PropTypes from 'prop-types';

const TransactionForm = ({ handleUpdate, handleSubmit, depositValue, transactionType }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, transactionType)}>
      <label>{transactionType === 'deposit' ? 'Deposit' : 'Withdrawal'} Amount:
        <input name={transactionType} type="number" step="0.01" onChange={handleUpdate} value={depositValue}/>
      </label>
      <button>Submit</button>
    </form>
  );
};

TransactionForm.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  depositValue: PropTypes.number.isRequired,
  transactionType: PropTypes.string.isRequired
};

export default TransactionForm;
