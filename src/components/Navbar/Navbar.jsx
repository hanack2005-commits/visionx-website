import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <h2 className="logo">
          VISION<span>X</span>
        </h2>

        <ul className="nav-links">
          <li><Link to="/" className={isActive("/")}>Home</Link></li>
          <li><Link to="/about" className={isActive("/about")}>About</Link></li>
          <li><Link to="/software" className={isActive("/software")}>Software</Link></li>
          <li><Link to="/cybersecurity" className={isActive("/cybersecurity")}>Cybersecurity</Link></li>
          <li><Link to="/portfolio" className={isActive("/portfolio")}>Our Works</Link></li>
          <li><Link to="/training" className={isActive("/training")}>Our Services</Link></li>
          <li>
            <Link to="/contact" className="contact-btn">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;