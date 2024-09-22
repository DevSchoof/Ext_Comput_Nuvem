import React from "react";
import Slider from "react-slick";
import "./App.css"; // Certifique-se de que o CSS importado está correto

const Uniformes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Define quantos slides aparecerão por vez
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
      <h2>Uniformes</h2>
      <Slider {...settings}>
        <div>
          <img src="/Jaleco1.jpeg" alt="Jaleco 1" />
          <p className="legend">Jaleco 1</p>
        </div>
        <div>
          <img src="/Tarjeta1.jpeg" alt="Tarjeta 1" />
          <p className="legend">Tarjeta 1</p>
        </div>
      </Slider>
    </div>
  );
};

export default Uniformes;
