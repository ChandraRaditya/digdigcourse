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
  const pathName = id?.replace(/-/g, " ").toLowerCase();
  const coursesDetail = currentData?.filter(
    (data: any) => data.courseName.toLowerCase() === pathName
  );

  console.log(coursesDetail);

  useEffect(() => {
    dispatch(detailedCoursesQuery(getCourseDetailData()));
  }, []);

  return (
    <div>
      <div className="card-detail-banner-container">
        <div className="banner-wrap">
          <div className="banner-content-left">
            <h1 className="title">HTML</h1>
            <div className="little-card-container">
              <p>Pemula</p>
              <p>16 Jam Belajar</p>
              <p>HTML</p>
            </div>
            <p className="course-detail-line-box">
              <button>Mulai Belajar</button>
            </p>
          </div>
          <div className="banner-content-right">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="silabus">
        <div className="silabus-container">
          <div className="silabus-button">
            <p>Lihat Silabus</p>
          </div>
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
