import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { getTransactions } from '../../selectors/authSelectors';
import { connect } from 'react-redux';
import { checkTransactions } from '../../actions/ledgerActions';

class Transactions extends React.Component {
  static propTypes = {
    transactionsData: PropTypes.array.isRequired,
    checkTransactions: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    this.props.checkTransactions();
  }
  
  render() {
    const { transactionsData } = this.props;
    const tableData = transactionsData.map((transaction, i) => {
      return (
        <tr key={`${i}-${transaction.amount}-${transaction.endingBalance}`}>
          <td>{transaction.startingBalance}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.type}</td>
          <td>{transaction.endingBalance}</td>
          <td>{transaction.date}</td>
        </tr>
      );
    });
    console.log(tableData);
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Starting Balance</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Ending Balance</th>
              <th>Date</th>
            </tr>
          </thead>
          {tableData}
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  transactionsData: getTransactions(state)
});


const mapDispatchToProps = dispatch => ({
  checkTransactions: () => dispatch(checkTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);

