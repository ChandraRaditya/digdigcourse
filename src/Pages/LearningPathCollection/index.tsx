import "./index.css";
import LearnPathCard from "../../Component/LearningPathListCard";
import Banner from "../../Assets/Images/BannerLearnPath.png";
import Track from "../../Component/Data";
import { useEffect, useState } from "react";
import { getListData } from "../../Helper/getData";
import { List } from "../../Helper/interface";

function LearningPathCollection() {
  const [learningPath, setLearningPath] = useState<List[] | undefined>([]);

  useEffect(() => {
    setLearningPath(getListData());
  }, []);

  const LearningPathList = learningPath?.map((item) => {
    return (
      <LearnPathCard
        title={item.learningPathName}
        desc={item.info}
        img={item.imgUrl}
      />
    );
  });
  return (
    <div className="learning-path-wrapper">
      <div className="learning-path-banner">
        <img className="banner-img" src={Banner} alt="" />
      </div>
      <h1>Learning Path List</h1>
      <div className="learning-path-list-wrapper">{LearningPathList}</div>
    </div>
  );
}

export default LearningPathCollection;
