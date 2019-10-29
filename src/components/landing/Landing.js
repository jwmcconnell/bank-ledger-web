import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section>
      <h1>Landing</h1>
      <nav>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/sign-up"><button>Sign Up</button></Link>
      </nav>
    </section>
  );
};

Landing.propTypes = {};

export default Landing;
