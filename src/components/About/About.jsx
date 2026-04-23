import "./About.css";

function About({ showHeader = true }) {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          {showHeader && <h2>About VisionX</h2>}

          <p>
            VisionX is a modern technology company focused on delivering
            high-quality software, websites, and digital solutions.
          </p>

          <p>
            We help businesses grow with innovative technology and
            professional digital experiences that build trust and results.
          </p>
        </div>

        <div className="about-right">
          <div className="about-box">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

          <div className="about-box">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="about-box">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;