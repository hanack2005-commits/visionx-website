import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import "./Home.css";

function Home() {
  const softwareServices = [
    {
      title: "Web Development",
      desc: "Modern, scalable and responsive web applications for business growth.",
      icon: "🌐",
    },
    {
      title: "App Development",
      desc: "Cross-platform and native mobile applications with smooth performance.",
      icon: "📱",
    },
    {
      title: "Enterprise Software",
      desc: "Secure and high-performance business systems for complex workflows.",
      icon: "🏢",
    },
  ];

  const cyberServices = [
    {
      title: "Penetration Testing",
      desc: "Identify vulnerabilities before attackers do.",
      icon: "🛡️",
    },
    {
      title: "Cloud Security",
      desc: "Secure cloud workloads and prevent digital breaches.",
      icon: "☁️",
    },
    {
      title: "SOC Monitoring",
      desc: "Real-time threat detection and incident response support.",
      icon: "📡",
    },
  ];

  const works = [
    {
      title: "Corporate Business Website",
      desc: "A premium digital presence focused on trust, branding, and clarity.",
    },
    {
      title: "Internship Portal",
      desc: "A modern platform for program discovery, onboarding, and engagement.",
    },
    {
      title: "Cybersecurity Dashboard",
      desc: "A smart interface for monitoring risks, alerts, and security visibility.",
    },
  ];

  const training = [
    "Advanced React",
    "Spring Boot Bootcamp",
    "Ethical Hacking",
    "AI & Machine Learning",
  ];

  return (
    <MainLayout>
      <main className="home-page">
        <section className="hero-section">
          <div className="hero-blur hero-blur-1"></div>
          <div className="hero-blur hero-blur-2"></div>

          <div className="home-container hero-grid">
            <div className="hero-content">
              <p className="hero-tag">Innovation • Software • Cybersecurity</p>

              <h1>
                Build Premium
                <br />
                Digital Experiences
              </h1>

              <p className="hero-text">
                VisionX delivers cutting-edge software development,
                cybersecurity solutions, and scalable digital systems that help
                businesses grow securely and professionally.
              </p>

              <div className="hero-points">
                <span>Scalable Software Solutions</span>
                <span>Advanced Cybersecurity</span>
                <span>Modern Digital Platforms</span>
              </div>

              <div className="hero-buttons">
                <Link to="/solutions" className="primary-btn">
                  Explore Solutions
                </Link>
                <Link to="/contact" className="secondary-btn">
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-panel">
                <p className="hero-panel-label">Performance Snapshot</p>

                <div className="hero-stats-grid">
                  <div className="hero-stat-card">
                    <h3>15+</h3>
                    <p>Years Experience</p>
                  </div>

                  <div className="hero-stat-card">
                    <h3>2000+</h3>
                    <p>Projects Delivered</p>
                  </div>

                  <div className="hero-stat-card">
                    <h3>300+</h3>
                    <p>Happy Clients</p>
                  </div>

                  <div className="hero-stat-card">
                    <h3>24/7</h3>
                    <p>Security Thinking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="home-container">
            <p className="trust-title">Trusted Technology Direction</p>

            <div className="trust-grid">
              <div className="trust-item">Software Excellence</div>
              <div className="trust-item">Security First</div>
              <div className="trust-item">Cloud Ready</div>
              <div className="trust-item">Innovation Focus</div>
              <div className="trust-item">Professional Delivery</div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="home-container">
            <div className="two-col">
              <div className="premium-card">
                <p className="section-label">About VisionX</p>
                <h2>Technology Built for Growth, Security, and Performance</h2>
                <p>
                  VisionX is a next-generation technology company specializing
                  in software development, cybersecurity, and digital
                  innovation.
                </p>
                <p>
                  We help startups, enterprises, and institutions transform
                  ideas into secure, scalable, and high-performance digital
                  solutions that drive real business growth.
                </p>

                <Link to="/about" className="text-link">
                  Learn More →
                </Link>
              </div>

              <div className="visual-box visual-box-one"></div>
            </div>
          </div>
        </section>

        <section className="section-block dark-section">
          <div className="home-container">
            <div className="section-head">
              <div>
                <p className="section-label">Software Services</p>
                <h2>Modern Digital Products and Systems</h2>
                <p className="section-subtext">
                  Solutions designed for performance, usability, and long-term
                  scalability.
                </p>
              </div>

              <Link to="/software" className="outline-btn">
                View All
              </Link>
            </div>

            <div className="grid-3">
              {softwareServices.map((item, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="home-container">
            <div className="section-head">
              <div>
                <p className="section-label">Cybersecurity</p>
                <h2>Advanced Protection for Modern Infrastructure</h2>
                <p className="section-subtext">
                  Security-focused services built to reduce risk and strengthen
                  resilience.
                </p>
              </div>

              <Link to="/cybersecurity" className="outline-btn">
                View All
              </Link>
            </div>

            <div className="grid-3">
              {cyberServices.map((item, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block dark-section">
          <div className="home-container">
            <div className="section-head">
              <div>
                <p className="section-label">Our Works</p>
                <h2>Featured Project Highlights</h2>
                <p className="section-subtext">
                  A showcase of impactful digital solutions and real-world
                  execution.
                </p>
              </div>

              <Link to="/portfolio" className="outline-btn">
                View Portfolio
              </Link>
            </div>

            <div className="grid-3">
              {works.map((item, index) => (
                <div className="project-card" key={index}>
                  <div className={`project-visual project-visual-${index + 1}`}></div>
                  <div className="project-body">
                    <span className="project-tag">Case Study</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link to="/portfolio" className="text-link">
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="home-container">
            <div className="section-head">
              <div>
                <p className="section-label">Training & Workshops</p>
                <h2>Programs for Students and Professionals</h2>
                <p className="section-subtext">
                  Industry-focused training to build practical skills and
                  real-world confidence.
                </p>
              </div>

              <Link to="/training" className="outline-btn">
                View Programs
              </Link>
            </div>

            <div className="training-grid">
              {training.map((item, index) => (
                <div className="training-pill" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="home-container">
            <div className="cta-box">
              <h2>Ready to Build Something Powerful?</h2>
              <p>
                Let’s transform your ideas into scalable and secure digital
                solutions with a modern and professional experience.
              </p>

              <div className="hero-buttons">
                <Link to="/contact" className="primary-btn dark-btn">
                  Contact Us
                </Link>
                <Link to="/solutions" className="secondary-btn light-btn">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Home;