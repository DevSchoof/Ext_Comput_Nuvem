import React from "react";
import Produtos from "./Produtos";
import "./App.css"; // Certifique-se de que o CSS importado está correto

function Fraldinha() {
  return (
    <Produtos title="Fraldinha">
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
    </Produtos>
  );
}

export default Fraldinha;
