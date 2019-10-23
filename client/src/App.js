import React, {Component} from 'react';
import {MDBFooter} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './comps/Navigation';
import Routes from './Routes';

class App extends Component {
  render () {
    return (
      <Router>

        <Navigation />
        <Routes />

        <MDBFooter color="indigo">
          <p className="footer-copyright mb-0 py-3 text-center">
            &copy; {new Date ().getFullYear ()} Copyright:
            <a href="https://github.com/novakjason"> Jason Novak </a>
          </p>
        </MDBFooter>

      </Router>
    );
  }
}

export default App;
