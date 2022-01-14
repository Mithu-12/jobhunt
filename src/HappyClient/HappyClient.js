import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './HappyClient.css'

const HappyClient = () => {
    return (
        <div className="client-container">
            <Container>
            <div className='client-info'>
                <div className="client-content">
                    <h1>Happy Campers</h1>
                    <h5>WHAT OTHER PEOPLE THOUGHT ABOUT THE SERVICE PROVIDED BY JOBHUNT</h5>
                </div>
                <div className="client-section">
                    <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores "</p>
                </div>
                {/* <Row xs={1} md={8}>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/team-2.jpg" />
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/team-2.jpg" />
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/team-2.jpg" />
                </Card>
                </Col>
                </Row> */}
            </div>
            </Container>
        </div>
    );
};

export default HappyClient;