import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Contact() {
  return (
    <div className="page-contact page">
      <Header />
      <section className="background-contactUs">
        <h1>Contato</h1>
        <img src="/src/assets/images/contactImage.svg" alt="imagem contato" />
      </section>
      <section className="mapa">
        <div className="path">
          <p>Home &gt; Contact</p>
        </div>
        <img src="/src/assets/images/contatoMapaImage.svg" alt="mapa contact" />
      </section>
      <section className="contatos-page">
        <div className="informations">
          <h2>Informações de Contato</h2>
          <p>
            Com mais de 15 anos de experiência no setor, Eletrica Produtions
          </p>
          <div>
            <p>0012, Rua das dores, Brasil</p>
            <p>electro@gmail.com</p>
            <p>+55119999999</p>
          </div>

          <div className="social-medias">
            <img
              src="/src/assets/images/face.png
            "
              alt="imagem facebook"
            />
            <img
              src="/src/assets/images/twitter.png
            "
              alt="imagem twitter"
            />
            <img
              src="/src/assets/images/insta.png
            "
              alt="imagem instagram"
            />
            <img
              src="/src/assets/images/google.png
            "
              alt="imagem google"
            />
          </div>
        </div>
       
      </section>

      <Footer />
    </div>
  );
}
