import Footer from "../Footer";
import ListMateri from "../Materi-List";
import "./index.css";

function Materi() {
  return (
    <div>
      <div className="course-detail-card-wrapper">
        <h2 className="sub-title">Materi</h2>
        <ListMateri />
      </div>
    </div>
  );
}

export default Materi;
