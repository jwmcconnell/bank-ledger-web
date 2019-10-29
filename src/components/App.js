import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Landing from '../containers/landing/Landing';
import Home from '../containers/home/Home';
import SignUp from '../containers/sign-up/SignUp';
import Login from '../containers/login/Login';
import { WithSession } from './WithSession';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/" component={WithSession(Home)}
        />
      </Switch>
    </Router>
  );
}
