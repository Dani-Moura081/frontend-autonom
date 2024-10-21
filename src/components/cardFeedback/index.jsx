import "./index.scss";

export default function CardFeedback(props) {
  return (
    <div className="comp-cardFeedback">
      <div className="card">
        <p>
          {props.feedback}
        </p>
        <div className="person">
          <img src={props.imagem} alt="imagem de pessoa" />{" "}
          <div>
          <strong>{props.nome}</strong>
          <span>{props.localidade}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
