import Logo from "../../Assets/Logo/logo.svg";

function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-item-container">
          <h2 className="footer-item-title">Social Media::</h2>
          <p className="footer-item-text">facebook</p>
          <p className="footer-item-text">twitter</p>
          <p className="footer-item-text">instagram</p>
        </div>
        <div className="footer-item-container">
          <h2 className="footer-item-title">Social Media::</h2>
          <p className="footer-item-text">facebook</p>
          <p className="footer-item-text">twitter</p>
          <p className="footer-item-text">instagram</p>
        </div>
        <div className="footer-item-container">
          <h2 className="footer-item-title">Social Media::</h2>
          <p className="footer-item-text">facebook</p>
          <p className="footer-item-text">twitter</p>
          <p className="footer-item-text">instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
