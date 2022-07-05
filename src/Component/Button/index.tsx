import './index.css';
import {Link} from 'react-router-dom';

interface IProps {
  link: string;
}

const Button: React.FC<IProps> = ({ link }) => {


  return (
      <Link className='btn' to={link}>selengkapnya</Link>
  );
}
export default Button;