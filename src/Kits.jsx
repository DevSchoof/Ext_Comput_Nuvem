import React from "react";
import Slider from "react-slick";
import "./App.css"; // Certifique-se de que o CSS importado está correto

const Kits = () => {
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
      <h2>Kits especiais</h2>
      <Slider {...settings}>
        <div>
          <img src="/KitToalhaNecessaire.png" alt="Kit Toalha Necessaire" />
          <p className="legend">Kit com toalha e Necessaire</p>
        </div>
        <div>
          <img src="/KitEscovacao1.png" alt="Kit Escovação 1" />
          <p className="legend">Kit Escovação 1</p>
        </div>
        <div>
          <img src="/KitEscovacao2.png" alt="Kit Escovação 2" />
          <p className="legend">Kit Escovação 2</p>
        </div>
        <div>
          <img src="/KitHigiene1.jpeg" alt="Kit Higiene 1" />
          <p className="legend">Kit Higiene 1</p>
        </div>
        <div>
          <img src="/KitHigiene2.jpeg" alt="Kit Higiene 2" />
          <p className="legend">Kit Higiene 2</p>
        </div>
        <div>
          <img src="/KitPortaFralda.png" alt="Kit Porta Fralda" />
          <p className="legend">Kit Porta Fralda</p>
        </div>
      </Slider>
    </div>
  );
};

export default Kits;
