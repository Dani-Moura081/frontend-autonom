import "./index.scss";

export default function CardEspecifications() {
  return (
    <div className="comp-content-mid">
      <h1>O que nós oferecemos</h1>
        <p>
          Oferecemos uma gama abrangente de serviços econômicos para
          propriedades residenciais e comerciais
        </p>
      <section className="content-mid">
        
        <div className="container-eletricaEspecifications">
          <div>
            <img
              src="/src/assets/images/eletricImg1.svg"
              alt="imagem placa eletrica"
            />
            <h2>Preventiva</h2>
            <p>
              A <b>manutenção elétrica preventiva</b> é uma inspeção feita de
              tempos em tempos nas instalações elétricas para antecipar
              problemas graves, detectando-os quando ainda estão em estágios
              iniciais.
            </p>
          </div>
          <div>
            <img
              src="/src/assets/images/eletricImgLampada.svg"
              alt="imagem lampada cinza"
            />
            <h2>Instalação elétrica</h2>
            <p>
              <b>Infraestrutura,</b>
              <b> Cabeamento</b>,<b> Quadro elétrico principal</b>;{" "}
              <b>Instalações Elétricas Comerciais:</b> destinadas a
              estabelecimentos comerciais, como lojas, escritórios, etc.
            </p>
          </div>
          <div>
            <img
              src="/src/assets/images/eletricImgTomada.svg"
              alt="imagem tomada cinza"
            />
            <h2>Reparos & Manutenção</h2>
            <p>
              <b>Reparo e manutenção elétrica </b>envolve o diagnóstico, correção de
              falhas e a manutenção preventiva de sistemas elétricos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
