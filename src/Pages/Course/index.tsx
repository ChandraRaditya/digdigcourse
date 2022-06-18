import CourseLeftContent from "../../Component/CourseLeftContent";
import CourseRightContent from "../../Component/CourseRightContent";
import "./index.css";

function Course() {
  return (
    <div>
      <h2>HTML COURSE</h2>
      <div className="course-component-container">
        <CourseLeftContent />
        <CourseRightContent />
      </div>
    </div>
  );
}

export default Course;
