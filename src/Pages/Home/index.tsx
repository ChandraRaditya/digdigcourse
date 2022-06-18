import "./index.css";

function Home() {
  return (
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
  );
}

export default Home;
