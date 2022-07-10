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

  return (
    <div className="course-description">
      <h1 className="course-description-title">
        {getContentCourse?.[0]?.title}
      </h1>
      <p className="course-read-content" style={{ fontSize: "24px" }}>
        {getContentCourse?.[0]?.content}
      </p>
      <div className="button-page-container">
        <ButtonPagination />
        <ButtonPagination />
      </div>
    </div>
  );
}

export default CourseReadContent;
