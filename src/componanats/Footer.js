import React from 'react'
import fLogo from '../images/swami logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

function Footer() {
  return (
    <div className="footerSection">
      <div className="fPart1">

        <div className="fCol1">
          <div className="fCol1Data">
            <h2>CONTACT US</h2><br />
            <span>Contact no : 9175949789</span>
            <span>Email : swamievent@gmail.com</span>
            <span>Address : Sadguru Chem , Visava Naka , Satara</span><br />

            <div className="socialMLinks">


              <Link to='https://www.instagram.com/swami.event.managment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'> <i> <FontAwesomeIcon icon={faInstagram} size='2x' /> </i></Link>
              <Link to='https://www.facebook.com/profile.php?id=100082626196797' target='_blank'>  <i>  <FontAwesomeIcon icon={faFacebook} size='2x' /> </i></Link>
              <Link to='https://api.whatsapp.com/send?phone=919730933133' target='_blank'> <i>  <FontAwesomeIcon icon={faWhatsapp} size='2x' /> </i></Link>

            </div>
          </div>
        </div>

        <div className="fCol2">
          <div className="fCol2Data">
            <h2>USEFUL LINKS</h2><br />
            <Link to='/termsAndConditions'>   <span>Terms and Conditions</span> </Link>
            <Link to='/PrivacyPolicy'>  <span>Privacy Policy</span></Link>
            <Link to='/aboutUs'>  <span>About Us</span></Link>
          </div>
        </div>

      </div>

      <div className="fPart2">
        <div className="fPart2Data">
          <img src={fLogo} alt="" srcset="" />
          <p id='footername'>SWAMI EVENT MANAGMENT </p>
          <p className='fSlogan'>TOURS AND TRAVELS</p>

        </div>
        <div className='promotion'>
        {/* <p>@copyrights </p> */}
        <p> Designed and developed by <a href='https://lapticare.in/' target='_blank'>Lapticare.in</a> </p>
        </div>

      </div>
    </div>
  )
}

export default Footer
