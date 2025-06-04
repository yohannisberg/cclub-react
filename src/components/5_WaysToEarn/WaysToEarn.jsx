import './WaysToEarn.css';
import { SlideWaysToEarn } from '../SlideWaysToEarn';

export function WaysToEarn() {

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
        <SlideWaysToEarn />
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