import React from "react";
import "./App.css"; // Certifique-se de que o arquivo CSS está importado
import Bebe from "./Bebe";
import Toalha from "./Toalha";
import Paninho from "./Paninho";
import Necessaire from "./Necessaire";

const Produto = () => {
  return (
    <div>
      <Bebe />;
      <Toalha />;
      <Paninho />;
      <Neceissaire />;
    </div>
  );
};

export default Produto;
