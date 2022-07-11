import CourseQuizContent from "../../Component/CourseQuizContent";
import ButtonCourse from "../../Component/ButtonCourse";
import "./index.css";
import CourseReadContent from "../../Component/CourseReadContent";
import { useEffect } from "react";
import { getMaterialsData } from "../../Helper/getData";
import { useParams } from "react-router-dom";
import { detailedMaterialsQuery } from "../../Redux/sliceDetailedMaterials";
import { useDispatch, useSelector } from "react-redux";
import { Materials, ParamTypes } from "../../Helper/interface";

function Course() {
  const { idMaterial } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const currentData: Materials[] = useSelector(
    (state: any) => state.detailedMaterialsData.value
  );
  const data = localStorage.getItem("obj");

  useEffect(() => {
    const getMaterials = getMaterialsData();
    dispatch(detailedMaterialsQuery(getMaterials));
    window.scrollTo(0, 0);
  }, [data, dispatch]);

  const getContentCourse = currentData?.filter(
    (data: any) => data.id === idMaterial
  );

  const moduleMaterials = currentData?.map((data, id) => {
    return <ButtonCourse key={id} title={data.title} idMaterials={data.id} />;
  });

  const contentCourse =
    getContentCourse?.[0]?.type === "article" ? (
      <CourseReadContent />
    ) : (
      <CourseQuizContent />
    );

  return (
    <div className="course-section">
      <div className="course-section-container">
        <h2>HTML COURSE</h2>
        <div className="course-component-container">
          <div className="course-item">
            <h1>Modul Belajar</h1>
            {moduleMaterials}
          </div>
          {contentCourse}
        </div>
      </div>
    </div>
  );
}

export default Course;
