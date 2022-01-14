import React from 'react';
import './HuntWork.css'
import pattern from '../Images/pattern01.png'
import { Container } from 'react-bootstrap';
const HuntWork = () => {
    return (
        <div className="HuntWork" style={{background: `url(${pattern}), linear-gradient(RGB(87, 98, 98), 
        RGB(87, 98, 98))`}}>
            <Container>
            <div className="HuntWork-container">
                <div className="hunt-content">
                <h1>How JobHunt Work</h1>
                <h5>IF YOU PURCHASE THIS PSD YOU WILL GET HAPPY & HURRY UP</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default HuntWork;