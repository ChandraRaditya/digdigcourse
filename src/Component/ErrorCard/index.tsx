import "./index.css";
import NotFound from "../../Assets/Images/404.svg";

const ErrorCard = () => {
  return (
    <div className="error-card">
      <div className="error-image">
        <img src={NotFound} alt="" />
      </div>
      <p className="error-text">Upsss Halamannya Belum Dibikin</p>
    </div>
  );
};

export default ErrorCard;
