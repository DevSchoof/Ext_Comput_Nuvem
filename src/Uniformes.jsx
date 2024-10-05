import React from "react";
import Produtos from "./Produtos";
import "./App.css"; // Certifique-se de que o CSS importado está correto

function Uniformes() {
  return (
    <Produtos title="Uniformes">
      <div>
        <img src="/Jaleco1.jpeg" alt="Jaleco 1" />
        <p className="legend">Jaleco 1</p>
      </div>
      <div>
        <img src="/Tarjeta1.jpeg" alt="Tarjeta 1" />
        <p className="legend">Tarjeta 1</p>
      </div>
    </Produtos>
  );
}

export default Uniformes;
