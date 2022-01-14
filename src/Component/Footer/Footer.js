import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
// import { AiFillFacebook } from 'react-icons/ai';
// import { AiFillInstagram } from 'react-icons/ai';
// import { AiFillTwitterCircle } from 'react-icons/ai';
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <Container>
                <Row>
                    <Col md={2}>
                    <div className="footer-icons">
                        
                    </div>
                    </Col>
                    <Col md={10}>
                    <div className="footer-items">
                    <div className="footer-info">
                        <h2>JobHunt is currently free!</h2>
                        <h5>ALL JOB LISTINGS WILL BE FREE OF CHARGE UNTIL FURTHER NOTICE.</h5>
                        <div className="footer-input">
                        <input placeholder="Subscribe to get latest news....">
                        
                        </input>
                        </div>
                    </div>
                    <div className="footer-font">
                    <h6>Job</h6>
                    <h6>Post a Job</h6>
                    <h6>Policy</h6>
                    
                    </div>
                    <p>© 2015 JobHunt. All Rights Reserved</p>
                </div></Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;