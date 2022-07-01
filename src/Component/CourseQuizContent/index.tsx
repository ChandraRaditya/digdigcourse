import CardOption from "../CardOption";
import "./index.css";
import { ParamTypes, Materials } from "../../Helper/interface";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseQuizContent() {
  const { idMaterial } = useParams<ParamTypes>();
  const currentData: Materials[] = useSelector(
    (state: any) => state.detailedMaterialsData.value
  );

  const getContentCourse = currentData?.filter(
    (data: any) => data.id === idMaterial
  );

  // console.log("option", getContentCourse[0].listOfAnswer);

  const multipleChooice = getContentCourse?.[0]?.listOfAnswer?.map((data) => {
    return (
      <CardOption
        answerId={data.answerId[data.answerId.length - 1]}
        label={data.label}
      />
    );
  });

  return (
    <div className="quiz-content">
      <div className="quiz-container">
        <h2>{getContentCourse?.[0]?.question}</h2>
        <div className="choice-container">{multipleChooice}</div>
      </div>
    </div>
  );
}

export default CourseQuizContent;
