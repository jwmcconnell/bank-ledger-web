import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from '../../components/shared/AuthForm';
import { getUsername, getAuthError } from '../../selectors/authSelectors';
import { signUpUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {

  static propTypes = {
    submitSignUp: PropTypes.func.isRequired,
    error: PropTypes.string,
    username: PropTypes.string,
    history: PropTypes.object.isRequired
  }

  state = {
    username: '',
    password: ''
  }

  componentDidUpdate(prevState, prevProps) {
    const { error, username } = this.props;
    if(prevProps !== this.props) {
      if(!error && username) {
        this.props.history.push('/');
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.submitSignUp(user);
  };

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { error } = this.props;
    return (
      <section style={{ textAlign: 'center' }}>
        <h1>Sign Up</h1>
        <AuthForm 
          handleSubmit={this.handleSubmit} 
          handleUpdate={this.handleUpdate} 
          errorMessage={error}
        />
        <Link to="/login">Login</Link>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  username: getUsername(state),
  error: getAuthError(state)
});

const mapDispatchToProps = dispatch => ({
  submitSignUp: (user) => dispatch(signUpUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
