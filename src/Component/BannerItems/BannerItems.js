import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BannerItems.css'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCompass } from 'react-icons/ai';

const BannerItems = () => {
    return (
        <div className='bannerItem-container'>
            <Container className="banner-items">
            <Row>
                <Col xs={6} md={3}>
                <div className="banner-item">
                
                <BsSearch></BsSearch>
                <p>Search a Job</p>
                </div>
                </Col>
                <Col xs={6} md={3}>
                <div className="banner-item">
                <AiOutlineCompass></AiOutlineCompass>
                <p>Pick a Location</p>
                </div>
                </Col>
                <Col xs={6} md={3}>
                 <div className="frelance">
                     <p>Frelance</p>
                 </div>
                </Col>
                <Col xs={6} md={3}>
                    <button className='bannerItem-button'>Search</button>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default BannerItems;