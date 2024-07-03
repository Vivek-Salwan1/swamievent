import React from 'react'
import Navbar from '../common/Navbar'
import { Allstates } from '../data/states'
import '../styles/allDomestic.css'
import { Link } from 'react-router-dom'
import MobNav from '../common/MobNav'
import '../App.css'

function AllDomestic() {
  return (
    <div className='allDPage'>
       <div className='mobNavallPage'>
      <MobNav/>
      </div>
        <Navbar/><br />
        <h1 style={{textAlign:'center'}}>Select favourite State</h1>
      <div className="allDomesticPage">
      
      <div className="allStates">
      {
        Allstates.map((state,i)=>{
          return(
         <Link to={`/DomesticCardDetails/${state}`}>  <button  className='stateBtn'>{state}</button></Link> 
          )
        })
      }
     


      </div>


      </div>
    </div>
  )
}

export default AllDomestic
