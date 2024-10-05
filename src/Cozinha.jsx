import React from "react";
import Produtos from "./Produtos";
import "./App.css"; // Certifique-se de que o CSS importado está correto

function Cozinha() {
  return (
    <Produtos title="Fraldinha">
      <div>
        <img src="/PanoPrato1.png" alt="Pano de Prato 1" />
        <p className="legend">Pano de Prato 1</p>
      </div>
      <div>
        <img src="/PanoPrato2.jpeg" alt="Pano de Prato 2" />
        <p className="legend">Pano de Prato 2</p>
      </div>
      <div>
        <img src="/PanoPrato3.jpeg" alt="Pano de Prato 3" />
        <p className="legend">Pano de Prato 3</p>
      </div>
      <div>
        <img src="/PanoPrato4.jpeg" alt="Pano de Prato 4" />
        <p className="legend">Pano de Prato 4</p>
      </div>
      <div>
        <img src="/PanoPrato5.jpeg" alt="Pano de Prato 5" />
        <p className="legend">Pano de Prato 5</p>
      </div>
      <div>
        <img src="/PanoPrato6.jpeg" alt="Pano de Prato 6" />
        <p className="legend">Pano de Prato 6</p>
      </div>
      <div>
        <img src="/PanoPrato7.jpeg" alt="Pano de Prato 7" />
        <p className="legend">Pano de Prato 7</p>
      </div>
      <div>
        <img src="/PuxaSaco1.jpeg" alt="Puxa Saco 1" />
        <p className="legend">Puxa Saco 1</p>
      </div>
      <div>
        <img src="/PuxaSaco2.jpeg" alt="Puxa Saco 2" />
        <p className="legend">Puxa Saco 2</p>
      </div>
      <div>
        <img src="/PuxaSaco3.jpeg" alt="Puxa Saco 3" />
        <p className="legend">Puxa Saco 3</p>
      </div>
      <div>
        <img src="/PuxaSacoPanoPrato1.jpeg" alt="Puxa Saco e Pano de Prato 1" />
        <p className="legend">Puxa Saco e Pano de Prato 1</p>
      </div>
      <div>
        <img src="/PuxaSacoPanoPrato2.jpeg" alt="Puxa Saco e Pano de Prato 2" />
        <p className="legend">Puxa Saco e Pano de Prato 2</p>
      </div>
    </Produtos>
  );
}

export default Cozinha;
