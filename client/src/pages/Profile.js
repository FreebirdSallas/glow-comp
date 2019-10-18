import React, { Component } from 'react';
import {MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer} from 'mdbreact';
import API from '../utils/API';

class Profile extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount(){

    }
}

export default Profile;