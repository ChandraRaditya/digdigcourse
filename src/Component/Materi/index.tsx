import { useSelector } from "react-redux";
import { Cours } from "../../Helper/interface";
import ListMateri from "../Materi-List";
import "./index.css";

function Materi() {
  const currentData: Cours = useSelector(
    (state: any) => state.detailedCoursesData.value
  );

  const mappingListMateri = currentData?.materials?.map((val, id) => {
    return (
      <ListMateri
        key={id}
        title={val.title}
        id={val.id}
        nameCourse={currentData.courseName}
      />
    );
  });
  return (
    <div id="materi-course">
      <div className="course-detail-card-wrapper">
        <h2 className="sub-title">Materi</h2>
        {mappingListMateri}
      </div>
    </div>
  );
}

export default Materi;
