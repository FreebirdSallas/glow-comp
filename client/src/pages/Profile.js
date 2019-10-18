import React, {Component} from 'react';
// import {MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer} from 'mdbreact';
// import API from '../utils/API';

class Profile extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      loggedIn: false,
      email: '',
    };
  }

  componentDidMount () {
    // API call to see if a user id is saved in the express session
  }
  render () {
    return (
      <div>
        <h1>h</h1>
      </div>
    );
  }
}

export default Profile;
