// import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../styles/header.css';


import slider1 from '../images/slider/Slide1 (1).png';
import slider2 from '../images/slider/Slide2.png';
import slider3 from '../images/slider/Slide3.png';
import slide4 from '../images/slider/Slide4.png'
import slide5 from '../images/slider/Slide5.png'
import slide6 from '../images/slider/Slide6.png'
import Navbar from './Navbar';
function Header() {


    return (
        <>
            <Navbar/>
            <Carousel className='slider' data-bs-theme="dark" pause={false}>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide5}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide6}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </>
    );
}

export default Header;
