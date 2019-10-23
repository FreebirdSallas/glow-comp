import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from 'mdbreact';
import '../assets/css/LogInRegModal.css';
import {Redirect, NavLink} from 'react-router-dom';
import NavButton from '../comps/NavButton';
import API from '../utils/API';

class Navigation extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      collapseID: '',
      activeItem: '1',

      redirect: false,
      loggedIn: props.loggedIn,
      isCorrect: true,
    };
  }

  handleLogOut = () => {
    API.logUserOut ().then (response => {
      this.setState ({
        redirect: true,
      });
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
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
    console.log (this.state);
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
              <NavButton
                func={this.handleLogOut}
                loggedIn={this.state.loggedIn}
              />

            </MDBNavbarNav>
          </MDBCollapse>
          {this.renderRedirect ()}
        </MDBNavbar>

        {
          this.state
            .collapsed /*&& overlay --no changes when removing this code*/
        }
      </div>
    );
  }
}
export default Navigation;
