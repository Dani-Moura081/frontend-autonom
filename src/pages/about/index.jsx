import "./index.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function About() {
  return (
    <div className="page-about page">
      <Header />
      <div className="background-aboutUs">
        <h1>Sobre Nós</h1>

        <img src="/src/assets/images/aboutUsImage.svg" alt="imagem sobre nós" />
      </div>
      <div className="aboutUs-description">
        <div className="path">
          <p>Home  &gt; About Us</p>
        </div>
        <div className="description">
          <div className="img">
            <img
              src="/src/assets/images/imagemSobrenos.svg"
              alt="imagem sobre nós"
            />
          </div>
          <div className="text">
            <p>
              Eletricista Autônomo com mais de 8 anos de experiência no setor
              Com vasta experiência em serviços de instalação elétrica
              residencial e comercial, ofereço soluções completas e
              personalizadas para atender às necessidades de cada cliente. Desde
              projetos elétricos até manutenção preventiva, estou comprometido
              com a segurança, eficiência e qualidade no serviço prestado.
            </p>
            <p>
              Entre os serviços oferecidos estão:
              <ul>
                <li>Instalação e manutenção de sistemas elétricos;</li>
                <li>Atualização de quadros de distribuição;</li>
                <li> Instalação de iluminação interna e externa; </li>
                <li>Automação residencial;</li>
                <li>Diagnóstico e resolução de problemas elétricos.</li>
              </ul>
            </p>
            <p>
              Meu compromisso é entregar um serviço rápido, seguro e com o mais
              alto padrão de qualidade, sempre buscando garantir a satisfação
              total dos clientes. Atuo de forma independente, com flexibilidade
              de horários e foco no atendimento personalizado. Entre em contato
              para mais informações e orçamentos sem compromisso.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
