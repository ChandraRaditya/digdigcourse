// <<<<<<< HEAD
import CourseLeftContent from "../../Component/CourseReadContent";
import CourseQuizContent from "../../Component/CourseQuizContent";
import ButtonCourse from "../../Component/ButtonCourse";
import "./index.css";
import CourseReadContent from "../../Component/CourseReadContent";
import { useEffect } from "react";
import { getCourseDetailData, getMaterialsData } from "../../Helper/getData";
import { useParams } from "react-router-dom";
import { detailedMaterialsQuery } from "../../Redux/sliceDetailedMaterials";
import { useDispatch, useSelector } from "react-redux";
import { Materials, ParamTypes } from "../../Helper/interface";

function Course() {
  const { id } = useParams<ParamTypes>();
  const { idMaterial } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const currentData: Materials[] = useSelector(
    (state: any) => state.detailedMaterialsData.value
  );
  const idCourse = getCourseDetailData();
  const data = localStorage.getItem("obj");
  // const checkIdCourse = idCourse?.filter((data) => {
  //   data.courseName.toLowerCase() === id;
  // });

  // console.log("ini redux", checkIdCourse);

  useEffect(() => {
    const getMaterials = getMaterialsData();
    dispatch(detailedMaterialsQuery(getMaterials));
    window.scrollTo(0, 0);
  }, [data, dispatch]);

  const getContentCourse = currentData?.filter(
    (data: any) => data.id === idMaterial
  );

  // const getDataMaterial =

  const moduleMaterials = currentData?.map((data) => {
    return <ButtonCourse title={data.title} idMaterials={data.id} />;
  });

  // console.log("content", getContentCourse);

  const contentCourse =
    getContentCourse?.[0]?.type === "article" ? (
      <CourseReadContent />
    ) : (
      <CourseQuizContent />
    );

  return (
    <div className="course-section">
      <div className="course-section-container">
        <h2>HTML COURSE</h2>
        <div className="course-component-container">
          <div className="course-item">
            <h1>Modul Belajar</h1>
            {moduleMaterials}
          </div>
          {contentCourse}
        </div>
      </div>
    </div>
  );
}

export default Course;

// import "./index.css";
// import ButtonCourse from "../../Component/ButtonCourse";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// const Course = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="course-wrapper">
//       <div className="course-title">
//         <h1>HTML Course</h1>
//       </div>
//       <div className="course-content">
//         <div className="course-item">
//           <h1>Modul belajar</h1>
//           {[...new Array(6)].map(() => (
//             <ButtonCourse desc="modul" link="/question" />
//           ))}
//         </div>
//         <div className="course-description">
//           <h1 className="course-description-title">course</h1>
//           <p style={{ fontSize: "24px" }}>
//             {[...new Array(6)]
//               .map(
//                 () => `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam corrupti porro possimus quae doloribus. Totam debitis ad,
//                                 quasi cumque possimus sed eius necessitatibus earum, a aut odio, porro obcaecati voluptas.`
//               )
//               .join("\n")}
//           </p>
//           <div className="course-action">
//             <Link to="/question" className="btn-course-action">
//               Selanjutnya
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Course;
