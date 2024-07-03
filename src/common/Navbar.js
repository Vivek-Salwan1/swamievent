import React, { useState } from 'react'
import '../styles/header.css'
import logo from '../images/swami logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [activenav, setActiveNav] = useState(null)
    function handleNavClick(event) {
        setActiveNav(event.currentTarget.textContent)
    }
    return (
        <div class="header">
            <div class='navBar'>
                <div class="part1">
                    <div class="logo">
                        <Link to='/'> <img src={logo} alt="" srcset="" /></Link>
                    </div>
                </div>
                <div class="part2">
                    <ul class='navItems'>

                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}> <li onClick={handleNavClick} className={activenav === 'Home' ? 'activeNav' : ''}>Home</li></Link>

                        <Link to='/allDomestic'> <li onClick={handleNavClick} className={activenav === 'Domestic' ? 'activeNav' : ''}>Domestic pkgs.</li></Link>
                        <Link to='/allInternational'>  <li onClick={handleNavClick} className={activenav === 'International' ? 'activeNav' : ''}>International pkgs.</li> </Link>


                        <Link to='/specialTours' style={{ textDecoration: 'none', color: 'white' }}> <li onClick={handleNavClick} className={activenav === 'Special Tours' ? 'activeNav' : ''}>Special Tours</li></Link>
                        <Link to='/aboutUs' style={{ textDecoration: 'none', color: 'white' }}> <li onClick={handleNavClick} className={activenav === 'About Us' ? 'activeNav' : ''}>About Us</li></Link>
                        <Link to='/contactUs' style={{ textDecoration: 'none', color: 'white' }}> <li onClick={handleNavClick} className={activenav === 'Contact Us' ? 'activeNav' : ''}>Contact Us</li></Link>

                        <Link to='https://www.instagram.com/swami.event.managment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'> <li onClick={handleNavClick} className={activenav === 'Gallery' ? 'activeNav' : ''}>Gallery</li></Link>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Navbar;
