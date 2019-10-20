import React, {Component} from 'react';
import {MDBFooter} from 'mdbreact';
import './assets/css/LogInRegModal.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import API from './utils/API';
import Navigation from './comps/Navigation';

class App extends Component {
  componentDidMount () {
    API.isLoggedIn ().then (response => {
      console.log (response);

      if (response.data.user) {
        API.getUser (response.data.user._id).then (response => {
          console.log (response.data._doc);
          this.setState ({
            rows: response.data._doc.events,
          });
        });
      } else {
        //something that removes table and tells them to log in
      }
    });
  }

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
