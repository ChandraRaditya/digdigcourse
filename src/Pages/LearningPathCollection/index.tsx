import React from 'react'; 
import './index.css';
// import { useEffect, useState } from 'react';
import LearnPathCard from "../../Component/LearningPathListCard";
import Banner from "../../Assets/Images/BannerLearnPath.png";
import Data from "../../Component/Data";

function LearningPathCollection() {
  // const [value, setValue] = useState(
  //   JSON.parse(localStorage.getItem('DataCourse') || ''
  // ))
  // console.log(value)

  return (
    <div className='learning-path-wrapper'>
      <div className="banner">
        <img className='banner-img' src={Banner} alt="" />
      </div>
      <h1>Learning Path List</h1>
      <div className="learning-path-list-wrapper">
        {Data.map((item) => (
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



