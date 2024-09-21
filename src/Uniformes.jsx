import React from "react";
import Slider from "react-slick";
import "./App.css"; // Certifique-se de que o arquivo CSS está importado

const Uniformes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostrar 3 imagens simultaneamente
    slidesToScroll: 2,
    arrows: true, // Adicionar setas de navegação
  };

  return (
    <div>
      <div className="container">
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
    </div>
  );
};

export default Uniformes;
