import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from '../../components/shared/AuthForm';
import { getUsername, getAuthError } from '../../selectors/authSelectors';
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux';

class Login extends React.Component {

  static propTypes = {
    submitLogin: PropTypes.func.isRequired,
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

    this.props.submitLogin(user);
  };

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    const { error } = this.props;
    return (
      <section>
        <h1>Login</h1>
        <AuthForm 
          handleSubmit={this.handleSubmit} 
          handleUpdate={this.handleUpdate} 
          errorMessage={error}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  username: getUsername(state),
  error: getAuthError(state)
});

const mapDispatchToProps = dispatch => ({
  submitLogin: (user) => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
