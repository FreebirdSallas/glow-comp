import React, {Component} from 'react';
import {
  MDBIcon,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';
import EventTable from '../comps/EventTable';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import API from '../utils/API';

class ProfilePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      email: '',
      date: new Date (),
      time: '10:00',
    };
  }
  onDateChange = date => this.setState ({date});
  onTimeChange = time => this.setState ({time});
  handleSubmit = event => {
    event.preventDefault ();
    // submit code
  };

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
    const style = {
      transform: 'scale(2)',
    };
    return (
      <div>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className="rgba-white-light d-flex flex-column justify-content-center align-items-center">
            <MDBContainer className="bg-light p-4">

              {this.state.email
                ? <div className="d-flex justify-content-start align-items-center">
                    <MDBIcon
                      icon="user"
                      className="float-left mr-4"
                      style={style}
                    />
                    <h2 className="display-4 inline-block">
                      {this.state.email}
                    </h2>
                  </div>
                : 'No profile found'}

              <EventTable rows={this.state.rows} />

            </MDBContainer>
            <MDBContainer className="bg-light mt-2 p-4">
              <div>
                <h2>Ready to schedule your next appt?</h2>
                <div className="d-flex justify-content-around align-items-center">

                  <MDBCard style={{width: '22rem', marginTop: '1rem'}}>
                    <MDBCardBody>
                      <MDBCardTitle>Pick Day</MDBCardTitle>
                      <MDBCardText>
                        <DatePicker
                          onChange={this.onDateChange}
                          value={this.state.date}
                        />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  <MDBCard style={{width: '22rem', marginTop: '1rem'}}>
                    <MDBCardBody>
                      <MDBCardTitle>Pick Time</MDBCardTitle>
                      <MDBCardText>
                        <TimePicker
                          onChange={this.onTimeChange}
                          value={this.state.time}
                        />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>

                </div>

              </div>

            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ProfilePage;
