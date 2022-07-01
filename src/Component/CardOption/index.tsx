import { ListOfAnswer } from "../../Helper/interface";
import "./index.css";

function CardOption({ answerId, label }: ListOfAnswer) {
  return (
    <div className="card-option">
      <div className="card-option-chooice">{answerId}</div>
      <p>{label}</p>
    </div>
  );
}

export default CardOption;
