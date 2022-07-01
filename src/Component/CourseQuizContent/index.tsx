import CardOption from "../CardOption";
import "./index.css";

function CourseQuizContent() {
  return (
    <div className="quiz-content">
      <div className="quiz-container">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque
          arcu, malesuada vel vulputate dignissim, efficitur eget ex.
        </h2>
        <div className="choice-container">
          <CardOption />
        </div>
      </div>
    </div>
  );
}

export default CourseQuizContent;
