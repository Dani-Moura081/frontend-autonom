import { useState } from "react";
import { FaBolt } from "react-icons/fa"; // Importa o ícone de raio da Font Awesome

import "./index.scss";
import Header from "../../components/header";
import CardEspecifications from "../../components/cardEspecificacao";
function Home() {
  return (
    <>
      <div className="page-home page">
        <Header />
        <section className="content">
          <img
            src="/src/assets/eletricistImg2.svg"
            alt="imagem eletricista"
            className="imagem-fundo"
          />
          <div>
            <h1>Elétrica & Mais</h1>
            <p>Um serviço em que você pode confiar</p>
            <button className="button">Agende agora</button>
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
                src="/src/assets/Eletricist.svg"
                alt="Eletricista elethronos"
              />
            </div>
          </div>
        </section>
        <CardEspecifications />
        <section className="recent-projects">
          <h3>Projetos recentes</h3>
          <div className="projects">
            <img src="/src/assets/projeto1.svg" alt="imagem projeto" />
            <img src="/src/assets/projeto2.svg" alt="imagem projeto 2" />
            <img src="/src/assets/projeto3.svg" alt="imagem projeto 3" />
          </div>
        </section>
        <section className="feedbacks">
          <h4>Feedbacks</h4>
        </section>
      </div>
    </>
  );
}

export default Home;
