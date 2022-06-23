import './index.css';
import {Link} from 'react-router-dom';

interface IProps {
  desc: string;
  link: string;
}

const Button: React.FC<IProps> = ({ desc, link }) => {


  return (
      <Link className='btn' to={link}>{desc}</Link>
  );
}
export default Button;