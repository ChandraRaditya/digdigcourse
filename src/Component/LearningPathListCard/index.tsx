import "./index.css";
import Button from "../Button";

interface IProps {
  desc: string;
  title: string;
  img: string;
}

const LearnPathCard: React.FC<IProps> = ({ title, desc, img }) => {
  const urlName = title.toLowerCase().replace(/\s/g, "-");
  return (
    <div className="learn-card-wrapper">
      <div className="card-body">
        <div className="card-header">
          <img className="card-img" src={img} alt="" />
        </div>
        <div className="card-content">
          <p className="title-learningPath">{title}</p>
          <p className="desc-learningPath">{desc}</p>
        </div>
      </div>
      <div className="card-footer">
        <Button link={`/learning-path/${urlName}`} />
      </div>
    </div>
  );
};
export default LearnPathCard;
