import { useState } from "react";
import { FaBolt } from "react-icons/fa"; // Importa o ícone de raio da Font Awesome

import "./index.scss";
function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="page-home page">
        <header>
          <div className="list-header">
            <img src="/src/assets/Lightning Bolt.svg" alt="logo raio" />
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
            src="/src/assets/Hero Image.svg"
            alt="imagem eletricista"
            className="imagem-fundo"
          />
          <div>
            <h1>Elétrica & Mais</h1>
            <p>Um serviço em que você pode confiar</p>
            <button>Agende agora</button>
          </div>
        </section>
        <section className="content-init">
          <div className="content-eletrica">
            <div>
              <h1>ELETHRONOS</h1>
                <p>presta serviços a mais de 15 anos,sendo firmado como um dos serviços mais sólidos do mercado,  atuando no mercado com manutenção residencial, manutenção de aparelhos eletronicos.</p>
                <button>Ver mais...</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
