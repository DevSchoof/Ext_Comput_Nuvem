import React from "react";
import Slider from "react-slick";
import "./App.css"; // Certifique-se de que o arquivo CSS está importado

const Toalhas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Mostrar 3 imagens simultaneamente
    slidesToScroll: 7,
    arrows: true, // Adicionar setas de navegação
  };

  return (
    <div>
      <div className="container">
        <h2>Toalhas</h2>
        <Slider {...settings}>
          <div>
            <img src="/Toalha1.jpeg" alt="Toalha 1" />
            <p className="legend">Toalha 1</p>
          </div>
          <div>
            <img src="/Toalha2.png" alt="Toalha 2" />
            <p className="legend">Toalha 2</p>
          </div>
          <div>
            <img src="/Toalha3.jpeg" alt="Toalha 3" />
            <p className="legend">Toalha 3</p>
          </div>
          <div>
            <img src="/Toalha4.png" alt="Toalha 4" />
            <p className="legend">Toalha 4</p>
          </div>
          <div>
            <img src="/Toalha5.jpeg" alt="Toalha 5" />
            <p className="legend">Toalha 5</p>
          </div>
          <div>
            <img src="/Toalha6.jpeg" alt="Toalha 6" />
            <p className="legend">Toalha 6</p>
          </div>
          <div>
            <img src="/Toalha7.jpeg" alt="Toalha 7" />
            <p className="legend">Toalha 7</p>
          </div>
          <div>
            <img src="/Toalha8.jpeg" alt="Toalha 8" />
            <p className="legend">Toalha 8</p>
          </div>
          <div>
            <img src="/Toalha9.jpeg" alt="Toalha 9" />
            <p className="legend">Toalha 9</p>
          </div>
          <div>
            <img src="/Toalha10.jpeg" alt="Toalha 10" />
            <p className="legend">Toalha 10</p>
          </div>
          <div>
            <img src="/ToalhaBebe1.png" alt="Toalha Bebe 1" />
            <p className="legend">Toalha Bebe 1</p>
          </div>
          <div>
            <img src="/ToalhaBebe2.png" alt="Toalha Bebe 2" />
            <p className="legend">Toalha Bebe 2</p>
          </div>
          <div>
            <img src="/ToalhaBebe3.jpeg" alt="Toalha Bebe 3" />
            <p className="legend">Toalha Bebe 3</p>
          </div>
          <div>
            <img src="/ToalhaEucaristia.jpeg" alt="Toalha Eucaristia" />
            <p className="legend">Toalha Eucaristia</p>
          </div>
          <div>
            <img src="/ToalhaMaria.jpeg" alt="Toalha Maria" />
            <p className="legend">Toalha Maria</p>
          </div>
          <div>
            <img src="/ToalhaProf1.jpeg" alt="Toalha Prof 1" />
            <p className="legend">Toalha Prof 1</p>
          </div>
          <div>
            <img src="/ToalhaProf2.jpeg" alt="Toalha Prof 2" />
            <p className="legend">Toalha Prof 2</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Toalhas;
