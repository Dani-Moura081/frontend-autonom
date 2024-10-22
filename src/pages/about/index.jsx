import "./index.scss";
import Header from "../../components/header";

export default function About() {
  return (
    <div className="page-about page">
      <Header />
      <div className="background-aboutUs">
        <h1>Sobre Nós</h1>

        <img src="/src/assets/images/aboutUsImage.svg" alt="imagem sobre nós" />
      </div>
      <div className="aboutUs-description">
        <div className="path"></div>
        <div className="description">
          <div className="img">
            
          </div>
          <div className="text"></div>
        </div>
      </div>
    </div>
  );
}
