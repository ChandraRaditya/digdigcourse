import CourseLeftContent from "../../Component/CourseLeftContent";
import CourseQuizContent from "../../Component/CourseQuizContent";
import "./index.css";

function Course() {
  return (
    <div className="course-section">
      <div className="course-section-container">
        <h2>HTML COURSE</h2>
        <div className="course-component-container">
          <CourseLeftContent />
          <CourseQuizContent />
        </div>
      </div>
    </div>
  );
}

export default Course;
