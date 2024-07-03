import './App.css';
import Header from './common/header';
import ArticleCard from './componanats/Articles';
import BodyS from './componanats/BodyS';
import ServiceCard from './componanats/ServiceCard';
import { Services } from './data/Services';
import { Articles } from './data/articles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryCard from './componanats/GalleryCard';
// import { GalleryImgs } from './data/galleryImgs';
import Footer from './componanats/Footer';
// import { InstagramEmbed } from 'react-social-media-embed';
import { GalleryImgs } from './data/galleryImgs';
// import { Link } from 'react-router-dom';
import MobNav from './common/MobNav';


function App() {






  const slidingDuration = 3000
  var settings = {
    dots: false,
    infinite: true,
    speed: slidingDuration,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  // const img1 = <InstagramEmbed url="https://www.instagram.com/reel/C3KpOtSIAd_/" />
  // const img2 = <InstagramEmbed url="https://www.instagram.com/reel/C3KoLx1oW7b/" />
  // const img3 = <InstagramEmbed url="https://www.instagram.com/reel/C2aOUgzo4OV/" />
  // const img4 = <InstagramEmbed url="https://www.instagram.com/reel/Cz1Xd_NN3RE/" />
  // const img5 = <InstagramEmbed url="https://www.instagram.com/reel/CzwBQZ3NlZ5/" />
  // const img6 = <InstagramEmbed url="https://www.instagram.com/reel/CzZVT-atBYn/" />
 
  return (
    <>
      <div className="allSection">
        <div className="header">
          <div className="mNav">
            <div className="mobileNav">
              <MobNav/>

            </div>
             
            
          </div>

          <Header />
        </div><br />
        <div className="bodySection">
          <BodyS />

          <div className="servicesContainer">
            <div className="servicesSection">
              <h5>OTHER SERVICES</h5>
              <Slider {...settings}>
                {
                  Services.map((v, i) => {
                    return (
                      <ServiceCard data={v} key={i} />
                    )
                  })
                }
              </Slider>
            </div>


          </div><br /><br />
          <h5 className='artHeading'>READING CORNER</h5>
          <div className="articlesSection">

            {
              Articles.map((v, i) => {
                return (
                  <>
                    <ArticleCard data={v} key={i} />
                  </>
                )
              })
            }

          </div><br />
          <div className="galleryContainer">
            <div className="gallerySection">

              <h5>GALLERY</h5>
              <Slider {...settings}>

                {
                  GalleryImgs.map((v, i) => {
                    return (
                      <GalleryCard data={v} key={i} />
                    )
                  })
                }

              </Slider>


            </div>
          </div><br /> <br />

        </div>

        <div className="footer">

          <Footer />



        </div>
      </div>
    </>
  );
}

export default App;
