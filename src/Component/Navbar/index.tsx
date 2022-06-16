import "./index.css";
import Logo from "../../Assets/Logo/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="page-head">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="DigDigCourse Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="react-route-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/learning-path" className="react-route-link">
                Course
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
