import './index.css';
import {Link} from 'react-router-dom';

interface IProps {
  desc: string;
  link: string;
}

const ButtonCourse: React.FC<IProps> = ({ desc, link }) => {


  return (
      <Link className='btn-course' to={link}>{desc}</Link>
  );
}
export default ButtonCourse;