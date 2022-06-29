import { Link } from "react-router-dom";
import "./index.css";

function ListMateri(props: any) {
  return (
    <div className="card-list">
      <h3>{props.title}</h3>
      <Link to={""}>
        <button className="card-button">Buka</button>
      </Link>
    </div>
  );
}

export default ListMateri;
