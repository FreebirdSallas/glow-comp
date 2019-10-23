import React from 'react';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
} from 'mdbreact';

export default function DateTimePick(props) {
    return(


    <MDBContainer className="bg-light mt-2 p-4">
        <div>
            <h2>Ready to schedule your next appt?</h2>
            <div className="d-flex justify-content-around align-items-center">
                <MDBCard style={{ width: '40rem', marginTop: '1rem' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Pick a date and time</MDBCardTitle>
                        <DatePicker
                            onChange={props.onDate}
                            value={props.date}
                        />
                        <TimePicker
                            onChange={props.onTime}
                            value={props.time}
                        />
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    </MDBContainer>
    )
}