import React, {Component} from 'react';
import {MDBBtn, MDBView, MDBMask, MDBContainer} from 'mdbreact';
import EventTable from '../comps/EventTable';
import API from '../utils/API';

class ProfilePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      email: '',
    };
  }

  componentDidMount () {
    API.isLoggedIn ()
      .then (response => {
        if (response.status !== 422) {
          return API.getUserEvent (response.data.user._id)
            .then (response => {
              this.setState ({
                rows: response.data.events,
                email: response.data.email,
              });
              console.log (this.state.rows);
            })
            .catch (err => console.log (err));
        }
      })
      .catch (err => console.log (err));
  }

  render () {
      
    return (
      <div>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer className="bg-light">

              {this.state.email
                ? <h2 className="display-4">{this.state.email}</h2>
                : 'No profile found'}

              <EventTable rows={this.state.rows} />

            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ProfilePage;
