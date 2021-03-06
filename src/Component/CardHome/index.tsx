import "./index.css";
import { List } from "../../Helper/interface";
import Button from "../Button";

function CardHome({
  learningPathName,
  info,
  hours,
  level,
  imgUrl,
  courses,
  id,
}: List) {
  const urlName = learningPathName.toLowerCase().replace(/\s/g, "-");

  return (
    <div className="card-home">
      <div className="image-container">
        <img src={imgUrl} alt="" />
      </div>
      <div className="card-home-content">
        <h2>{learningPathName}</h2>
        <p>{info}</p>
        <div className="little-box-container">
          <div className="little-box">{courses.length} Pelajaran</div>
          <div className="little-box">{hours}</div>
          <div className="little-box">{level}</div>
        </div>
        <Button link={`/learning-path/${urlName}`} />
      </div>
    </div>
  );
}

export default CardHome;
