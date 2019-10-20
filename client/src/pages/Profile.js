import React, {Component} from 'react';
import {MDBBtn, MDBView, MDBMask, MDBContainer} from 'mdbreact';
import EventTable from '../comps/EventTable';

class ProfilePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
     
    };
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
