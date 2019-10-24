import React, {Component} from 'react';
import {MDBView, MDBMask, MDBContainer, MDBBtn} from 'mdbreact';
import API from '../utils/API';
import Weekcal from '../comps/Weekcal';
import {Link} from 'react-router-dom';

class SchedulePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      date: new Date (),
      events: [],
    };
  }

  //very fragile, plz be careful
  componentDidMount () {
    API.getEvents ().then (response => {
      this.setState ({
        events: response.data,
      });
      const evArray = this.state.events.filter (event => {
        if (event.start_date && event.end_date && event.text) {
          return event;
        }
      });

      console.log (evArray);
      const script = document.createElement ('script');
      script.innerHTML = `scheduler.config.xml_date = '%Y-%m-%d %H:%i';
      scheduler.init ('scheduler_here', new Date (), 'month');
      scheduler.setLoadMode("Week");scheduler.parse('${JSON.stringify (evArray)}');`;
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
          <MDBMask className="rgba-white-light d-flex flex-column justify-content-end align-items-center">
            <h2 className="display-4">Jason's current schedule</h2>
            <MDBContainer style={style}>

              <Weekcal />

              <div ref={el => (this.instance = el)} />
            </MDBContainer>
            <h4>Want to schedule an appointment? go to your profile</h4>
            <MDBBtn
              href="/profile"
              size="sm"
              style={{height: '2rem', marginTop: 10}}
            >
              Profile
            </MDBBtn>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default SchedulePage;
