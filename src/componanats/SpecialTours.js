import React from 'react'
import Navbar from '../common/Navbar';
import '../styles/groupTours.css';
import { SpecialTourCards } from '../data/groupTourCards';
// import GroupTCard from './GroupTCard';
import SpecialTCard from './SpecialTourCard';
import MobNav from '../common/MobNav';
import '../App.css'

function SpecialTours() {
  return (
    <div className='specialTPage'>
       <div className='mobNavallPage'>
      <MobNav/>
      </div>
    <Navbar /><br />
    <div className="groupToursSection">
      <h1>SPECIAL TOURS</h1> <br />
      <div className="GtCards">
         {
          SpecialTourCards.map((v,i)=>{
            return(
              <SpecialTCard sData={v} key={i}/>
            )
          })
         }
         

      </div>

    </div>
  </div>
  )
}

export default SpecialTours;
