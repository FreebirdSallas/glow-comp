import React, {Component} from 'react';
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
} from 'mdbreact';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import API from './utils/API';

class App extends React.Component {
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

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState ({
      [name]: value,
    });
    console.log (this.state.email); // this can be removed later
    console.log (this.state.password);
  };

  handleSubmit = event => {
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
        }
      })
      .catch (err => {
        console.log ('ERROR');
        console.log (err);
      });
  };
  handleTogglerClick = () => {
    this.setState ({
      collapsed: !this.state.collapsed,
    });
  };

  toggle = nr => () => {
    console.log ('button clicked!');
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
      <div>
        <Router>
          <div>
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
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/" className="indigo-text">
                        Home
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!" className="indigo-text">
                        Link
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!" className="indigo-text">
                        Profile
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBBtn rounded onClick={this.toggle (1)}>
                        Login/Register
                      </MDBBtn>
                      <MDBModal
                        className="form-cascading"
                        isOpen={this.state.modal1}
                        toggle={this.toggle (1)}
                      >
                        <MDBNav
                          tabs
                          className="md-tabs nav-justified tabs-2 light-blue darken-3"
                          style={{margin: '-1.5rem 1rem 0 1rem'}}
                        >
                          <MDBNavItem>
                            <MDBNavLink
                              className={
                                this.state.activeItem === 1 ? 'active' : ''
                              }
                              to="#"
                              onClick={this.toggleTab ('1')}
                            >
                              <MDBIcon icon="user" className="mr-1" />
                              Login
                            </MDBNavLink>
                          </MDBNavItem>
                          <MDBNavItem>
                            <MDBNavLink
                              className={
                                this.state.activeItem === 2 ? 'active' : ''
                              }
                              to="#"
                              onClick={this.toggleTab ('2')}
                            >
                              <MDBIcon icon="user-plus" className="mr-1" />
                              Register
                            </MDBNavLink>
                          </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.activeItem}>
                          <MDBTabPane tabId="1">
                            <MDBModalBody className="mx-3">
                              <form className=" mx-3 grey-text">
                                <MDBInput
                                  name="email"
                                  label="Your email"
                                  icon="envelope"
                                  group
                                  type="email"
                                  validate
                                  error="wrong"
                                  success="right"
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                />
                                <MDBInput
                                  name="password"
                                  label="Your password"
                                  icon="lock"
                                  group
                                  type="password"
                                  value={this.state.password}
                                  onChange={this.handleChange}
                                  validate
                                />
                              </form>
                            </MDBModalBody>
                            <MDBModalFooter className="justify-content-center mx-3">
                              <MDBBtn
                                className="mb-4"
                                color="info"
                                onClick={this.handleSubmit}
                              >
                                LOG IN
                                {' '}
                                <MDBIcon icon="sign-in-alt" className="ml-1" />
                              </MDBBtn>
                              <MDBRow
                                className="w-100 justify-content-start pt-4"
                                style={{borderTop: '1px solid #e9ecef'}}
                              >
                                <div id="options">
                                  <p className="font-small grey-text">
                                    New?
                                    <span
                                      className="blue-text ml-1"
                                      onClick={this.toggleTab ('2')}
                                    >
                                      Sign Up
                                    </span>
                                  </p>
                                  <p className="font-small grey-text">
                                    <span className="blue-text ml-1">
                                      Forgot password?
                                    </span>
                                  </p>
                                </div>
                                <MDBBtn
                                  outline
                                  color="info"
                                  onClick={this.toggle (1)}
                                >
                                  CLOSE
                                </MDBBtn>
                              </MDBRow>
                            </MDBModalFooter>
                          </MDBTabPane>
                          <MDBTabPane tabId="2">
                            <MDBModalBody className="mx-3">
                              <form className="mx-3 grey-text">
                                <MDBInput
                                  label="Your email"
                                  icon="envelope"
                                  group
                                  type="email"
                                  name="email"
                                  validate
                                  error="wrong"
                                  success="right"
                                  onChange={this.handleChange}
                                />
                                <MDBInput
                                  label="Your password"
                                  icon="lock"
                                  group
                                  type="password"
                                  name="password"
                                  onChange={this.handleChange}
                                  validate
                                />
                                <MDBInput
                                  label="Repeat password"
                                  icon="lock"
                                  group
                                  type="password"
                                  validate
                                />
                              </form>
                            </MDBModalBody>
                            <MDBModalFooter className="justify-content-center mx-3">
                              <MDBBtn
                                className="mb-4"
                                color="info"
                                onClick={this.toggle (3)}
                              >
                                SIGN UP
                                <MDBIcon icon="sign-in-alt" className="ml-1" />
                              </MDBBtn>
                              <MDBRow
                                className="w-100 justify-content-start pt-4"
                                style={{borderTop: '1px solid #e9ecef'}}
                              >
                                <div id="options">
                                  <p className="font-small grey-text">
                                    Already have an account?
                                    <span
                                      className="blue-text ml-1"
                                      onClick={this.toggleTab ('1')}
                                    >
                                      Log in
                                    </span>
                                  </p>
                                </div>
                                <MDBBtn
                                  outline
                                  color="info"
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
          </div>

          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/profile" component={Profile} />

          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
