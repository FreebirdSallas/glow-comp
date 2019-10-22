import React, {Component} from 'react';
import {MDBView, MDBMask, MDBContainer} from 'mdbreact';
import API from '../utils/API';
import Weekcal from '../comps/Weekcal';

// import scriptCache from '../utils/scriptCache';

// const loadScript = callback => {
//   const existScript = document.getElementById ('scriptId');
//   if (!existScript) {
//     const script = document.createElement ('script');
//     script.src = '/src/assets/js/cal.js';
//     script.id = 'cal';
//     script.type = 'text/javascript';
//     document.body.appendChild (script);

//     script.onload = () => {
//       if (callback) callback ();
//     };
//   }
//   if (existScript && callback) {
//     callback ();
//   }
// };

class SchedulePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      date: new Date (),
      events: [],
    };
  }

  componentDidMount () {
    API.getEvents ().then (response => {
      this.setState ({
        events: response.data,
      });
      console.log (this.state.events);
      //   const arr = this.state.events;
      const script = document.createElement ('script');
      script.text = `scheduler.config.xml_date = '%Y-%m-%d %H:%i';
        scheduler.init ('scheduler_here', new Date (), 'month');
        scheduler.setLoadMode("day"); `;
      this.instance.appendChild (script);
    });
  }

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
