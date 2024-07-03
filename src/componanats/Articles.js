import React from 'react'
import '../styles/article.css'
import { Link } from 'react-router-dom';
// import article1 from '../images/articles/article1.jpg'

function ArticleCard({data}) {
  return (
  <Link to={`/ArticleDetails/${data.articleID}`}> <div className='artCard'>
      <div className="artPart1">
        <img src={data.img} alt="" />
      </div>
      <div className="artPart2">
         <div className="artcontent">
            <p>{data.title}</p>
         </div>
      </div>
    </div>
    </Link> 
  )
}

export default ArticleCard;
