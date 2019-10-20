import React, {Component} from 'react';
import {MDBBtn, MDBView, MDBMask, MDBContainer} from 'mdbreact';

class SchedulePage extends Component {
  render () {
    return (
      <div>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBBtn>
                Schedule Page!
              </MDBBtn>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default SchedulePage;
