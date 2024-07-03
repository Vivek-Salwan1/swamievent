import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/servicecard.css'

function ServiceCard({ data }) {

  return (
    <Link to={`/ServiceDetails/${data.serviceID}`}> <div className='serviceCard'>
      <div className="serPart1">
        <div className="icon">

        </div>
        <span>{data.title}</span>
        <img src={data.srcImg} alt="" />
      </div>
      <div className="serPart2">
        <div className="sercontent">

          <span>{data.description}</span>
          {/* <button>Read more</button> */}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ServiceCard;
