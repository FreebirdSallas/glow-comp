import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBIcon
} from "mdbreact";

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="text-center">
                  <h1 className="display-3 mb-0 pt-md-5 pt-5 indigo-text font-weight-bold">
                    <MDBIcon icon="exclamation-triangle" />
                    {' '}404 Page Not Found
                  </h1>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default NotFoundPage;
