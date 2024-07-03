import React, { useState } from 'react'
import '../styles/dCard.css'
import { Link } from 'react-router-dom';
// import iCard1 from '../images/iCards/iCard.webp'

function ICard({ data }) {
    const [flip, setFlip] = useState(false)

    return (
        <div onClick={() => setFlip(!flip)} className={(flip) ? 'dCard ddCard' : 'dCard'}>
            <div className="front" style={{ backgroundImage: `url(${data.tourImg})` }}>
                <div className="data">
                   
                        <h6 htmlFor="">{data.tourName}</h6>
                       
                        <h6 className='price'>Rs.{data.tourPrice}/-</h6>
                    
                </div>
            </div>
            <div className="back">
                <div className="data">
                 
                        <h6>{data.tourName}</h6> 

                        <div className="days">
                            <span>{data.days} Days</span><br/>
                            <span>{data.night} Nights</span>
                        </div>

                        <div className="smbtn">
                     <Link to={data.pdfLink} target='_blank'>  <button className='seemoreBtn'>See more</button></Link>  
                        </div>

                    </div>
                </div>
            </div>
     

    )
}

export default ICard;
