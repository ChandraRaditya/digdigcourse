import { useSelector } from "react-redux";
import "./index.css";

const About = () => {
  const currentData = useSelector(
    (state: any) => state.detailedCoursesData.value
  );

  const preparation = currentData?.requirement?.map((val: any) => {
    return <li>{val}</li>;
  });
  return (
    <div className="course-detail-card-wrapper">
      <div className="card-about">
        <h1 className="title-about">Tentang Kelas</h1>
        <p className="desc-about">{currentData.about}</p>
        <h2 className="title-list">Apa perlu dipersiapkan di course ini</h2>
        <ul>{preparation}</ul>
      </div>
    </div>
  );
};

export default About;
