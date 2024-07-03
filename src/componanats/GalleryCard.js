import React from 'react'
import '../styles/galleryCard.css'
import { Link } from 'react-router-dom'


function GalleryCard({data}) {
  // console.log(data);
  return (
    <div className='galCard'>
    <Link to='https://www.instagram.com/swami.event.managment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>  <img src={data.imgSrc} alt="" srcset="" /></Link>
    </div>
  )
}

export default GalleryCard
