import React from 'react'
import Navbar from './Navbar';
import '../styles/articleDetails.css'
import { useParams } from 'react-router-dom';
import { ArticlesData } from '../data/articleDetails';
import ScrollToTop from '../componanats/ScrolltoTop';
import Footer from '../componanats/Footer';
import MobNav from './MobNav';
import '../App.css'

function ArticleDetails() {
   const {articleID} = useParams();

   const article = ArticlesData.find(articleInfo=>articleInfo.articleID === articleID);


  return (
    
    <div className='artDContainer'>
     
      <ScrollToTop/>
      <div className='mobNavallPage'>
      <MobNav/>
      </div>
        <Navbar/><br />
        <div className="artContainer">
         <h3>{article.articleTitle}</h3><br />
         <div className='artImage'>
            <img src={article.image} alt="" />
         </div><br />
         <div className="artDescription">
          {article.description}
         </div>
        </div><br />
       <Footer/>
    </div>
  )
}

export default ArticleDetails;


