import './WaysToEarn.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideCustomPrevArrow } from '../SlideCustomPrevArrow';
import { SlideCustomNextArrow } from '../SlideCustomNextArrow';

export function WaysToEarn() {

  var settings = {
    autoplay: false,
    arrows:true,
    dots:false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    centerPadding:0,
    prevArrow: <SlideCustomPrevArrow/ >,
    nextArrow: <SlideCustomNextArrow/ >
  };

  return (
    <>
    <section className="cclub-component slider-component light-blue-background">

      <div className="slider-top max-1300">
        <div className="headline-wrap">
          <h2>So many <br/>ways to earn.</h2>
          <p>Collect points every time <br className="mobile-only"/>you shop, <br className="desktop-only"/>plus even more <br className="mobile-only"/><b>FREE</b> ways to earn!</p>
        </div>

        <div className="image-wrapper">
          <picture>
            <img className="lazyload hero-img" src="images/yes-animation-desktop.gif" alt="C.Club Animations"/>
          </picture>
        </div>
      </div>

      <div className="point-grid-component max-1300">
        <Slider {...settings} className="point-grid">
          <div className="point-item">
            <p className="title">Share your <br/>address</p>

            <div className="img-wrapper">
              <img className="kit" src="images/ADDRESS.png" alt="Envelope"/>
            </div>

            <div className="points-wrapper">
              <p>15</p>
              <p>POINTS</p>
            </div>
          </div>
          
          <div className="point-item">
            <p className="title">Share <br/>your bday</p>

            <div className="img-wrapper">
              <img className="lazyload kit" src="images/PARTYHAT.png" alt="Birthday"/>
            </div>

            <div className="points-wrapper">
              <p>15</p>
              <p>POINTS</p>
            </div>
          </div>

          <div className="point-item">
            <p className="title">Get <br/>pierced</p>

            <div className="img-wrapper">
              <img className="lazyload kit" src="images/CATEARRINGS.png" alt="Cat earrings"/>
            </div>

            <div className="points-wrapper">
              <p>100</p>
              <p>POINTS</p>
            </div>
          </div>
    
          <div className="point-item">
            <p className="title">Make a <br/>purchase</p>

            <div className="img-wrapper">
              <img className="lazyload kit" src="images/SHOPPINGBAG.png" alt="Shopping bag"/>
            </div>

            <div className="points-wrapper">
              <p>50</p>
              <p>POINTS</p>
            </div>
          </div>

        </Slider>
      </div>
      
      <div className="cta-wrapper">
        <a className="trackCTA cta" href="#" data-ctainfo="HP CLUXE CTA">JOIN NOW</a>
      </div>

    </section>

    <section className="cclub-component faq-component">

      <div className="slider-top max-1300">
        <div className="headline-wrap">
          <h2>Got questions?</h2>
          <p>We’ve got answers. <br/><a href="#">View FAQs</a></p>
        </div>

        <div className="bottom-wrap">
          <p><a href="#">Terms & Conditions</a></p>

          <a href="#top">
            <img className="arrow" src="images/Arrow4.png"/>
          </a>
        </div>

      </div>
    </section>

    </>
  )
}

const slideData = [
  {
    title: 'Share your <br/>address',
    img: 'images/ADDRESS.png',
    imgAlt: 'Envelope',
    points: '15'
  }
]