import React, { Component } from 'react';
import {
  MDBNav,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBInput,
  MDBIcon,
  MDBTabContent,
  MDBTabPane,
  MDBFooter
} from 'mdbreact';
import './assets/css/LogInRegModal.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import API from './utils/API';

// Form input text color
const formInput = {
  color: '#000'
};

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      collapsed: false,
      modal1: false,
      modal2: false,
      modal3: false,
      activeItem: '1',
      email: '',
      password: '',
      loggedIn: false,
    };
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    this.setState ({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  
  toggleTab = tab => () => {
    if (this.state.activeItem !== tab) {
      this.setState ({
      activeItem: tab,
      });
    }
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState ({
      [name]: value,
    });
    // console.log (this.state.email);
    // console.log (this.state.password);
  };

  handleRegister = event => {
    event.preventDefault ();
    API.saveUser ({
      email: this.state.email,
      password: this.state.password,
    })
      .then (response => {
        console.log (response);
        if (response.status === 200) {
          this.setState ({
            loggedIn: true,
          });
        // code here to take user to PROFILE page once registered
        }
      })
      .catch (err => {
        console.log ('ERROR');
        console.log (err);
      });
  };

  handleLogin = () => {
    console.log('USER LOGGED IN!');
    // code here to validate user email and password, then take user to profile page
  };

  handleTogglerClick = () => {
    this.setState ({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount () {
    document.querySelector ('nav').style.height = '65px';
  }
  componentWillUnmount () {
    document.querySelector ('nav').style.height = 'auto';
  }

  render () {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{backgroundColor: 'dark'}}
        onClick={this.handleTogglerClick}
      />
    );

    return (
      
      <Router>
        <div>

            {/* Navbar with brand and links */}

            <MDBNavbar
              color="blue accent-1"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
             >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="indigo-text">Infinite Wellness</strong>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>

                  {/* Navigation Links */}
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/" className="indigo-text">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/schedule" className="indigo-text">Schedule</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/services" className="indigo-text">Services</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/profile" className="indigo-text">Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>

                  {/* LogIn/Register Navbar Button */}
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBBtn rounded className='btn-indigo' onClick={this.toggle (1)}>
                        Login/Register
                      </MDBBtn>

                      {/* LogIn/Register Modal */}
                      <MDBModal
                        className="form-cascading"
                        isOpen={this.state.modal1}
                        toggle={this.toggle (1)}
                       >

                        {/* Modal Navigation using tabs for Login(tab 1) or Register(tab 2) */}
                        <MDBNav
                          tabs
                          className="md-tabs nav-justified tabs-2 indigo"
                          style={{margin: '-1.5rem 1rem 0 1rem'}}
                         >
                          {/* LogIn Tab Link */}
                          <MDBNavItem>
                            <MDBNavLink
                              className={this.state.activeItem === 1 ? 'active' : ''}
                              to="#"
                              onClick={this.toggleTab ('1')}
                             >
                              <MDBIcon icon="user" className="mr-1" />
                              Log In
                            </MDBNavLink>
                          </MDBNavItem>

                          {/* Register Tab Link */}
                          <MDBNavItem>
                            <MDBNavLink
                              className={this.state.activeItem === 2 ? 'active' : ''}
                              to="#"
                              onClick={this.toggleTab ('2')}
                             >
                              <MDBIcon icon="user-plus" className="mr-1" />
                              Register
                            </MDBNavLink>
                          </MDBNavItem>
                        </MDBNav>

                        <MDBTabContent activeItem={this.state.activeItem}>

                          {/* LogIn Tab */}
                          <MDBTabPane tabId="1">
                            <MDBModalBody className="mx-3">
                              <form className="mx-3 grey-text">
                                <MDBInput
                                  style={formInput}
                                  name="email"
                                  label="Your email"
                                  group
                                  type="email"
                                  validate
                                  error="wrong"
                                  success="right"
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                />
                                <MDBInput
                                  style={formInput}
                                  name="password"
                                  label="Your password"
                                  group
                                  type="password"
                                  value={this.state.password}
                                  onChange={this.handleChange}
                                  validate
                                />
                              </form>
                            </MDBModalBody>
                            <MDBModalFooter className="justify-content-center mx-3">
                              
                              {/* LogIn Button to use handleLogin function submitting user's email and password for validation  */}
                              <MDBBtn
                                className="mb-4"
                                color="indigo"
                                onClick={this.handleLogIn}
                               >
                                LOG IN
                                {' '}
                                <MDBIcon icon="sign-in-alt" className="ml-1" />
                              </MDBBtn>
                              
                              {/* Shortcut links to Register tab or Forgot Password Modal/Page */}
                              <MDBRow
                                className="w-100 justify-content-start pt-4"
                                style={{borderTop: '1px solid #e9ecef'}}
                               >
                                <div id="options">
                                  <p className="font-weight-bold">
                                    <span
                                      className="indigo-text ml-1"
                                      onClick={this.toggleTab ('2')}
                                     >
                                      New? Sign Up
                                    </span>
                                  </p>
                                  <p className="font-weight-bold">
                                    <span className="indigo-text ml-1">
                                      Forgot password?
                                    </span>
                                  </p>
                                </div>

                                {/* Close Modal Button */}
                                <MDBBtn
                                  outline
                                  color="indigo"
                                  onClick={this.toggle (1)}
                                 >
                                  CLOSE
                                </MDBBtn>

                              </MDBRow>
                            </MDBModalFooter>
                          </MDBTabPane>

                          {/* Register Tab */}
                          <MDBTabPane tabId="2">
                            <MDBModalBody className="mx-3">
                              <form className="mx-3 text-light">
                                <MDBInput
                                  style={formInput}
                                  name="email"
                                  label="Your email"
                                  group
                                  type="email"
                                  validate
                                  error="wrong"
                                  success="right"
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                />
                                <MDBInput
                                  style={formInput}
                                  label="Your password"
                                  group
                                  type="password"
                                  name="password"
                                  value={this.state.password}
                                  onChange={this.handleChange}
                                  validate
                                />
                                <MDBInput
                                  style={formInput}
                                  label="Repeat password"
                                  group
                                  type="password"
                                  validate
                                />
                              </form>
                            </MDBModalBody>
                            <MDBModalFooter className="justify-content-center mx-3">

                              {/* Register button captures user input and submits NEW USER OBJECT to database */}
                              <MDBBtn
                                className="mb-4"
                                color="indigo"
                                onClick={this.handleRegister}
                               >
                                SIGN UP
                                <MDBIcon icon="sign-in-alt" className="ml-1" />
                              </MDBBtn>

                              {/* Shortcut links to LogIn tab if user already has an account set up */}
                              <MDBRow
                                className="w-100 justify-content-start pt-4"
                                style={{borderTop: '1px solid #e9ecef'}}
                               >
                                <div id="options">
                                  <p className="font-weight-bold indigo-text">
                                    Already have an account?
                                    <span
                                      className="indigo-text ml-1"
                                      onClick={this.toggleTab ('1')}
                                     >
                                      Log in
                                    </span>
                                  </p>
                                </div>

                                {/* Close Modal Button */}
                                <MDBBtn
                                  outline
                                  color="indigo"
                                  onClick={this.toggle (1)}
                                 >
                                  CLOSE
                                </MDBBtn>

                              </MDBRow>
                            </MDBModalFooter>
                          </MDBTabPane>
                        </MDBTabContent>
                      </MDBModal>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
                <Routes />
            <MDBFooter color='indigo'>
              <p className='footer-copyright mb-0 py-3 text-center'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://github.com/novakjason'> Jason Novak </a>
              </p>
            </MDBFooter>
          </div>
      </Router>
    );
  }
}

export default App;
