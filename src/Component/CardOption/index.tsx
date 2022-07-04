import { useDispatch } from "react-redux";
import { ListOfAnswer } from "../../Helper/interface";
import "./index.css";
import { answerQuizQuery } from "../../Redux/sliceAnswerQuiz";

function CardOption({ answerId, label }: ListOfAnswer) {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    console.log("terpilih", answerId);
    dispatch(answerQuizQuery(answerId));
  };

  return (
    <button onClick={handleOnClick} className="card-option">
      <div className="card-option-chooice">{answerId}</div>
      <p>{label}</p>
    </button>
  );
}

export default CardOption;
