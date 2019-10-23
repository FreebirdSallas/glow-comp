import React, { Component } from 'react';
import {
    MDBIcon,
    MDBView,
    MDBMask,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdbreact';

import API from '../utils/API';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        };
    }

    componentDidMount() {
        console.log(this.state)
    };

    // works, handles change, don't change
    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    };

    handleLogin = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        API.loginUser({
            email: this.state.email,
            password: this.state.password,
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        loggedIn: true,
                        redirect: '1',
                    });
                } else if (response.status === 401) {
                    console.log('incorrect password');
                    this.setState({
                        isCorrect: false,
                    });
                }
            })
            .catch(err => console.log(`error: ${err}`));
    };

    handleRegister = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        API.saveUser({
            email: this.state.email,
            password: this.state.password,
        })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.setState({});
                }
            })
            .catch(err => {
                console.log('ERROR');
                console.log(err);
            });
    };

    render() {

        return (
            <div>


                <MDBView
                    src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
                    fixed
                >
                    <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            <form className="needs-validation bg-dark p-4"
                                onSubmit={this.handleLogin}
                                noValidate>
                                <MDBRow>
                                    <MDBCol md="12" className="text-center">
                                        <label
                                            htmlFor="defaultFormRegisterNameEx"
                                            className="grey-text"
                                        >
                                            Email
                                        </label>
                                        <input
                                            value={this.state.fname}
                                            name="fname"
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterNameEx"
                                            className="form-control"
                                            placeholder="Email"
                                            required
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                    </MDBCol>
                                    <MDBCol md="12" className="text-center">
                                        <label
                                            htmlFor="defaultFormRegisterEmailEx2"
                                            className="grey-text"
                                        >
                                            Password
                                         </label>
                                        <input
                                            value={this.state.lname}
                                            name="lname"
                                            onChange={this.changeHandler}
                                            type="text"
                                            id="defaultFormRegisterEmailEx2"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                    </MDBCol>
                                    <div className="d-flex justify-content-center" style={{width: '100%'}}>

                                        <MDBBtn color="primary" type="submit">
                                            Submit Form
                                         </MDBBtn>
                                    </div>

                                </MDBRow>
                            </form>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        )
    }
}

export default LoginPage;