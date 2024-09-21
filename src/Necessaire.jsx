import React from "react";
import Slider from "react-slick";
import "./App.css"; // Certifique-se de que o arquivo CSS está importado

const Necessaire = () => {
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
        <h2>Necessaires</h2>
        <Slider {...settings}>
          <div>
            <img src="/KitNecessaireBox.png" alt="Kit Necessaire Box" />
            <p className="legend">Kit tNecessaire Box</p>
          </div>
          <div>
            <img src="/NecessaireChaves.png" alt="Necessaire Chaves" />
            <p className="legend">Necessaire Chaves</p>
          </div>
          <div>
            <img src="/Necessaire1.jpeg" alt="Necessaire 1" />
            <p className="legend">Necessaire 1</p>
          </div>
          <div>
            <img src="/Necessaire2.jpeg" alt="Necessaire 2" />
            <p className="legend">Necessaire 2</p>
          </div>
          <div>
            <img src="/Necessaire3.jpeg" alt="Necessaire 3" />
            <p className="legend">Necessaire 3</p>
          </div>
          <div>
            <img src="/Necessaire4.jpeg" alt="Necessaire 4" />
            <p className="legend">Necessaire 4</p>
          </div>
          <div>
            <img src="/Necessaire5.jpeg" alt="Necessaire 5" />
            <p className="legend">Necessaire 5</p>
          </div>
          <div>
            <img src="/NecessaireBox1.jpeg" alt="Necessaire Box 1" />
            <p className="legend">Necessaire Box 1</p>
          </div>
          <div>
            <img src="/NecessaireBox2.jpeg" alt="Necessaire Box 2" />
            <p className="legend">Necessaire Box 2</p>
          </div>
          <div>
            <img src="/NecessaireBox3.jpeg" alt="Necessaire Box 3" />
            <p className="legend">Necessaire Box 3</p>
          </div>
          <div>
            <img src="/NecessaireBox4.jpeg" alt="Necessaire Box 4" />
            <p className="legend">Necessaire Box 4</p>
          </div>
          <div>
            <img src="/NecessaireBox5.png" alt="Necessaire Box 5" />
            <p className="legend">Necessaire Box 5</p>
          </div>
          <div>
            <img src="/NecessaireBox6.png" alt="Necessaire Box 6" />
            <p className="legend">Necessaire Box 6</p>
          </div>
          <div>
            <img src="/NecessaireBoxBatman.jpeg" alt="Necessaire Box Batman" />
            <p className="legend">Necessaire Box Batman</p>
          </div>
          <div>
            <img
              src="/NecessaireBoxPalmeiras.jpeg"
              alt="Necessaire Box Palmeiras"
            />{" "}
            {/*Não tem mundial*/}
            <p className="legend">Necessaire Box Palmeiras</p>
          </div>
          <div>
            <img src="/NecessaireProf1.jpeg" alt="Necessaire Prof1" />
            <p className="legend">Necessaire Prof1</p>
          </div>
          <div>
            <img src="/NecessaireBoxProf2.png" alt="Necessaire Box Prof2" />
            <p className="legend">Necessaire Box Prof2</p>
          </div>
          <div>
            <img src="/NecessaireManicure.jpeg" alt="Necessaire Manicure" />
            <p className="legend">Necessaire Manicure</p>
          </div>
          <div>
            <img src="/PortaMoedas.jpeg" alt="Porta Moedas" />
            <p className="legend">Porta Moedas</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Necessaire;
