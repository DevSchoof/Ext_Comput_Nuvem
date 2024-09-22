import React from "react";
import Slider from "react-slick";
import "./App.css"; // Certifique-se de que o CSS importado está correto

const Fraldinha = () => {
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
      <h2>Fraldinhas</h2>
      <Slider {...settings}>
        <div>
          <img
            src="/FraldinhaChupetaGirafa.jpeg"
            alt="Fraldinha de Chupeta Girafa"
          />
          <p className="legend">Fraldinha de Chupeta Girafa</p>
        </div>
        <div>
          <img src="/FraldinhaUrsinho1.jpeg" alt="Fraldinha Ursinho 1" />
          <p className="legend">Fraldinha Ursinho 1</p>
        </div>
        <div>
          <img src="/FraldinhaUrsinho2.jpeg" alt="Fraldinha Ursinho 2" />
          <p className="legend">Fraldinha Ursinho 2</p>
        </div>
        <div>
          <img src="/FraldinhaUrsinho3.jpeg" alt="Fraldinha Ursinho 3" />
          <p className="legend">Fraldinha Ursinho 3</p>
        </div>
        <div>
          <img src="/FraldinhaUrsinho4.jpeg" alt="Fraldinha Ursinho 4" />
          <p className="legend">Fraldinha Ursinho 4</p>
        </div>
        <div>
          <img src="/FraldinhaUrsinha1.jpeg" alt="Fraldinha Ursinha 1" />
          <p className="legend">Fraldinha Ursinha 1</p>
        </div>
      </Slider>
    </div>
  );
};

export default Fraldinha;
