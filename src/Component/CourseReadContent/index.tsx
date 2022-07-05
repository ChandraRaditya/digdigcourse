import "./index.css";
import { Link } from "react-router-dom";
import { ParamTypes, Materials } from "../../Helper/interface";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseReadContent() {
  const { idMaterial } = useParams<ParamTypes>();
  const currentData: Materials[] = useSelector(
    (state: any) => state.detailedMaterialsData.value
  );

  const getContentCourse = currentData?.filter(
    (data: any) => data.id === idMaterial
  );

  return (
    <div className="course-description">
      <h1 className="course-description-title">
        {getContentCourse?.[0]?.title}
      </h1>
      <p className="course-read-content" style={{ fontSize: "24px" }}>
        {getContentCourse?.[0]?.content}
      </p>
      <div className="course-action">
        <Link to="/question" className="btn-course-action">
          Selanjutnya
        </Link>
      </div>
    </div>
  );
}

export default CourseReadContent;
