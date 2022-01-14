import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './JobItems.css'
import { SiHomeassistant } from 'react-icons/si';


const JobItems = () => {
    return (
        <div>
            <div className="job-container">
            <Container>
            <Row className='job-position'>
                <Col xs={12} md={8}>
                            <Row>
                                <div className="job-item">
                                <Col xs={12} md={12}>
                                    <div className="job-details">
                                        <Row>
                                        <Col xs={12} md={6}>
                                            <h6>JOB TITLE</h6>
                                            
                                         </Col>
                                        <Col xs={12} md={3}>
                                        <h6>LOCATION</h6>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        <h6>CREATE AT</h6>
                                        </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                <Col xs={12} md={12}>
                                <div className="job-detail">
                                       <div className="jobs">
                                       <Row>
                                        <Col xs={12} md={6}>
                                            <div className="job-hero">
                                            
                                            <div className="job-icon">
                                            <SiHomeassistant/>
                                            </div>
                                            <div className="font-hero">
                                            <h6>WORDPRESS DEVELOPER</h6>
                                            <p>Behance</p>
                                            </div>
                                            </div>
                                         </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Anywhere</p>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Posted 6 years ago</p>
                                        </div>
                                        </Col>
                                        </Row>
                                       </div>
                                    </div>
                                    </Col>
                                <Col xs={12} md={12}>
                                <div className="job-detail">
                                        <Row>
                                        <Col xs={12} md={6}>
                                            <div className="job-hero">
                                            
                                            <div className="job-icon">
                                            <SiHomeassistant/>
                                            </div>
                                            <div className="font-hero">
                                            <h6>VISUAL DESIGNER</h6>
                                            <p>Behance</p>
                                            </div>
                                            </div>
                                         </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Anywhere</p>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Posted 6 years ago</p>
                                        </div>
                                        </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                <Col xs={12} md={12}>
                                <div className="job-detail">
                                        <Row>
                                        <Col xs={12} md={6}>
                                            <div className="job-hero">
                                            
                                            <div className="job-icon">
                                            <SiHomeassistant/>
                                            </div>
                                            <div className="font-hero">
                                            <h6>COMMUNICATION DESIGNER</h6>
                                            <p>Behance</p>
                                            </div>
                                            </div>
                                         </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Anywhere</p>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Posted 6 years ago</p>
                                        </div>
                                        </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                <Col xs={12} md={12}>
                                <div className="job-detail">
                                        <Row>
                                        <Col xs={12} md={6}>
                                            <div className="job-hero">
                                            
                                            <div className="job-icon">
                                            <SiHomeassistant/>
                                            </div>
                                            <div className="font-hero">
                                            <h6>USER EXPERIENCE DESIGNER (LEAD SYSTEMS ANALYST)</h6>
                                            <p>Behance</p>
                                            </div>
                                            </div>
                                         </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Anywhere</p>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Posted 6 years ago</p>
                                        </div>
                                        </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                <Col xs={12} md={12}>
                                <div className="job-detail">
                                        <Row>
                                        <Col xs={12} md={6}>
                                            <div className="job-hero">
                                            
                                            <div className="job-icon">
                                            <SiHomeassistant/>
                                            </div>
                                            <div className="font-hero">
                                            <h6>FRONT-END ENGINEER</h6>
                                            <p>Behance</p>
                                            </div>
                                            </div>
                                         </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Anywhere</p>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={3}>
                                        <div className="job-content">
                                        <p>Posted 6 years ago</p>
                                        </div>
                                        </Col>
                                        </Row>
                                    </div>
                                    </Col>
                                    <button className='job-button'>Load more list</button>
                                </div>
                            </Row>
                           
                    </Col>
                <Col xs={12} md={4}>
                        <div className="job-side">
                            <div className="job-sides">
                            <h6>WORDPRESS DEVELOPER</h6>
                            <p>Behence</p>
                            </div>
                        </div>
                </Col>
            </Row>
            <div className="job-statics">
                <h2>Jobs Statistics</h2>
                <h4>YOU WILL GET AWESOME JOBS PSD & EASY CONVERT TO WORDPRESS</h4>
            </div>
            </Container>
            </div>
        </div>
    );
};

export default JobItems;