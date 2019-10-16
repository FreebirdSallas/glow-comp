import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
