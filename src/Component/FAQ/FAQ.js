import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FAQ.css'

const FAQ = () => {
    return (
        <div>
            <div className="faq-container">
                <Container>
                    <Row>
                    <Col  xs={1} md={3}>
                        <div className="faq-fi">
                            <h3>Got A Question</h3>
                        </div>
                    </Col>
                    <Col  xs={1} md={6}>
                        <div className="faq-fi faq">
                            <h5>SEND US AN EMAIL OR CALL US AT 1 800 555 5555</h5>
                        </div>
                    </Col>
                    <Col  xs={1} md={3}>
                        <div className="faq-fi">
                            <button>CONTACT NOW</button>
                        </div>
                    </Col>
                    </Row>
                </Container>
                
            </div>
        </div>
    );
};

export default FAQ;