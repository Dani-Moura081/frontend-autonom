import { useState } from "react";
import { FaBolt } from "react-icons/fa"; // Importa o ícone de raio da Font Awesome

import "./index.scss";
function Home() {
  return (
    <>
      <div className="page-home page">
        <header>
          <div className="list-header">
            <img src="/src/assets/Bolt.svg" alt="logo raio" />
            <h1>ELÉTRICA</h1>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </header>
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
              <h1 className="title">ELETHRONOS</h1>
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
        <section className="content-mid">
          <h2>O que nós oferecemos</h2>
          <p>
            Oferecemos uma gama abrangente de serviços econômicos para
            propriedades residenciais e comerciais
          </p>
          <div className="container-eletricaEspecifications">
            <div>
              <img
                src="/src/assets/eletricImg1.svg"
                alt="imagem placa eletrica"
              />
              <h3>Instalação elétrica</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                illo assumenda mollitia, atque vel, eius quas harum quasi, totam
                nemo necessitatibus ratione vitae. Non perferendis vel quibusdam
                ipsa! In, blanditiis!
              </p>
            </div>
            <div>
              <img
                src="/src/assets/eletricImgLampada.svg"
                alt="imagem lampada cinza"
              />
              <h3>Instalação elétrica</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                illo assumenda mollitia, atque vel, eius quas harum quasi, totam
                nemo necessitatibus ratione vitae. Non perferendis vel quibusdam
                ipsa! In, blanditiis!
              </p>
            </div>
            <div>
              <img
                src="/src/assets/eletricImgTomada.svg"
                alt="imagem tomada cinza"
              />
              <h3>Instalação elétrica</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                illo assumenda mollitia, atque vel, eius quas harum quasi, totam
                nemo necessitatibus ratione vitae. Non perferendis vel quibusdam
                ipsa! In, blanditiis!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
