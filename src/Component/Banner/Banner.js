import React, { useEffect } from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';
import banner1 from '../Images/banner-01.jpg'
import banner2 from '../Images/banner-02.jpg'
import banner3 from '../Images/banner-03.jpg'




const Banner = () => {
    return (
        <div className="banner-containers">
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#"><AiOutlineMenu></AiOutlineMenu></a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			
		</div>
	</nav>
   
            <Carousel fade >
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                            <h2><span>JOB</span>HUNT</h2>
                                <h1>DreamJobs</h1>
                                <h3>CREATIVE PROFESSIONALS</h3>
                                <p >POSTING A JOB IS A FANTASTIC, SIMPLE WAY TO REACH TALENTED WEB AND CREATIVE PROFESSIONALS AND UNTIL FURTHER NOTICE IT'S ENTIRELY FREE!</p>
                                <Button  className="btn btn-style">POST JOB</Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                            <h2><span>JOB</span>HUNT</h2>
                                <h1>DreamJobs</h1>
                                <h3>CREATIVE PROFESSIONALS</h3>
                                <p>POSTING A JOB IS A FANTASTIC, SIMPLE WAY TO REACH TALENTED WEB AND CREATIVE PROFESSIONALS AND UNTIL FURTHER NOTICE IT'S ENTIRELY FREE!</p>
                                <Button className="btn btn-style">POST JOB</Button>

                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                            <h2><span>JOB</span>HUNT</h2>
                                <h1>DreamJobs</h1>
                                <h3>CREATIVE PROFESSIONALS</h3>
                                <p>POSTING A JOB IS A FANTASTIC, SIMPLE WAY TO REACH TALENTED WEB AND CREATIVE PROFESSIONALS AND UNTIL FURTHER NOTICE IT'S ENTIRELY FREE!</p>
                                <Button className="btn btn-style">POST JOB</Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;