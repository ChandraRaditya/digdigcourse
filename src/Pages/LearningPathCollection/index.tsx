import "./index.css";
import LearnPathCard from "../../Component/LearningPathListCard";
import Banner from "../../Assets/Images/BannerLearnPath.png";
import Track from "../../Component/Data";

function LearningPathCollection() {
  return (
    <div className="learning-path-wrapper">
      <div className="learning-path-banner">
        <img className="banner-img" src={Banner} alt="" />
      </div>
      <h1>Learning Path List</h1>
      <div className="learning-path-list-wrapper">
        {Track.map((item) => (
          <LearnPathCard
            title={item.name}
            desc={item.description}
            img={item.image}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default LearningPathCollection;
