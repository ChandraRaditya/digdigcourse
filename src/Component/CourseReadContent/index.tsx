import "./index.css";
import { ParamTypes, Materials } from "../../Helper/interface";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonPagination from "../ButtonPagination";
import { useEffect } from "react";

function CourseReadContent() {
  const { idMaterial } = useParams<ParamTypes>();
  const currentData: Materials[] = useSelector(
    (state: any) => state.detailedMaterialsData.value
  );

  const getContentCourse = currentData?.filter(
    (data: any) => data.id === idMaterial
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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

  return (
    <div className="course-description">
      <div className="course-description-container">
        <h1 className="course-description-title">
          {getContentCourse?.[0]?.title}
        </h1>
        <p
          className="course-read-content"
          style={{ fontSize: "24px" }}
          dangerouslySetInnerHTML={{ __html: getContentCourse?.[0]?.content }}
        />
      </div>
      <div className="button-page-container">{buttonNextPrev}</div>
    </div>
  );
}

export default CourseReadContent;
