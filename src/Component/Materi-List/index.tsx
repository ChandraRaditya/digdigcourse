import { Link } from "react-router-dom";
import { Cours } from "../../Helper/interface";
import "./index.css";

function ListMateri(props: any) {
  return (
    <div className="card-list">
      <h3>{props.title}</h3>
      <Link to={`/course/${props.nameCourse}/${props.id}`}>
        <button className="card-button">Buka</button>
      </Link>
    </div>
  );
}

export default ListMateri;
