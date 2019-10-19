import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SchedulePage from './pages/Schedule';
import ServicesPage from './pages/Services';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/profile' component={ProfilePage} />
                <Route exact path='/schedule' component={SchedulePage} />
                <Route exact path='/services' component={ServicesPage} />
                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default Routes;