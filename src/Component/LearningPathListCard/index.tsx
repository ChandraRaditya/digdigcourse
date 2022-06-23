import './index.css';
import Button from '../Button'

interface IProps {
  id: number,
  desc: string;
  title: string;
  img: string;
}

const LearnPathCard: React.FC<IProps> = ({ title, desc, img, id}) => {

  return (
    <div className="card-wrapper">
      <div className="card-body">
        <div className="card-header">
          <img className='card-img' src={img} alt="" />
        </div>
        <div className="card-content">
          <p className='title-learningPath'>{title}</p>
          <p className='desc-learningPath'>{desc}</p>
        </div>
      </div>
      <div className="card-footer">
        <Button desc='Selengkapnya' link={`/learning-path/${id}`} />
      </div>
    </div>
  );
}
export default LearnPathCard;