import "./index.scss";

export default function CardEspecifications() {
  return (
    <div className="comp-content-mid">
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
            <h3>Preventiva</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere
            </p>
          </div>
          <div>
            <img
              src="/src/assets/eletricImgLampada.svg"
              alt="imagem lampada cinza"
            />
            <h3>Instalação elétrica</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere
            </p>
          </div>
          <div>
            <img
              src="/src/assets/eletricImgTomada.svg"
              alt="imagem tomada cinza"
            />
            <h3>Reparos & Manutenção</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
