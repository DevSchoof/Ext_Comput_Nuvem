import React from "react";
import LogoGrande from "/LogoGrande.png";
import "./Land.css";
function Header() {
  return (
    <header>
      <div id="article">
        <img src={LogoGrande} className="logo" alt="Bene" />
      </div>
    </header>
  );
}

export default Header;
