import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import "./PortfolioPage.css";

function PortfolioPage() {
  const projects = [
    {
      title: "Corporate Business Website",
      slug: "corporate-business-website",
      category: "Business Website",
      tech: "React • Node.js • MongoDB",
      description:
        "A premium company website focused on branding, trust, and client engagement.",
      result: "Improved presentation quality and stronger digital credibility.",
      visualClass: "project-visual-1",
    },
    {
      title: "Internship Portal",
      slug: "internship-portal",
      category: "Training Platform",
      tech: "React • API Integration • Dashboard UI",
      description:
        "A digital platform for training discovery, student engagement, and onboarding.",
      result: "Streamlined user flow and better program visibility.",
      visualClass: "project-visual-2",
    },
    {
      title: "Cybersecurity Dashboard",
      slug: "cybersecurity-dashboard",
      category: "Security System",
      tech: "React • Charts • Secure Monitoring",
      description:
        "A smart monitoring interface for threats, risks, and real-time visibility.",
      result: "Faster insights and stronger operational awareness.",
      visualClass: "project-visual-3",
    },
    {
      title: "E-Commerce Platform",
      slug: "e-commerce-platform",
      category: "Commerce Solution",
      tech: "MERN • Payment Integration • Admin Panel",
      description:
        "A scalable online store built for secure transactions and product growth.",
      result: "Better customer conversion and smooth product management.",
      visualClass: "project-visual-4",
    },
    {
      title: "Cloud Migration Solution",
      slug: "cloud-migration-solution",
      category: "Cloud Infrastructure",
      tech: "AWS • Docker • Deployment Automation",
      description:
        "A migration project that moved legacy systems into a cloud-ready environment.",
      result: "Improved scalability, reliability, and deployment efficiency.",
      visualClass: "project-visual-5",
    },
    {
      title: "Mobile Service App",
      slug: "mobile-service-app",
      category: "Mobile Application",
      tech: "Flutter • API • Notification System",
      description:
        "A cross-platform mobile app for user engagement and service access.",
      result: "Improved accessibility and faster user interaction.",
      visualClass: "project-visual-6",
    },
  ];

  return (
    <MainLayout>
      <PageBanner
        title="Our Works"
        subtitle="Delivering real-world solutions with measurable impact."
      />

      <section className="portfolio-page">
        <div className="portfolio-container">
          <div className="portfolio-intro">
            <div className="portfolio-intro-card">
              <p className="section-label">Featured Projects</p>
              <h2>Real Digital Solutions for Modern Business Needs</h2>
              <p>
                Explore our portfolio of successful projects across software
                development, cybersecurity, cloud solutions, and digital
                platforms.
              </p>
              <p>
                Each project is designed to solve a clear business problem while
                maintaining professional presentation, usability, and
                performance.
              </p>
            </div>

            <div className="portfolio-intro-visual"></div>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div className="portfolio-card" key={index}>
                <div className={`portfolio-visual ${project.visualClass}`}></div>

                <div className="portfolio-body">
                  <span className="portfolio-tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="portfolio-tech">{project.tech}</p>
                  <p className="portfolio-description">{project.description}</p>
                  <p className="portfolio-result">
                    <strong>Result:</strong> {project.result}
                  </p>

                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="portfolio-btn"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-highlights">
            <div className="portfolio-highlight-card">
              <h3>Business Focus</h3>
              <p>
                Every project is aligned with clear business goals, user needs,
                and long-term value.
              </p>
            </div>

            <div className="portfolio-highlight-card">
              <h3>Design Quality</h3>
              <p>
                Strong layouts, clean visuals, and professional UI are part of
                every solution we build.
              </p>
            </div>

            <div className="portfolio-highlight-card">
              <h3>Scalable Delivery</h3>
              <p>
                From startup products to enterprise systems, our work is built
                for growth and reliability.
              </p>
            </div>
          </div>

          <div className="portfolio-cta">
            <h2>Need a Stronger Digital Presence?</h2>
            <p>
              Let’s create a modern digital solution that looks professional,
              performs well, and communicates trust.
            </p>

            <div className="portfolio-cta-buttons">
              <Link to="/contact" className="portfolio-primary-btn">
                Start a Project
              </Link>
              <Link to="/software" className="portfolio-secondary-btn">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default PortfolioPage;