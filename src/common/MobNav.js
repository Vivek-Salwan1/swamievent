import React, { useState } from 'react'
import logo from '../images/swami logo.png'
import { Link } from 'react-router-dom';
// import '../App.css'

function MobNav() {
    const [menuClick, setMenuclick] = useState(false);

    function showMenu() {
        // Write logic to show menu
        setMenuclick(!menuClick)

    }
    return (
        <>
            <div className="mobileNav">
                <div className="mNavPart1">
                    <img src={logo} alt="" srcset="" />
                </div>

                <div className="mNavPart2">
                    <div onClick={showMenu} className="menuIcon"> {menuClick ? '\u2716' : '\u2630'} </div>
                </div>

            </div>

            <div id="myDropdown" className={`dropdown-content ${menuClick ? 'show' : ''}`}>
                <Link to='/'> <li>Home</li>  </Link>
                <Link to='/allDomestic'>  <li>Domestic Pkgs.</li> </Link>
                <Link to='/allInternational'>   <li>International Pkgs.</li> </Link>
                <Link to='/specialTours'> <li>Special Tours</li> </Link>
                <Link to='/aboutUs'> <li>About Us</li> </Link>
                <Link to='/contactUs'>  <li>Contact Us</li> </Link>
                <Link to='https://www.instagram.com/swami.event.managment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'> <li>Gallery</li> </Link>
            </div>
        </>
    )
}

export default MobNav
