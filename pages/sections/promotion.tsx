import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Promotion = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (
    <div className="bg-green-chia-dark3 pt-10 pb-5">
      <div className="container mx-auto">
      <Slider {...settings}>
          <div>
            <img className="h-auto" src="images/promotions/Group 28543@2x.webp" />
          </div>
          <div>
            <img className="h-auto" src="images/promotions/Group 28544@2x.webp" />
          </div>
          <div>
            <img className="h-auto" src="images/promotions/Group 28545@2x.webp" />
          </div>
          <div>
            <img className="h-auto" src="images/promotions/Group 28546@2x.webp" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Promotion;
