import { useState } from "react";
import { ListOfAnswer } from "../../Helper/interface";
import "./index.css";

function CardOption({ answerId, label }: ListOfAnswer) {
  const [answer, setAnswer] = useState<string>("");

  return (
    <button className="card-option">
      <div className="card-option-chooice">{answerId}</div>
      <p>{label}</p>
    </button>
  );
}

export default CardOption;
