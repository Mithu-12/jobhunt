import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiEternalLove } from 'react-icons/gi';
import './JobResume.css'

const JobResume = () => {
    return (
        <div>
            <div className="resume-details">
             <Container>
                 
             <Row xs={1} md={5}>
                <Col>
                    <div className="resume-items">
                    <div className="resume-detail">
                        <h4>490</h4>
                        <GiEternalLove></GiEternalLove>
                    </div>
                    <h6>JOBS FILLED</h6>
                    </div>
                </Col>
                <Col>
                    <div className="resume-items">
                    <div className="resume-detail">
                        <h4>490</h4>
                        <GiEternalLove></GiEternalLove>
                    </div>
                    <h6>RESUMES</h6>
                    </div>
                </Col>
                <Col>
                    <div className="resume-items">
                    <div className="resume-detail">
                        <h4>490</h4>
                        <GiEternalLove></GiEternalLove>
                    </div>
                    <h6>JOBS</h6>
                    </div>
                </Col>
                <Col>
                    <div className="resume-items">
                    <div className="resume-detail">
                        <h4>490</h4>
                        <GiEternalLove></GiEternalLove>
                    </div>
                    <h6>COMPANY</h6>
                    </div>
                </Col>
                <Col>
                    <div className="resume-items">
                    <div className="resume-detail">
                        <h4>490</h4>
                        <GiEternalLove></GiEternalLove>
                    </div>
                    <h6>MEMBERS</h6>
                    </div>
                </Col>
               
            </Row>
            </Container>
             </div>
        </div>
    );
};

export default JobResume;