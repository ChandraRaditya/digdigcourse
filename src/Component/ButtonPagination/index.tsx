import { Link } from "react-router-dom";
import "./index.css";

export interface button {
  desc: string;
  idMaterial: string;
}

const ButtonPagination: React.FC<button> = ({ desc, idMaterial }) => {
  const idMaterialInNumber = parseInt(idMaterial);
  return (
    <Link
      to={
        desc === "Kembali"
          ? `${idMaterialInNumber - 1}`
          : `${idMaterialInNumber + 1}`
      }
      className="btn-course-action"
      style={desc === "Selanjutnya" ? { marginLeft: "auto" } : { margin: 0 }}
    >
      {desc}
    </Link>
  );
};

export default ButtonPagination;
