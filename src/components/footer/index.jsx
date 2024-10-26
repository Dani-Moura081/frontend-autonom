import "./index.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="comp-footer">
      <footer>
        <div className="informations-footer">
          <img
            src="/src/assets/images/mapaFooter.svg"
            alt=""
            className="mapa"
          />

          <div className="contatos">
            <h5>
              {" "}
              <img src="/src/assets/images/lampadaWhite.svg" alt="" /> ELETRICA
            </h5>
            <p>electro@gmail.com</p>
            <p>+55 (11) 99999-9999</p>
          </div>
          <div className="social-medias">
            <h6>Redes Sociais</h6>
            <div>
              <Link>
                <img
                  src="/src/assets/images/face.png"
                  alt="facebook image"
                  className="facebook"
                />
              </Link>
              <Link>
                <img
                  src="/src/assets/images/twitter.png"
                  alt="twitter image"
                  className="twitter"
                />
              </Link>
              <Link>
                <img
                  src="/src/assets/images/insta.png"
                  alt="instagram image"
                  className="instagram"
                />
              </Link>
              <Link>
                <img
                  src="/src/assets/images/google.png"
                  alt="google image"
                  className="googleplus"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
