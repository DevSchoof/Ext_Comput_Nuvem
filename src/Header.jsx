import Logo from "/Logo.png";
import Facebook from "/Facebook.png";
import Instagram from "/Instagram.png";
import Whatsapp from "/Whatsapp.png";

const UrlFacebook =
  "https://www.facebook.com/beneconfeccoesbraganca?mibextid=ZbWKwL";
const UrlInstagram = "https://www.instagram.com/bordados_da_be?igsh=aW8xem1he";
const UrlWhatsapp = "https://wa.me/5535999555579";

function Header() {
  return (
    <header>
      <div id="article">
        <img src={Logo} className="logo" alt="Bene" />
      </div>
      <div className="social-icons">
        <a
          href={UrlInstagram}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href={UrlFacebook}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a
          href={UrlWhatsapp}
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </header>
  );
}

export default Header;
