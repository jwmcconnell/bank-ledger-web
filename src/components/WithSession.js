import React from 'react';
import PropTypes from 'prop-types';
import { getUsername } from '../selectors/authSelectors';
import { connect } from 'react-redux';

export const WithSession = Component => {
  class WithSession extends React.Component {
    static propTypes = {
      username: PropTypes.string,
      history: PropTypes.object.isRequired
    }

    componentDidMount() {
      if(!this.props.username) {
        this.props.history.replace('/landing');
      }
    }

    render() {
      if(!this.props.username) return null;
      return <Component {...this.props}/>;
    }
  }

  const mapStateToProps = state => ({
    username: getUsername(state)
  });

  return connect(mapStateToProps)(WithSession);
};
