import React, { Component } from "react";
import {
    MDBBtn,
    MDBView,
    MDBMask,
    MDBContainer
} from "mdbreact";
// import API from '../utils/API';

class ProfilePage extends Component {
    constructor (props) {
        super (props);
        this.state = {
            loggedIn: false,
            email: '',
            collapsed: false
        };
    }

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    componentDidMount() {
        document.querySelector("nav").style.height = "65px";
        // API call to see if a user id is saved in the express session
    }
    componentWillUnmount() {
        document.querySelector("nav").style.height = "auto";
    }

    render() {
        return (

            <div>
                <MDBView
                    src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
                    fixed
                >
                    <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
                        <MDBContainer>
                            <MDBBtn>
                                Profile Page!
                            </MDBBtn>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default ProfilePage;
