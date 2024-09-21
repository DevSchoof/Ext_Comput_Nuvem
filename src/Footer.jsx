import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Onde estamos</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.384824856032!2d-46.5311368236361!3d-22.936050538919663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceca1c771251cb%3A0xb5bdce8420784e85!2sR.%20Cap.%20Jo%C3%A3o%20Pupo%20J%C3%BAnior%2C%20280%20-%20Jardim%20Recreio%2C%20Bragan%C3%A7a%20Paulista%20-%20SP%2C%2012910-070!5e0!3m2!1spt-BR!2sbr!4v1726524498667!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localização da Empresa"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
