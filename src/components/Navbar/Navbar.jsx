import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-wrap" onClick={closeMenu}>
          <div className="logo-icon">V</div>
          <h2 className="logo-text">
            VISION<span>X</span>
          </h2>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/" className={isActive("/")} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/software"
              className={isActive("/software")}
              onClick={closeMenu}
            >
              Software
            </Link>
          </li>
          <li>
            <Link
              to="/cybersecurity"
              className={isActive("/cybersecurity")}
              onClick={closeMenu}
            >
              Cybersecurity
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={isActive("/portfolio")}
              onClick={closeMenu}
            >
              Our Works
            </Link>
          </li>
          <li>
            <Link
              to="/training"
              className={isActive("/training")}
              onClick={closeMenu}
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="contact-btn" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;