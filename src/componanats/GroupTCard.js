import React, { useState } from 'react'
import '../styles/dCard.css'

function GroupTCard({gData}) {
    const [flip,setFlip] = useState(false)
  return (
    <div onClick={()=>setFlip(!flip)} className={(flip)?'dCard ddCard':'dCard'}>
    <div className="front">
        <div className="data">
            <div className="content">
                <h6 htmlFor="">{(gData.location)}</h6>
               
                <br /><br /><br /><br /><br /><br />
                <h6 className='price'>Rs./-</h6>
            </div>
        </div>
    </div>
    <div className="back">
        <div className="data">
            <div className="content">
                <h6>gcard</h6> <br />
                <div className="days">
                    <span>Days</span><br />
                    <span> Nights</span>
                </div><br />
                <p> </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default GroupTCard
