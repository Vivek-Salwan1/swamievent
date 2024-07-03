import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StateWiseCards } from '../data/dStateWiseCards';
import '../styles/dCard.css'
import '../styles/domesticCardDetails.css'
import ScrollToTop from '../componanats/ScrolltoTop';
import Navbar from './Navbar';
import MobNav from './MobNav';
import '../App.css'
// import Footer from '../componanats/Footer';

function DomesticCardDetails() {

    const { state } = useParams();

    const stateTours = StateWiseCards.filter(card => card.stateName === state)
    //    console.log(stateTours)

    return (
        <div className='stateToursPage'>
            <ScrollToTop />
            <div className='mobNavallPage'>
                <MobNav />
            </div>
            <Navbar /> <br />
            <h1>{state}</h1>
            <div className="stateTours">
                {
                    stateTours.map((v, i) => {
                        return (
                            <StateTourCard data={v} key={i} />
                        )
                    })
                }
            </div><br />
            {/* <Footer/> */}
        </div>
    )
}

export default DomesticCardDetails;




const StateTourCard = ({ data }) => {
    const [flip, setFlip] = useState(false)
    return (

        <div onClick={() => setFlip(!flip)} className={(flip) ? 'dCard ddCard' : 'dCard'}>
            <div className="front" style={{ backgroundImage: `url(${data.tourImg})` }}>
                <div className="data">

                    <h6 htmlFor="">{data.tourName}</h6>

                    <h6 className='price'>Rs{data.tourPrice}./-</h6>

                </div>
            </div>
            <div className="back">
                <div className="data">


                    <h6>{data.tourName}</h6>

                    <div className="days">
                        <span>{data.days} Days</span><br />
                        <span>{data.night} Nights</span>
                    </div>

                    <div className="smbtn">
                        <Link to={data.pdfLink} target='_blank'>  <button className='seemoreBtn'>View deal</button> </Link>
                    </div>


                </div>
            </div>
        </div>

    )
}