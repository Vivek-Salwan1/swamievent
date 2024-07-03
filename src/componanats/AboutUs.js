import React from 'react'
import Navbar from '../common/Navbar'
import '../styles/aboutContact.css'
import { Link } from 'react-router-dom'
import MobNav from '../common/MobNav'
import '../App.css'


function AboutUs() {
  return (
    <>
      <div className='mobNavallPage'>
      <MobNav/>
      </div>
    <div className='abcoPage'>

      <Navbar />
      <div className="aboutContact">
        <h1>ABOUT US</h1><br />

        <div className="aboutme">
          <p>Swami Tours and Travels is a premier travel agency dedicated to providing exceptional travel experiences tailored to each client's needs. With a reputation for excellence and a commitment to customer satisfaction, Swami Tours and Travels offers a comprehensive range of services, including itinerary planning, ticketing, accommodation booking, and transportation arrangements.</p>
        </div>
        <div className="aboutData">
          <div className="aDpart1">
            <h5>Any queries/grievances</h5>
            <Link to='https://api.whatsapp.com/send?phone=919730933133' target='_blank'>  <button>Whatsapp Us</button></Link>
          </div>
          <div className="aDpart2">

            <p>  Contact no : 9175949789 </p>
            <p>   Email : swamievent@gmail.com</p>
            <p>   Address : Sadguru Chem , Visava Naka , Satara </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs
