import "./index.css";
import { Link } from "react-router-dom";

function CourseReadContent() {
  return (
    <div className="course-description">
      <h1 className="course-description-title">course</h1>
      <p className="course-read-content" style={{ fontSize: "24px" }}>
        {[...new Array(6)]
          .map(
            () => `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam corrupti porro possimus quae doloribus. Totam debitis ad,
                                quasi cumque possimus sed eius necessitatibus earum, a aut odio, porro obcaecati voluptas.`
          )
          .join("\n")}
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
