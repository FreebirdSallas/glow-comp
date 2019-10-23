import React, {Component} from 'react';
import {MDBFooter} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './comps/Navigation';
import Routes from './Routes';
import API from './utils/API';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      loggedIn: false,
      id: '',
    };
  }
  componentDidMount () {
    API.isLoggedIn ().then (response => {
      
      if (response.data.user !== 'null') {
        this.setState ({
          id: response.data.user._id,
          loggedIn: true,
        });
      } 
      
    }).catch(err => console.log(err));
  }

  render () {
    return (
      <Router>
        <Navigation loggedIn={this.state.loggedIn} />
        <Routes/>

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
