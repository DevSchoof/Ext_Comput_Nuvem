import React from "react";
import "./Land.css";

function Body() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <img src="/LogoGrande.png" alt="Logo" className="logoLand" />
        <h1>Bem-vindo à Bordados da Be</h1>

        <div className="landing-buttons">
          <a href="/portfolio">
            <button className="btn">Conheça nosso trabalho</button>
          </a>
          <a
            href="https://www.instagram.com/bordados_da_be?igsh=aW8xem1he"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              <img src="/Instagram.png" alt="Instagram" />
              Últimas novidades
            </button>
          </a>
          <a
            href="https://www.facebook.com/beneconfeccoesbraganca?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              <img src="/Facebook.png" alt="Facebook" />
              Últimas novidades
            </button>
          </a>
          <a
            href="https://wa.me/5535999555579"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              <img src="Whatsapp.png" alt="WhatsApp" />
              Encomendas e pedidos
            </button>
          </a>
          <a
            href="https://t.me/+5535999555579"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              <img src="/Telegram.png" alt="Telegram" />
              Encomendas e pedidos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Body;
