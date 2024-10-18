import "./index.scss";

export default function CardEspecifications() {
  return (
    <div className="comp-content-mid">
      <h2>O que nós oferecemos</h2>
        <p>
          Oferecemos uma gama abrangente de serviços econômicos para
          propriedades residenciais e comerciais
        </p>
      <section className="content-mid">
        
        <div className="container-eletricaEspecifications">
          <div>
            <img
              src="/src/assets/eletricImg1.svg"
              alt="imagem placa eletrica"
            />
            <h3>Preventiva</h3>
            <p>
              A <b>manutenção elétrica preventiva</b> é uma inspeção feita de
              tempos em tempos nas instalações elétricas para antecipar
              problemas graves, detectando-os quando ainda estão em estágios
              iniciais.
            </p>
          </div>
          <div>
            <img
              src="/src/assets/eletricImgLampada.svg"
              alt="imagem lampada cinza"
            />
            <h3>Instalação elétrica</h3>
            <p>
              <b>Infraestrutura,</b>
              <b> Cabeamento</b>,<b> Quadro elétrico principal</b>;{" "}
              <b>Instalações Elétricas Comerciais:</b> destinadas a
              estabelecimentos comerciais, como lojas, escritórios, etc.
            </p>
          </div>
          <div>
            <img
              src="/src/assets/eletricImgTomada.svg"
              alt="imagem tomada cinza"
            />
            <h3>Reparos & Manutenção</h3>
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
