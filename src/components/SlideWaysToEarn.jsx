import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideCustomPrevArrow } from './SlideCustomPrevArrow';
import { SlideCustomNextArrow } from './SlideCustomNextArrow';

export function SlideWaysToEarn() {

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

  const slideData = [
    { title: ['Share your', <br/>, 'address'], image: 'images/ADDRESS.png', alt: 'Envelope', points: '15' },
    { title: ['Share', <br/>, 'your bday'], image: 'images/PARTYHAT.png', alt: 'Birthday', points: '15' },
    { title: ['Get', <br/>, 'pierced'], image: 'images/CATEARRINGS.png', alt: 'Cat earrings', points: '100' },
    { title: ['Make a', <br/>, 'purchase'], image: 'images/SHOPPINGBAG.png', alt: 'Shopping bag', points: '50' }
  ];

  return (
    <Slider {...settings} className="point-grid">
      {slideData.map((data) => (
        <div className="point-item">
          <p className="title">{data.title}</p>

          <div className="img-wrapper">
            <img className="kit" src={data.image} alt={data.alt} />
          </div>

          <div className="points-wrapper">
            <p>{data.points}</p>
            <p>POINTS</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
