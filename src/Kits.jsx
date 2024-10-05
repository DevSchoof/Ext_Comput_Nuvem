import React from "react";
import Produtos from "./Produtos";
import "./App.css";

function Kits() {
  return (
    <Produtos title="Kits Especiais">
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
    </Produtos>
  );
}

export default Kits;
