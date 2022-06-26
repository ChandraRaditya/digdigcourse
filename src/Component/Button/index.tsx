import "./index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { idQuery } from "../../Redux/sliceId";

interface IProps {
  desc: string;
  link: string;
  id: string;
}

const Button: React.FC<IProps> = ({ desc, link, id }) => {
  const dispatch = useDispatch();
  const handleButtonId = () => {
    dispatch(idQuery(id));
    // console.log(id);
  };
  return (
    <Link className="btn" to={link} onClick={handleButtonId}>
      {desc}
    </Link>
  );
};
export default Button;
