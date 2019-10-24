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

class RegisterPage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      passConfirm: '',
      newAccount: false,
    };
  }

  componentDidMount () {
    console.log (this.state);
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {newAccount: true},
          }}
        />
      );
    }
  };

  // works, handles change, don't mess with it
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState ({
      [name]: value,
    });
    console.log (this.state);
  };

  handleRegister = event => {
    event.preventDefault ();
    event.target.className += ' was-validated';
    API.saveUser ({
      email: this.state.email,
      password: this.state.password,
    })
      .then (response => {
        console.log (response);
        if (response.status === 200) {
          this.setState ({
            redirect: true,
            newAccount: true,
          });
        }
      })
      .catch (err => {
        console.log ('ERROR');
        console.log (err);
      });
  };

  render () {
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
                        <h3
                          className="white-text ml-4 pt-3"
                          style={{fontWeight: 900, transform: 'scale(1.1)'}}
                        >
                          Sign Up!
                        </h3>
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
                      <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                        value={this.state.pasConfirm}
                        name="passwordConfirm"
                        containerClass="mb-0"
                      />
                      <MDBRow className="d-flex align-items-center mb-4 mt-5">
                        <MDBCol md="5" className="d-flex align-items-start">
                          <div className="text-center">
                            <MDBBtn
                              color="grey"
                              rounded
                              type="button"
                              className="z-depth-1a"
                              onClick={this.handleRegister}
                            >
                              Register
                            </MDBBtn>
                          </div>
                        </MDBCol>
                        <MDBCol md="7" className="d-flex justify-content-end">
                          <p className="font-small grey-text mt-3">
                            Already have an account? Sign in
                            <a
                              href="/login"
                              className="dark-grey-text ml-1 font-weight-bold"
                            >
                              Take me there
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

export default RegisterPage;
