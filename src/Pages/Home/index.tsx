import "./index.css";
import CardHome from "../../Component/CardHome";
import { useEffect, useState } from "react";
import { getData } from "../../Helper/getData";
import { List } from "../../Helper/interface";
import bottomImage from "../../Assets/Images/home-content.jpg";
import { Link } from "react-router-dom";

function Home() {
  const [learningPath, setLearningPath] = useState([]);

  useEffect(() => {
    getData()
      .then((response: any) => {
        setLearningPath(response["LearningPath"].List);
      })
      .catch((e: any) => console.log("Error", e));
  }, []);

  const cardContent = learningPath?.map((x: List) => {
    return (
      <CardHome
        key={x.id}
        learningPathName={x.learningPathName}
        info={x.info}
        hours={x.hours}
        level={x.level}
        id={x.id}
        imgUrl={x.imgUrl}
        courses={x.courses} // courseCount={x.courses.length}
      />
    );
  });

  return (
    <div className="Home-page-section">
      <div className="banner">
        <div className="banner-content-container">
          <div className="cover-container">
            <div className="cover-text-container">
              <h1 className="cover-title">
                Belajar Di DigDigCourse Dimanapun Dan Kapanpun
              </h1>
              <p className="cover-text">
                DigDigCourse menyediakan berbagai pilihan Learning Path untuk
                meningkatkan keterampilan Coding
              </p>
            </div>
            <div className="cover-image">
              <img src={require("../../Assets/Images/kid.png")} alt="" />
            </div>
          </div>
          <div className="keuntungan-box">
            <p className="keuntungan-title">Keuntungan Membeli Produk</p>
            <div className="keuntungan-container">
              <div className="keuntungan-item">
                <p>
                  <span className="text-color">Koleksi</span> Lengkap{" "}
                  <span className="text-color">Learning Path</span>
                </p>
              </div>
              <div className="keuntungan-item">
                <p>
                  Mudah <span className="text-color">Dipelajari</span>
                </p>
              </div>
              <div className="keuntungan-item">
                <p>
                  Kurikulum <span className="text-color">Ter-update</span>
                </p>
              </div>
              <div className="keuntungan-item">
                <p>
                  <span className="text-color">Dipelajari</span> Darimana saja
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-home-section">
        <div className="card-home-container">
          <p className="card-home-title">
            Kelas DigDigCourse Berbasis Industri
          </p>
          <div className="card-home-component-container">{cardContent}</div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-section-container">
          <div className="bottom-section-image-container">
            <img src={bottomImage} alt="" />
          </div>
          <div className="bottom-content-container">
            <h2>Lihat Koleksi Course dari DigDigCourse</h2>
            <p>
              Tambah ilmu serta pengetahuan tentang programming. Kamu bisa pilih
              Learning Path Yang di inginkan
            </p>
            <Link to="/learning-path-collection">
              <button className="bottom-content-button">
                Lihat Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
