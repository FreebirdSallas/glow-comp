import React, { Component } from "react";
import {
    MDBBtn,
    MDBView,
    MDBMask,
    MDBContainer,
    MDBDataTable
} from "mdbreact";
import API from '../utils/API';

class ProfilePage extends Component {
    constructor (props) {
        super (props);
        this.state = {
            loggedIn: false,
            email: '',
            collapsed: false,
            userEvents: []
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
        API.isLoggedIn().then(response => {
            console.log(response);
           
            if(response.data.user){
                API.getUser(response.data.user._id).then(response => {
                    console.log(response.data._doc)
                    // this.setState({
                    //     userEvents: response.data._doc
                    // })
                })
            }
        })
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
                    <MDBMask className="rgba-white-light">
                        <MDBContainer className="bg-light">
                            <MDBBtn>
                                Profile Page!
                            </MDBBtn>
                            <MDBDataTable 
                                striped
                                bordered
                                hover
                                />
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default ProfilePage;
