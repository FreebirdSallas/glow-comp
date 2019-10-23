import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SchedulePage from './pages/Schedule';
import ServicesPage from './pages/Services';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/LogReg';

class Routes extends Component {
 
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/schedule" component={SchedulePage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/login" component={LoginPage} />
       
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
