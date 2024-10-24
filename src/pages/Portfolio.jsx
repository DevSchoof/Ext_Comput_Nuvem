import { useEffect } from "react";
import ReactGA from "react-ga4";
import Body from "../components/Portfolio/Body";

import Footer from "../components/Portfolio/Footer";
import Header from "../components/Portfolio/Header";
import "../components/Portfolio/Portfolio.css";

function Portfolio() {
  // Inicializa o Google Analytics com o ID da métrica
  useEffect(() => {
    ReactGA.initialize("G-RYP4CHXGTF");

    // Envia uma visualização de página no carregamento inicial
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="portfolio">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Portfolio;
