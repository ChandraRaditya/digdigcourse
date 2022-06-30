import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import About from "../../Component/About";
import Materi from "../../Component/Materi";
import { getCourseDetailData } from "../../Helper/getData";
import { detailedCoursesQuery } from "../../Redux/sliceDetailedCourses";
import "./index.css";

const CourseDetail = () => {
  const { id } = useParams<{ id?: string | undefined }>();
  const currentData = useSelector(
    (state: any) => state.detailedCoursesData.value
  );
  const dispatch = useDispatch();

  // console.log("ini dari redux", currentData.courseName);

  useEffect(() => {
    // dispatch(detailedCoursesQuery(getCourseDetailData()));
    const getCourseData = getCourseDetailData();
    const pathName = id?.replace(/-/g, "").toLowerCase();
    const coursesDetail = getCourseData?.filter(
      (data: any) =>
        data.courseName.replace(/\s/g, "").toLowerCase() === pathName
    );
    // console.log("ini var getdata", coursesDetail?.[0].courseName);
    dispatch(detailedCoursesQuery(coursesDetail?.[0]));
  }, []);

  return (
    <div>
      <div className="card-detail-banner-container">
        <div className="banner-wrap">
          <div className="banner-content-left">
            <h1 className="title">{currentData?.courseName}</h1>
            <div className="little-card-container">
              <p>{currentData?.level}</p>
              <p>{currentData?.hours} Jam Belajar</p>
              <p>{currentData?.courseName}</p>
            </div>
            <p className="course-detail-line-box">
              <button>Mulai Belajar</button>
            </p>
          </div>
          <div className="banner-content-right">
            <img src={currentData?.imgUrl} alt="" />
          </div>
        </div>
      </div>
      <div className="silabus">
        <div className="silabus-container">
          <a href="#materi-course" className="silabus-button">
            <p>Lihat Silabus</p>
          </a>
        </div>
      </div>
      <div className="course-detail-card-content-container">
        <About />
        <Materi />
      </div>
    </div>
  );
};

export default CourseDetail;
