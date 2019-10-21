import React, {Component} from 'react';
import {MDBBtn, MDBView, MDBMask, MDBContainer} from 'mdbreact';
import API from '../utils/API';
import EventTable from '../comps/EventTable';
import DateTimePicker from 'react-datetime-picker';

class SchedulePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      date: new Date (),
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
  
  onChange = date => this.setState ({date});
  
  render () {
    const style = {
      backgroundColor: 'white',
      height: '50vh',
      borderRadius: 5,
    };

    return (
      <div>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer style={style}>
              <p>Pick a day and time</p>
              <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
                isCalendarOpen
              />
              <MDBBtn>
                Schedule!
              </MDBBtn>
              <h4>Past and future appointments</h4>
              <EventTable rows={this.state.rows} />
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default SchedulePage;
