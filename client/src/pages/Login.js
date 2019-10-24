import React from 'react';
import {
  MDBIcon,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
  MDBCardBody,
} from 'mdbreact';
import {Redirect} from 'react-router-dom';
import API from '../utils/API';

class LoginPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  componentDidMount () {
    console.log (this.state);
    console.log (this.props.location.state);
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
  };

  // works, handles change, don't change
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState ({
      [name]: value,
    });
    console.log (this.state);
  };

  handleLogin = event => {
    event.preventDefault ();
    event.target.className += ' was-validated';
    API.loginUser ({
      email: this.state.email,
      password: this.state.password,
    })
      .then (response => {
        if (response.status === 200) {
          this.setState ({
            loggedIn: true,
            redirect: true,
          });
          window.location.reload ();
        } else if (response.status === 401) {
          this.setState ({
            isCorrect: false,
          });
        }
      })
      .catch (err => console.log (`error: ${err}`));
  };

  render () {
    // dispays log in for regular users, but if they get redirected from the register page
    // displays a welcome message
    const newUser = () =>
      this.props.location.state
        ? <h3
            className="white-text ml-4 pt-3"
            style={{fontWeight: 900, transform: 'scale(1.1)'}}
          >
            Welcome New User!
            {' '}
            <span
              className="text-muted"
              style={{fontWeight: 400, fontSize: 12}}
            >
              login with your new credentials
            </span>
          </h3>
        : <h3
            className="white-text ml-4 pt-3"
            style={{fontWeight: 900, transform: 'scale(1.1)'}}
          >
            Log in
          </h3>;
    return (
      <div>

        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className="rgba-white-light d-flex align-items-center">
            <MDBContainer className="d-flex justify-content-center">

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard style={{width: '59vw'}}>
                    <div className="header pt-3 mean-fruit-gradient">
                      <MDBRow className="d-flex flex-row-reverse justify-content-center align-items-center">

                        {newUser ()}
                        <MDBIcon
                          className="white-text fa-lg p-2 m-2"
                          icon="user"
                          style={{transform: 'scale(2)'}}
                        />
                      </MDBRow>
                      <MDBRow className="mt-2 mb-3 d-flex justify-content-center" />
                    </div>
                    <MDBCardBody className="mx-4 mt-4">
                      <MDBInput
                        label="Your email"
                        group
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                        name="password"
                        containerClass="mb-0"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <MDBRow className="d-flex align-items-center mb-4 mt-5">
                        <MDBCol md="5" className="d-flex align-items-start">
                          <div className="text-center">
                            <MDBBtn
                              color="grey"
                              rounded
                              type="button"
                              className="z-depth-1a"
                              onClick={this.handleLogin}
                            >
                              Log in
                            </MDBBtn>
                          </div>
                        </MDBCol>
                        <MDBCol md="7" className="d-flex justify-content-end">
                          <p className="font-small grey-text mt-3">
                            Don't have an account?
                            <a
                              href="/register"
                              className="dark-grey-text ml-1 font-weight-bold"
                            >
                              Sign up
                            </a>
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>

            </MDBContainer>
            {this.renderRedirect ()}
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default LoginPage;
