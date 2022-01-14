import React from 'react';
import { Container } from 'react-bootstrap';
import pattern from '../Images/pattern01.png'
import './Apps.css'
import { BsApple } from 'react-icons/bs';
import { DiAndroid } from 'react-icons/di';


const Apps = () => {
    return (
        <div>
            <div className="app-container" style={{background: `url(${pattern}), linear-gradient(RGB(87, 98, 98), 
        RGB(87, 98, 98))`}}>

                    <Container>
                        <div className="apps">
                        <div className="app-info">
                            <h3>Get JobHunt Applications</h3>
                            <h5>AVAILABLE ON EVERYTHING YOU USE EVERY DAY.</h5>
                            <div className="app-details">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                            </div>
                        </div>
                        <div className="apps-button">
                        <button><BsApple></BsApple> IOS APP</button>
                        <button><DiAndroid></DiAndroid> ANDROID APP</button>
                        </div>
                        </div>
                    </Container>
            </div>
        </div>
    );
};

export default Apps;