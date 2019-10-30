import React from 'react';
import PropTypes from 'prop-types';
import { getTransactions } from '../../selectors/authSelectors';
import { connect } from 'react-redux';
import { checkTransactions } from '../../actions/ledgerActions';
import { Link } from 'react-router-dom';

const styles = {
  td: {
    border: '1px solid black',
    textAlign: 'left',
    padding: 8
  },
  table: {
    margin: 'auto',
    paddingTop: 20
  }
};

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

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const tableData = transactionsData.map((transaction, i) => {
      return (
        <tr key={`${i}-${transaction.amount}-${transaction.endingBalance}`}>
          <td style={styles.td}>{formatter.format(transaction.startingBalance)}</td>
          <td style={styles.td}>{formatter.format(transaction.amount)}</td>
          <td style={styles.td}>{transaction.type}</td>
          <td style={styles.td}>{formatter.format(transaction.endingBalance)}</td>
          <td style={styles.td}>{transaction.date}</td>
        </tr>
      );
    });

    return (
      <section>
        <h1>Transactions</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.td}>Starting Balance</th>
              <th style={styles.td}>Amount</th>
              <th style={styles.td}>Type</th>
              <th style={styles.td}>Ending Balance</th>
              <th style={styles.td}>Date</th>
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

