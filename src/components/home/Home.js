import React from 'react';
import PropTypes from 'prop-types';
import { getUsername, getAccountBalance } from '../../selectors/authSelectors';
import { connect } from 'react-redux';
import Deposit from './Deposit';
import { makeDeposit } from '../../actions/ledgerActions';

class Home extends React.Component {

  state = {
    deposit: 0
  }
  
  static propTypes = {
    username: PropTypes.string,
    balance: PropTypes.number,
    makeDeposit: PropTypes.func.isRequired
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.makeDeposit(this.state.deposit);
    this.setState({ deposit: 0 });
  };

  handleUpdate = e => {
    this.setState({ [e.target.name]: parseFloat(e.target.value) });
  };
  
  render() {
    const { balance } = this.props;
    const { deposit } = this.state;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const formattedBalance = formatter.format(balance);
    return (
      <section>
        <h1>Home</h1>
        <h3>Balance: { formattedBalance }</h3>
        <Deposit 
          handleSubmit={this.handleSubmit} 
          handleUpdate={this.handleUpdate}
          depositValue={deposit}
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
  makeDeposit: (amount) => dispatch(makeDeposit(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

