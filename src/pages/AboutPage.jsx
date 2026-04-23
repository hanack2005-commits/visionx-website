import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import "./AboutPage.css";

function AboutPage() {
  return (
    <MainLayout>
      <PageBanner
        title="About VisionX"
        subtitle="Empowering innovation. Securing the future."
      />

      <section className="about-page">
        <div className="about-container">
          {/* Who We Are */}
          <div className="about-grid">
            <div className="about-card">
              <p className="section-label">Who We Are</p>

              <h2>Technology Built for Growth & Security</h2>

              <p>
                VisionX is a next-generation technology company specializing in
                software development, cybersecurity, and digital innovation.
              </p>

              <p>
                We help startups, enterprises, and organizations transform ideas
                into secure, scalable, and high-performance digital solutions.
              </p>

              <p>
                Our team combines technical expertise with strategic thinking to
                deliver impactful technology that drives real business growth.
              </p>
            </div>

            <div className="about-visual"></div>
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div className="about-stat">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>

            <div className="about-stat">
              <h3>2000+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="about-stat">
              <h3>300+</h3>
              <p>Happy Clients</p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="about-vision">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To become a globally recognized technology partner delivering
                secure, scalable, and innovative digital solutions.
              </p>
            </div>

            <div className="vision-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with advanced technology solutions that
                enhance performance, security, and long-term growth.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="about-features">
            <h2>Why Choose VisionX</h2>

            <div className="feature-grid">
              <div className="feature-box">Industry Expertise</div>
              <div className="feature-box">Scalable Solutions</div>
              <div className="feature-box">Security-First Approach</div>
              <div className="feature-box">Client-Centric Development</div>
              <div className="feature-box">Continuous Innovation</div>
              <div className="feature-box">Modern Technologies</div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default AboutPage;