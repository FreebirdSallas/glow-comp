import React from 'react';
import {MDBNavItem, MDBBtn} from 'mdbreact';
import {NavLink} from 'react-router-dom';

export default function NavButton (props) {
  return (
    <MDBNavItem>
      {!props.loggedIn
        ? <NavLink exact to="/login">
            {' '}<MDBBtn className="btn-indigo" size="md">
              Login/Register
            </MDBBtn>
          </NavLink>
        : <MDBBtn className="btn-indigo" onClick={props.func} size="md">
            Log Out
          </MDBBtn>}

    </MDBNavItem>
  );
}
