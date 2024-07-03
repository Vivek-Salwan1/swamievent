import React from 'react'
import '../styles/bodyS.css'
import Dcard from './dCard';
import ICard from './iCard';
import { Link } from 'react-router-dom';
import { BestDomestic, BestInternational } from '../data/bestPackages';
function BodyS() {
  return (
    <div className='bodySall'>

      <div className='aboutContent'>
        <h5>Swami Tours and Travels in Satara</h5>
        <p>

          Swami Tours and Travels is a premier travel agency dedicated to providing exceptional travel experiences tailored to each client's needs. With a reputation for excellence and a commitment to customer satisfaction, Swami Tours and Travels offers a comprehensive range of services, including itinerary planning, ticketing, accommodation booking, and transportation arrangements. Whether you're seeking a relaxing beach getaway, an adventurous trek through the mountains, or a cultural immersion in exotic locales, Swami Tours and Travels has you covered. Our team of experienced travel experts works tirelessly to create customized packages that reflect your preferences and interests, ensuring a seamless and memorable journey from start to finish. With Swami Tours and Travels, you can trust that every aspect of your trip is taken care of with professionalism, attention to detail, and a genuine passion for travel.
        </p>
        <span>Swami Tours and Travels is a premier travel agency dedicated to providing exceptional travel experiences tailored to each client's needs. With a reputation for excellence and a commitment to customer satisfaction, Swami Tours and Travels offers a comprehensive range of services, including itinerary planning, ticketing, accommodation booking, and transportation arrangements.

        </span><br/>

      </div>

      <h5>Explore the best of our domestic packages</h5>
      <div className="domesticCards">

        {
          BestDomestic.map((v, i) => {
            return (
              <Dcard data={v} key={i} />

            )
          })

        }

      </div>

      <Link to='allDomestic'>  <h6 className='dCardViewMoreBtn'>  <button>View all</button> </h6>  </Link>

      <h5>Explore the best of our International packages</h5>
      <div className="internationalCards">

        {
          BestInternational.map((v, i) => {
            return (
              <ICard data={v} key={i} />
            )
          })
        }

      </div>
      <Link to='allInternational'> <h6 className='dCardViewMoreBtn'>  <button>View all</button> </h6></Link>

    </div>
  )
}

export default BodyS;
