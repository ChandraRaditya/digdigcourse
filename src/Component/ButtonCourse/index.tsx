import "./index.css";
import { Link, useParams } from "react-router-dom";
import { ParamTypes } from "../../Helper/interface";

interface IProps {
  title: string;
  idMaterials: string;
}

const ButtonCourse: React.FC<IProps> = ({ title, idMaterials }) => {
  const { id } = useParams<ParamTypes>();

  return (
    <Link to={`/course/${id.toLowerCase()}/${idMaterials}`}>
      <button className="btn-course">{title}</button>
    </Link>
  );
};
export default ButtonCourse;
