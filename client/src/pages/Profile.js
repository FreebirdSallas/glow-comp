import React, {Component} from 'react';
import {MDBBtn, MDBView, MDBMask, MDBContainer} from 'mdbreact';
import EventTable from '../comps/EventTable';
import API from '../utils/API';

class ProfilePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      isLoggedIn: false,
    };
  }

  componentDidMount () {
    API.isLoggedIn ().then (response => {
      console.log (response);

      if (response.data.user) {
        API.getUser (response.data.user._id).then (response => {
          console.log (response.data._doc);
          this.setState ({
            rows: response.data._doc.events,
          });
        });
      } else {
        //something that removes table and tells them to log in
      }
    });
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
              <MDBBtn>
                Profile Page!
              </MDBBtn>
              <EventTable rows={this.state.rows} />

            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ProfilePage;
