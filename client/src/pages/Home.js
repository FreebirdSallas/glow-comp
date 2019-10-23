import React, { Component } from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRotatingCard,
  MDBAnimation,
  MDBSmoothScroll,
  MDBCardImage
} from 'mdbreact';
import jason from '../assets/img/jason.jpeg';
import yogacred from '../assets/img/Novak200.jpg'

class HomePage extends Component {
  state = {
    flipped1: false,
    flipped2: false
  };

  handleFlipping = id => () => {
    const cardId = `flipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
  };

  render() {

    return (
      <div>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/images/76.jpg`}
          fixed
        >
          <MDBMask className='rgba-white-light d-flex justify-content-center align-items-center'>
            <MDBContainer>
              <MDBRow>
                <MDBCol md='12' className='mb-4 white-text text-center'>
                  <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                    INFINITE{' '}
                    <span className='indigo-text font-weight-bold'>
                      WELLNESS
                    </span>
                  </h1>
                  <hr className='hr-light my-4' />
                  <h2 className='text-uppercase pt-md-5 pt-sm-2 pt-5 white-text font-weight-bold'>
                    Jason Novak
                  </h2>
                  <h3 className='text-uppercase pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                    LMT RYT-200
                  </h3>
                  <MDBSmoothScroll to='about' smooth>
                    <MDBBtn className='white btn-indigo' size='lg'>
                      About me
                    </MDBBtn>
                  </MDBSmoothScroll>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow id='about' className='pt-5 justify-content-center'>
              <MDBCol md='4' style={{ minHeight: '26rem', maxWidth: '22rem' }}>
                <MDBAnimation reveal type='fadeInUp'>

                  <MDBRotatingCard
                    flipped={this.state.flipped1}
                    className='text-center h-100 w-100'
                  >
                    <MDBCard cascade className='mt-3 grey lighten-4 face front' onClick={this.handleFlipping(1)}>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src={jason}
                        waves
                      />

                    </MDBCard>
                    <MDBCard className='face back' onClick={this.handleFlipping(1)}>
                      <MDBCardBody>
                        <p>Virginia Department of Health Professions</p>
                        <p>License Number: </p><a href='https://dhp.virginiainteractive.org/Lookup/Detail/0019014574' target='_blank' rel='noopener noreferrer'>0019014574</a>
                        <hr />
                        <MDBCardImage src={yogacred} className='img-fluid' />

                      </MDBCardBody>
                    </MDBCard>
                  </MDBRotatingCard>
                </MDBAnimation>
              </MDBCol>
              <MDBCol className='mt-3 mb-5' md='8'>
                <h3>Jason Novak LMT RYT-200</h3>
                <p>
                  Graduated from Lotus School of Integrated Professions in March of 2016
                  and completed his 200 Hour Teacher Training program with Yax Yoga Concepts in April of 2017.
                  Jason has a passion for body work, inspired by individuals like
                  <a href='https://rolf.org' target='_blank' rel='noopener noreferrer'> Dr. Ida Rolf</a>,
                  <a href='https://www.anatomytrains.com/about-us/about-tom-myers/' target='_blank' rel='noopener noreferrer'> Tom Meyers</a>, and
                  <a href='https://www.myofascialrelease.com/' target='_blank' rel='noopener noreferrer'> John F. Barnes</a>.
                </p>
                <p>Sensing your edge and knowing how to hold you there with great awareness,
                  moving with subtle shifts while allowing you to find balance and ease in your
                  breath along with looking at the body as a whole and not individual parts, using the
                  <a href='https://www.anatomytrains.com/fascia/tensegrity/' target='_blank' rel='noopener noreferrer'> "Tensegrity"</a> model,
                  he is able to find the source of pain and chronic issues, facilitating your body's own healing process.</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default HomePage;
