import React from 'react';
import {  Container, Row, Col  } from 'react-bootstrap';
import {BsFacebook,BsInstagram,BsTwitter,BsGoogle,BsLinkedin,BsGithub,BsFillHouseDoorFill,BsFillEnvelopeFill,BsFillTelephoneFill} from "react-icons/bs"
import "../App.css"

function Footeer() {
  return (
    <div className='mainfooter' >  
      <div bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a rel="noreferrer" href='' className='me-4 text-reset footericons'>
          <BsFacebook/>
          </a>
          <a rel="noreferrer" href='' className='me-4 text-reset footericons'>
           <BsGithub/>
          </a>
          <a rel="noreferrer" href='' className='me-4 text-reset footericons'>
           <BsGoogle/>
          </a>
          <a rel="noreferrer" href='' className='me-4 text-reset footericons'>
            <BsInstagram/>
          </a>
          <a rel="noreferrer" href='' className='me-4 text-reset footericons'>
            <BsTwitter/>
          </a>
          <a rel="noreferrer" href='' className='me-4 text-reset footericons'>
            <BsLinkedin/>
          </a>
        </div>
      </section>
      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Neet Predictor
              </h6>
              <p>
               Where you can find the accurate results about your college predicton based on neet scores, Which may help you to decide yourself.
              </p>
            </Col>
            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a rel="noreferrer" href='https://en.wikipedia.org/wiki/List_of_institutions_of_higher_education_in_Andhra_Pradesh' className='text-reset' target="_blank">
                  List of Colleges
                </a>
              </p>
              <p>
                <a rel="noreferrer" href='https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Undergraduate)' className='text-reset' target="_blank">
                  Exam Cutoff
                </a>
              </p>
            </Col>
            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p className='contact'><BsFillHouseDoorFill/><span>Aditya Engineering College,  Surampalem,  533437.</span></p>
              <p className='contact'><BsFillEnvelopeFill/> <span>neetpredict@gmail.com</span></p>
              <p className='contact'> <BsFillTelephoneFill/><span>+ 91 99125 99145</span></p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' rel="noreferrer" href='https://bootstrap.com/'>
          bootstrap.com
        </a>
      </div> */}
    </div>
    </div>
  )
}

export default Footeer



