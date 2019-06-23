import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LogIn from '../pages/LogIn/LogIn';
import iovindex from './iovindex';
class loginIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={LogIn} />
          <Route path='/iovindex' component={iovindex} />
          <Redirect from='/' to='/login' />
        </Switch>
      </Router>
    );
  }
}
export default loginIndex;
