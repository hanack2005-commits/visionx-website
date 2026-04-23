import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3>VisionX</h3>
            <p>
              Empowering innovation through Software Development,
              Cybersecurity solutions, and professional digital deployment.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/software">Software</Link></li>
              <li><Link to="/cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/training">Training</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <p>hrvisionx@gmail.com</p>
            <p>
              Neeloth Plaza, Wayanad Rd, East Nadakkave, Kozhikode, Kerala
              673001
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 VisionX. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;