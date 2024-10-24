import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import Kits from "./Kits";
import Fraldinha from "./Fraldinha";
import Toalha from "./Toalha";
import Necessaire from "./Necessaire";
import Uniformes from "./Uniformes";
import Cozinha from "./Cozinha";

function Body() {
  return (
    <div>
      <Link to="/">
        <button className="btn-back">Voltar</button>
      </Link>
      <h1>Pedidos pelo WhatsApp ou Telegram.</h1>
      <div>
        <Toalha />
        <Necessaire />
        <Fraldinha />
        <Kits />
        <Uniformes />
        <Cozinha />
      </div>
    </div>
  );
}

export default Body;
