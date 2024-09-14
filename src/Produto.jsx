import React from "react";
import "./App.css"; // Certifique-se de que o arquivo CSS está importado

const Produtos = (nome, url) => {
  return (
    <div>
      <div className="container">
        <h2>Coisa de Bebê </h2>
        <div className="column">
          <img src="/panobebe.png" />
          <img src="/panobebe1.png" />
          <img src="/portafralda.png" />
          <img src="/portafralda1.png" />
          <img src="/manuela.png" />
          <img src="/vitoria.png" />
        </div>
      </div>
      <div className="container">
        <h2> Necessaires </h2>
        <div className="column">
          <img src="/nec1.png" />
          <img src="/necchaves.png" />
          <img src="/necprof.png" />
          <img src="/necfono.png" />
          <img src="/necs.png" />
        </div>
      </div>
      <div className="container">
        <h2> Paninhos </h2>
        <div className="column">
          <img src="/pano1.png" />
          <img src="/pano2.png" />
        </div>
      </div>
      <div className="container">
        <h2> Toalhas </h2>
        <div className="column">
          <img src="/toalha1.png" />
          <img src="/toalha2.png" />
          <img src="/toalha3.png" />
        </div>
      </div>
    </div>
  );
};

export default Produtos;
