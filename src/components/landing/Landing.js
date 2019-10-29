import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyUser } from '../../actions/authActions';
import { getUsername, getAuthError } from '../../selectors/authSelectors';

class Landing extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    username: PropTypes.string,
    error: PropTypes.string,
    fetchUser: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate(prevState, prevProps) {
    const { error, username } = this.props;
    if(prevProps !== this.props) {
      if(!error && username) {
        this.props.history.push('/');
      }
    }
  }

  render() {
    return (
      <section>
        <h1>Landing</h1>
        <nav>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/sign-up"><button>Sign Up</button></Link>
        </nav>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  username: getUsername(state),
  error: getAuthError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(verifyUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
