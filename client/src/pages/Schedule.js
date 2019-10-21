import React, {Component} from 'react';
import {MDBBtn, MDBView, MDBMask, MDBContainer} from 'mdbreact';
import API from '../utils/API';
import Weekcal from '../comps/Weekcal';
import DateTimePicker from 'react-datetime-picker';
import Calendar from 'react-calendar';

class SchedulePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      date: new Date (),
    };
  }
  componentDidMount () {
    const script = document.createElement ('script');
    script.innerHTML = `scheduler.config.xml_date = '%Y-%m-%d %H:%i';
    scheduler.init ('scheduler_here', new Date (2018, 0, 20), 'month');`;
    this.instance.appendChild (script);
  }
  onChange = date => this.setState ({date});

  render () {
    const style = {
      backgroundColor: 'white',
      height: '75vh',
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

              {/* <p>Pick a day and time</p>
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                isCalendarOpen
                view="decade"
              />
              <MDBBtn>
                Schedule!
              </MDBBtn> */}
              <Weekcal />
              <div ref={el => (this.instance = el)} />
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default SchedulePage;
