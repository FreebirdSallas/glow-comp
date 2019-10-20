import React, { Component } from "react";
import {
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBAnimation,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from "mdbreact";
import image from "../assets/img/savs-0KHC0_X4GeU-unsplash.jpg";
import imageTwo from "../assets/img/essential-oils-1433692_1920.jpg";
import "../assets/css/service.css";
class ServicesPage extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
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
              <MDBRow>
                <MDBCol md='4'>
                  <MDBAnimation reveal type="fadeInLeft">
                    <MDBCard>
                      <MDBCardImage className="massage-img img-fluid" src={image} waves />
                      <MDBCardBody>
                        <MDBCardTitle>Deep Tissue</MDBCardTitle>
                        <MDBCardText>
                        Deep tissue massage is a type of massage therapy that
                        focuses on relaxing deeper layers of muscles and connective tissue.
                        It is especially helpful for chronic aches and pains and 
                        contracted areas such as stiff neck and upper back, low back pain,
                        leg muscle tightness, and sore shoulders.
                        </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBAnimation reveal type="fadeInDown">
                    <MDBCard>
                      <MDBCardImage className="massage-img img-fluid" src={imageTwo} waves />
                      <MDBCardBody>
                        <MDBCardTitle>Shiatsu</MDBCardTitle>
                        <MDBCardText>
                        Shiatsu massage is best for people who want to feel relaxed
                        and relieve stress, pain, and tension. It's a Japanese type 
                        of massage that: promotes emotional and physical calm and relaxation.
                        </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBAnimation reveal type="fadeInRight">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                      <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                          Some quick example text to build on the card title and make
                          up the bulk of the card&apos;s content.
                        </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              <MDBRow>
              <MDBCol md="12" className="text-center">
                <MDBBtn>
                  Schedule Now!
                </MDBBtn>
              </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ServicesPage;