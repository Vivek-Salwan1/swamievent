import React from 'react'
import Navbar from '../common/Navbar'
import { Link } from 'react-router-dom'
import { Countries } from '../data/internDest'
import '../styles/allDomestic.css'
import MobNav from '../common/MobNav'
import '../App.css'

function AllInternational() {
  return (
    <div className='allDPage'>
       <div className='mobNavallPage'>
      <MobNav/>
      </div>
      <Navbar /><br />
      <h1 style={{textAlign:'center'}}>Select favourite Country</h1>
      <div className="allDomesticPage">
         
        <div className="allStates">
          {
            Countries.map((country, i) => {
              return (
                <Link to={`/InterCardDetails/${country}`}>  <button className='stateBtn'>{country}</button></Link>
              )
            })
          }



        </div>


      </div>
    </div>
  )
}

export default AllInternational
