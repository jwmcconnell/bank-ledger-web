import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ transactionData }) => {
  console.log('as;dlfkasdlfk;jas;ldkjas;ldkjas;ldka');
  return (
    <tr>
      <td>{transactionData.startingBalance}</td>
      <td>{transactionData.amount}</td>
      <td>{transactionData.type}</td>
      <td>{transactionData.endingBalance}</td>
      <td>{transactionData.date}</td>
    </tr>
  );
};

Transaction.propTypes = {
  transactionData: PropTypes.object.isRequired
};

export default Transaction;
