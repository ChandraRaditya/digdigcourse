import { useSelector } from "react-redux";
import ListMateri from "../Materi-List";
import "./index.css";

function Materi() {
  const currentData = useSelector(
    (state: any) => state.detailedCoursesData.value
  );

  const mappingListMateri = currentData?.materials?.map((val: any, id: any) => {
    return <ListMateri key={id} title={val.title} />;
  });
  return (
    <div>
      <div className="course-detail-card-wrapper">
        <h2 className="sub-title">Materi</h2>
        {mappingListMateri}
      </div>
    </div>
  );
}

export default Materi;
