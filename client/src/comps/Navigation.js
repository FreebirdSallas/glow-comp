import React from 'react';
import {
  MDBNav,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBInput,
  MDBIcon,
  MDBTabContent,
  MDBTabPane,
} from 'mdbreact';
import '../assets/css/LogInRegModal.css';
import {Redirect} from 'react-router-dom';

import API from '../utils/API';

// Form input text color
const formInput = {
  color: '#3f51b5',
};

class Navigation extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      collapseID: '',
      modal1: false,
      activeItem: '1',
      email: '',
      password: '',
      redirect: '0',
      loggedIn: props.loggedIn,
      isCorrect: true,
    };
    this.toggle = this.toggle.bind(this);
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

  // handles keeping track of text the user types in the input boxes
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState ({
      [name]: value,
    });
  };

  // handles registering a new user
  handleRegister = event => {
    event.preventDefault ();
    API.saveUser ({
      email: this.state.email,
      password: this.state.password,
    })
      .then (response => {
        console.log (response);
        if (response.status === 200) {
          this.setState ({});
        }
      })
      .catch (err => {
        console.log ('ERROR');
        console.log (err);
      });
  };

  handleLogin = event => {
    event.preventDefault ();
    console.log ('Logging in user....');
    API.loginUser ({
      email: this.state.email,
      password: this.state.password,
    })
      .then (response => {
        if (response.status === 200) {
          this.setState ({
            loggedIn: true,
            redirect: '1',
          });
        } else if (response.status === 401) {
          console.log ('incorrect password');
          this.setState ({
            isCorrect: false,
          });
        }
      })
      .catch (err => console.log (`error: ${err}`));
  };

  handleLogOut = () => {
    API.logUserOut ().then (response => {
     
      this.setState ({
        loggedIn: false,
        redirect: '2'
      });
    });
  };

  
  renderRedirect = () => {
    if (this.state.redirect === '1') {
      return <Redirect to="/profile" />;
    } else if(this.state.redirect === '2'){
      
      return <Redirect to="/" />
    }
  };

  toggleCollapse = collapseID => () =>
    this.setState (prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo (0, 0);
    this.state.collapseID === collapseID && this.setState ({collapseID: ''});
  };

  componentDidMount () {
    document.querySelector ('nav').style.height = '65px';
  }
  componentWillUnmount () {
    document.querySelector ('nav').style.height = 'auto';
  }

  render () {
    return (
      <div>
        {/* Navbar with brand and links */}
        <MDBNavbar
          color="indigo lighten-4"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >

          {/* Navigation Links */}
          <MDBNavbarBrand
            href="/"
            className="py-0 indigo-text font-weight-bold"
            onClick={this.closeCollapse ('mainNavbarCollapse')}
          >
            <strong className="align-middle">Infinite Wellness</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse ('mainNavbarCollapse')}
            className
          />
          <MDBCollapse
            id="mainNavbarCollapse"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBBtn
                  href="/schedule"
                  className="white-text btn-indigo"
                  size="md"
                  onClick={this.closeCollapse ('mainNavbarCollapse')}
                >
                  Schedule
                </MDBBtn>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn
                  href="/services"
                  className="white-text btn-indigo"
                  size="md"
                  onClick={this.closeCollapse ('mainNavbarCollapse')}
                >
                  Services
                </MDBBtn>
              </MDBNavItem>

              {/* Profile link only displayed if user is logged in */}
              <MDBNavItem>
                {!this.props.loggedIn
                  ? <div />
                  : <MDBBtn
                      href="/profile"
                      className="white-text btn-indigo"
                      size="md"
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                    >
                      Profile
                    </MDBBtn>}
              </MDBNavItem>
            </MDBNavbarNav>

            {/* LogIn/Register Navbar link displayed if user is logged out....Log Out displayed if user is logged in*/}
            <MDBNavbarNav right>
              <MDBNavItem>
                {!this.props.loggedIn
                  ? <MDBBtn
                      rounded
                      className="btn-indigo"
                      onClick={this.toggle (1)}
                      size="md"
                    >
                      Login/Register
                    </MDBBtn>
                  : <MDBBtn
                      rounded
                      className="btn-indigo"
                      onClick={this.handleLogOut}
                      size="md"
                    >
                      Log Out
                    </MDBBtn>}

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
                    style={{margin: '-0.5rem 1rem 0 1rem'}}
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
                        <form className="mx-3 grey-text" noValidate>
                          <MDBInput
                            style={formInput}
                            name="email"
                            label="Your email"
                            background
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
                            background
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
                          onClick={this.handleLogin}
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
                          <MDBBtn color="indigo" onClick={this.toggle (1)}>
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
                            background
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
                            background
                            group
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                          <MDBInput
                            style={formInput}
                            label="Repeat password"
                            background
                            group
                            type="password"
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
                          <MDBBtn color="indigo" onClick={this.toggle (1)}>
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

        </MDBNavbar>
        {this.renderRedirect ()}
        {
          this.state
            .collapsed /*&& overlay --no changes when removing this code*/
        }
      </div>
    );
  }
}
export default Navigation;
