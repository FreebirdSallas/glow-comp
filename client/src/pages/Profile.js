import React, {Component} from 'react';
import {MDBIcon, MDBView, MDBMask, MDBContainer} from 'mdbreact';
import EventTable from '../comps/EventTable';
import DateTimePicker from 'react-datetime-picker';
import DateTimePick from '../comps/DateTImePick';
import API from '../utils/API';

const Row = props => (
  <tr>
    <td>{props.r.text}</td>
    <td>{props.r.start_date}</td>
    <td>{props.r.end_date}</td>
  </tr>
);

class ProfilePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      rows: [],
      email: '',
      date: new Date (),
    };
  }
  onChange = date => {
    this.setState ({date});
    console.log (this.state);
  };

  handleSubmit = event => {
    event.preventDefault ();
    if (this.state.date !== new Date ()) {
      let obj = {
        customer: this.state.id,
        start_date: this.state.date,
        end_date: this.state.date,
        text: 'A new event',
      };
      API.createEvent (obj)
        .then (response => {
          console.log (response);
        })
        .catch (err => console.log (err));
    }
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
                id: response.data._id,
              });
            })
            .catch (err => console.log (err));
        }
      })
      .catch (err => console.log (err));
  }

  rowList () {
    return this.state.rows.map ((cur, i) => <Row r={cur} key={i} />);
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

              {this.state.rows.length > 0
                ? <EventTable func={this.rowList ()} />
                : <div>
                    <h5>No past or future appointments found</h5>
                  </div>}

              <DateTimePick click={this.handleSubmit}>
                <DateTimePicker
                  onChange={this.onChange}
                  value={this.state.date}
                />

              </DateTimePick>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ProfilePage;
