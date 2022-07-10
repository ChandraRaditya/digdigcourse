import CardOption from "../CardOption";
import "./index.css";
import { ParamTypes, Materials } from "../../Helper/interface";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { answerQuizQuery } from "../../Redux/sliceAnswerQuiz";
import ButtonPagination from "../ButtonPagination";

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
    window.scrollTo(0, 0);
  }, [dispatch, idMaterial]);

  useEffect(() => {
    setKeyAnswer(getContentCourse?.[0]?.correctAnswer);
  }, [idMaterial, getContentCourse, currentAnswer]);

  const buttonDesc = ["Kembali", "Selanjutnya"];

  const onlyNextButton = buttonDesc.slice(1, 2).map((val, id) => {
    return <ButtonPagination key={id} desc={val} idMaterial={idMaterial} />;
  });

  const onlyPrevButton = buttonDesc.slice(0, 1).map((val, id) => {
    return <ButtonPagination key={id} desc={val} idMaterial={idMaterial} />;
  });

  const allButton = buttonDesc.map((val, id) => {
    return <ButtonPagination key={id} desc={val} idMaterial={idMaterial} />;
  });

  const lastMaterial = currentData?.[currentData?.length - 1]?.id;
  const firstMaterial = currentData?.[0]?.id;
  const buttonNextPrev =
    firstMaterial === idMaterial
      ? onlyNextButton
      : lastMaterial === idMaterial
      ? onlyPrevButton
      : allButton;

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
      <div className="button-page-container">{buttonNextPrev}</div>
    </div>
  );
}

export default CourseQuizContent;
