import React from 'react';

import {MDBContainer, MDBCard, MDBCardBody, MDBCardTitle} from 'mdbreact';
import DateTimePicker from 'react-datetime-picker';

export default function DateTimePick (props) {
  return (
    <MDBContainer className="d-flex justify-content-center bg-light mt-2 p-4">
      <div>
        <h2>Ready to schedule your next appt?</h2>
        <MDBCard style={{width: '40rem', marginTop: '1rem'}}>
          <MDBCardBody>
            <MDBCardTitle>Click to pick a date and time</MDBCardTitle>
            <div className="d-flex justify-content-around align-items-center">
              <DateTimePicker onChange={props.func} value={props.val} />
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
}
