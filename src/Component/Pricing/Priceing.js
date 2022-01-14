import React from 'react';
import { Card, Col, Container, Row  } from 'react-bootstrap';
import './Pricing.css'
import pattern from '../Images/pattern01.png'

const Priceing = () => {
    return (
        <div>
            <div className="pricing-container" style={{background: `url(${pattern}), linear-gradient(RGB(87, 98, 98), 
        RGB(87, 98, 98))`}}>
                <Container>
                <div className="pricing-content">
                    <h3>Plan & Priceing</h3>
                    <h5>IF YOU PURCHASE THIS TEMPLATE YOU WILL GET HAPPY & HURRY UP</h5>
                </div>
                <div className="pricing-card">
                <Row xs={1} md={3} className="g-4">
                <Col>
                    <div className="pricing-details">
                        <h2>START UP</h2>
                        <div className="pricing-green">
                            <h3>$57</h3>
                            <p>$57for 5 listed for 30 days</p>
                        </div>
                        <div className="pricing-white">
                        <h5>One Time Fee</h5>
                        <h5>Allows 1 Job Posting</h5>
                        <h5>Non-Highlighted Post</h5>
                        </div>
                    </div> 
                    <button className='pricing-button'>CHOOHE PLAN</button>     
                </Col>
                <Col>
                    <div className="plan-details">
                        <h2>START UP</h2>
                        <div className="plan-red">
                            <h3>$57</h3>
                            <p>$57for 5 listed for 30 days</p>
                        </div>
                        <div className="plan-white">
                        <h5>One Time Fee</h5>
                        <h5>Allows 1 Job Posting</h5>
                        <h5>Non-Highlighted Post</h5>
                        <h5>Non-Highlighted Post</h5>
                        </div>
                    </div>
                    <button className='plan-button'>CHOOHE PLAN</button>        
                </Col>
                <Col>
                    <div className="pricing-details">
                        <h2>START UP</h2>
                        <div className="pricing-green">
                            <h3>$57</h3>
                            <p>$57for 5 listed for 30 days</p>
                        </div>
                        <div className="pricing-white">
                        <h5>One Time Fee</h5>
                        <h5>Allows 1 Job Posting</h5>
                        <h5>Non-Highlighted Post</h5>
                        </div>
                    </div> 
                    <button className='pricing-button'>CHOOHE PLAN</button>       
                </Col>
                </Row>
                </div>
                </Container>

            </div>
        </div>
    );
};

export default Priceing;