import CardOption from "../CardOption";
import "./index.css";
import { ParamTypes, Materials } from "../../Helper/interface";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { answerQuizQuery } from "../../Redux/sliceAnswerQuiz";

function CourseQuizContent() {
  const { idMaterial } = useParams<ParamTypes>();
  const currentData: Materials[] = useSelector(
    (state: any) => state.detailedMaterialsData.value
  );
  const currentAnswer: string = useSelector(
    (state: any) => state.answerQuizData.value
  );
  const [keyAnswer, setKeyAnswer] = useState("");

  const getContentCourse = currentData?.filter(
    (data) => data.id === idMaterial
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(answerQuizQuery(""));
  }, [dispatch, idMaterial]);

  useEffect(() => {
    setKeyAnswer(getContentCourse?.[0]?.correctAnswer);
  }, [idMaterial, getContentCourse, currentAnswer]);

  const multipleChooice = getContentCourse?.[0]?.listOfAnswer?.map(
    (data, id) => {
      return (
        <CardOption
          key={id}
          answerId={data.answerId[data.answerId.length - 1]}
          label={data.label}
          currentAnswer={currentAnswer}
        />
      );
    }
  );

  const handleSubmit = () => {
    if (!currentAnswer) {
      alert("pilih dulu jawaban anda");
    } else if (
      currentAnswer.toLocaleLowerCase() ===
      keyAnswer[keyAnswer?.length - 1].toLocaleLowerCase()
    ) {
      alert("benar");
    } else {
      alert("salah");
    }
  };

  return (
    <div className="quiz-content">
      <div className="quiz-container">
        <h2>{getContentCourse?.[0]?.question}</h2>
        <div className="choice-container">{multipleChooice}</div>
        <button onClick={handleSubmit} className="btn-submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CourseQuizContent;
