/*import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;*/

import { useEffect } from "react";
import ReactGA from "react-ga4";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

function App() {
  // Inicializa o Google Analytics com o ID da métrica
  useEffect(() => {
    ReactGA.initialize("G-RYP4CHXGTF");

    // Envia uma visualização de página no carregamento inicial
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
