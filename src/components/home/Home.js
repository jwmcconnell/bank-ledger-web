import React from 'react';
import PropTypes from 'prop-types';
import { getUsername, getAccountBalance } from '../../selectors/authSelectors';
import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import { makeDeposit, makeWithdrawal } from '../../actions/ledgerActions';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  state = {
    deposit: 0,
    withdrawal: 0
  }
  
  static propTypes = {
    username: PropTypes.string,
    balance: PropTypes.number,
    makeDeposit: PropTypes.func.isRequired,
    makeWithdrawal: PropTypes.func.isRequired
  }

  handleSubmit = (e, transactionType) => {
    e.preventDefault();
    if(transactionType === 'deposit') {
      this.props.makeDeposit(this.state.deposit);
      this.setState({ deposit: 0 });
    } else {
      this.props.makeWithdrawal(this.state.withdrawal);
      this.setState({ withdrawal: 0 });
    }
  };

  handleUpdate = e => {
    this.setState({ [e.target.name]: parseFloat(e.target.value) });
  };
  
  render() {
    const { balance } = this.props;
    const { deposit, withdrawal } = this.state;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const formattedBalance = formatter.format(balance);
    return (
      <section>
        <h1>Home</h1>
        <Link to="/transactions">
          <button>View Transactions</button>
        </Link>
        
        <h3>Balance: { formattedBalance }</h3>
        <TransactionForm 
          handleSubmit={this.handleSubmit} 
          handleUpdate={this.handleUpdate}
          depositValue={deposit}
          transactionType='deposit'
        />
        <TransactionForm 
          handleSubmit={this.handleSubmit} 
          handleUpdate={this.handleUpdate}
          depositValue={withdrawal}
          transactionType='withdrawal'
        />
      </section>
    );
  }
  
}

const mapStateToProps = state => ({
  username: getUsername(state),
  balance: getAccountBalance(state)
});

const mapDispatchToProps = dispatch => ({
  makeDeposit: (amount) => dispatch(makeDeposit(amount)),
  makeWithdrawal: (amount) => dispatch(makeWithdrawal(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

