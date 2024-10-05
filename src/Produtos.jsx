import React from "react";
import Slider from "react-slick";
import "./App.css";

function Produtos({ title, children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>{title}</h2>
      <Slider {...settings}>
        {React.Children.map(children, (child) => (
          <div>{child}</div>
        ))}
      </Slider>
    </div>
  );
}

export default Produtos;
