import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-circle hero-bg-circle-1"></div>
      <div className="hero-bg-circle hero-bg-circle-2"></div>

      <div className="hero-content">
        <p className="hero-tag">Innovative Tech Solutions</p>

        <h1>
          Build Premium
          <br />
          Digital Experiences
        </h1>

        <p className="hero-description">
          VisionX creates software, websites, cybersecurity solutions, and
          digital platforms that help brands grow, build trust, and stand out
          professionally.
        </p>

        <div className="hero-points">
          <span>AI-Powered Solutions</span>
          <span>High-Impact Branding</span>
          <span>Secure Digital Systems</span>
        </div>

        <div className="hero-buttons">
          <Link to="/services" className="btn btn-primary">
            Explore Services
          </Link>

          <Link to="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <h3>2000+</h3>
            <p>Successful Projects</p>
          </div>

          <div className="hero-stat">
            <h3>300+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="hero-stat">
            <h3>100%</h3>
            <p>Professional Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;