import React from "react";
import "./App.css";
import Kits from "./Kits";
import Fraldinha from "./Fraldinha";
import Toalha from "./Toalha";
import Necessaire from "./Necessaire";
import Uniformes from "./Uniformes";
import Cozinha from "./Cozinha";

function Body() {
  return (
    <div>
      <h1>
        Bordados da Be é uma empresa que produz peças de qualidade, com
        acabamento impecável e feitas com muito amor.
      </h1>
      <h2>Conheça nossos produtos:</h2>
      <div>
        <Fraldinha />
        <Kits />
        <Toalha />
        <Necessaire />
        <Uniformes />
        <Cozinha />
      </div>
    </div>
  );
}

export default Body;
