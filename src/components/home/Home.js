import React from 'react';
import PropTypes from 'prop-types';
import { getUsername, getAccountBalance } from '../../selectors/authSelectors';
import { connect } from 'react-redux';

const Home = ({ balance }) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  const formattedBalance = formatter.format(balance);
  return (
    <section>
      <h1>Home</h1>
      <h3>Balance: { formattedBalance }</h3>
    </section>
  );
};

Home.propTypes = {
  balance: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  username: getUsername(state),
  balance: getAccountBalance(state)
});

export default connect(
  mapStateToProps,
  null
)(Home);

