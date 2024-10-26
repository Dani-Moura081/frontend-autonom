import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import CardEspecifications from "../../components/cardEspecificacao";
import CardFeedback from "../../components/cardFeedback";
import Footer from "../../components/footer";
const LampIconComponent = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faLightbulb} size="2x" color="white" />
    </div>
  );
};

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-home page">
        <Header />
        <section className="content">
          <img
            src="/src/assets/images/eletricistImg2.svg"
            alt="imagem eletricista"
            className="imagem-fundo"
          />
          <div>
            <h1>Elétrica & Mais</h1>
            <p>Um serviço em que você pode confiar</p>
            <button className="button">Conheça-nos</button>
          </div>
        </section>
        <section className="content-init">
          <div className="content-eletrica">
            <div className="text-eletrica">
              <h2 className="title">ELETHRONOS</h2>
              <p className="description">
                presta serviços a mais de 15 anos, sendo firmado como um dos
                serviços mais sólidos do mercado,atuando no mercado com
                manutenção residencial, manutenção de aparelhos eletronicos.
              </p>
              <button className="button">Ver mais...</button>
            </div>
            <div className="imagem">
              <img
                src="/src/assets/images/Eletricist.svg"
                alt="Eletricista elethronos"
              />
            </div>
          </div>
        </section>
        <CardEspecifications />
        <section className="recent-projects">
          <h3>Projetos recentes</h3>
          <div className="projects">
            <img src="/src/assets/images/projeto1.svg" alt="imagem projeto" />
            <img src="/src/assets/images/projeto2.svg" alt="imagem projeto 2" />
            <img src="/src/assets/images/projeto3.svg" alt="imagem projeto 3" />
          </div>
        </section>
        <section className="feedbacks">
          <h4>Feedbacks</h4>
          <div className="cards-feedback">
            <CardFeedback
              feedback=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere"
              nome="Marry Jean"
              localidade="São Paulo, SP"
              imagem="/src/assets/images/person3.svg"
            />

            <CardFeedback
              feedback=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere"
              nome="David Mark"
              localidade="São Paulo, SP"
              imagem="/src/assets/images/person2.svg"
            />
            <CardFeedback
              feedback=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere"
              nome="Omari Zayn"
              localidade="São Paulo, SP"
              imagem="/src/assets/images/person1.svg"
            />
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
