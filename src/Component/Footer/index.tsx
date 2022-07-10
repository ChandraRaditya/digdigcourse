import "./index.css";
import Logo from "../../Assets/Logo/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo-container">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="footer-item-container">
          <h2 className="footer-item-title">Social Media:</h2>
          <p className="footer-item-text">facebook</p>
          <p className="footer-item-text">twitter</p>
          <p className="footer-item-text">instagram</p>
        </div>
        <div className="footer-item-container">
          <h2 className="footer-item-title">Bantuan:</h2>
          <p className="footer-item-text">Syarat dan Ketentuan</p>
          <p className="footer-item-text">Kebijakan</p>
          <p className="footer-item-text">Bantuan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
