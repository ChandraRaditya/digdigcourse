import { useDispatch } from "react-redux";
import "./index.css";
import { answerQuizQuery } from "../../Redux/sliceAnswerQuiz";
import { useEffect, useState } from "react";
import { cardOptionComponent } from "../../Helper/interface";

function CardOption({ answerId, label, currentAnswer }: cardOptionComponent) {
  const dispatch = useDispatch();
  const [background, setBackground] = useState("#FBFBFB");
  const [fontColor, setFontColor] = useState("#000000");

  useEffect(() => {
    if (currentAnswer === answerId) {
      setBackground("#242F9B");
      setFontColor("#FFFFFF");
    } else {
      setBackground("#FBFBFB");
      setFontColor("#000000");
    }
  }, [answerId, currentAnswer]);

  const handleOnClick = () => {
    dispatch(answerQuizQuery(answerId));
  };

  return (
    <button
      onClick={handleOnClick}
      className="card-option"
      style={{ backgroundColor: background, color: fontColor }}
    >
      <div className="card-option-chooice">{answerId}</div>
      <p>{label}</p>
    </button>
  );
}

export default CardOption;
