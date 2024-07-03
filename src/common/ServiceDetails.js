import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { ServicesData } from '../data/serviceDetails';
import '../styles/serviceDetails.css'
import ScrollToTop from '../componanats/ScrolltoTop';
import Footer from '../componanats/Footer';
import MobNav from './MobNav';
import '../App.css'


function ServiceDetails() {

    const { serviceID } = useParams();

    const serviceData = ServicesData.find(service => service.serID === serviceID)

    console.log(serviceData)

    return (
        <>

            <div className='ServiceDetailsPage'>
                <ScrollToTop />
                <div className='mobNavallPage'>
      <MobNav/>
      </div>
                <Navbar />
                <div className="serviceContent">
                    <h1>{serviceData.serName}</h1>
                    <img src={serviceData.serImg} alt="" srcset="" /> <br />

                    <p>{serviceData.serDescription}</p>


                </div> <br />
                <Footer />


            </div>
        </>
    )
}

export default ServiceDetails
