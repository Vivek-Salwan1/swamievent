import React from 'react'
import Navbar from '../common/Navbar'
import { Link } from 'react-router-dom'
import MobNav from '../common/MobNav'
import '../App.css'

function ContactUs() {
  return (
    <div className='abcoPage'>
    <div className='mobNavallPage'>
      <MobNav/>
      </div>
    <Navbar />
    <div className="aboutContact">
      <h1>CONTACT US</h1><br />

      <div className="aboutData">
        <div className="aDpart1">
          <h5>Any queries/grievances</h5>
          <Link to='https://api.whatsapp.com/send?phone=919730933133' target='_blank'>  <button>Whatsapp Us</button></Link>
        </div>
        <div className="aDpart2">

          <p>  Contact no : 9767497037 </p>
          <p>   Email : swamievent@gmail.com</p>
          <p>   Address : Sadguru Chem , Visava Naka , Satara </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs
