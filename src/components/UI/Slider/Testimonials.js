import React from "react";
import Slider from "react-slick";
import avatar01 from "../../../assets/images/ava-1.jpg";
import avatar02 from "../../../assets/images/ava-2.jpg";
import avatar03 from "../../../assets/images/ava-3.jpg";
import "../../../styles/slider.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={avatar01} alt="avatar" className=" rounded" />
          <h6>Jonathan Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={avatar02} alt="avatar" className=" rounded" />
          <h6>Michael Jackson</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={avatar03} alt="avatar" className=" rounded" />
          <h6>Steven Spielberg</h6>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
