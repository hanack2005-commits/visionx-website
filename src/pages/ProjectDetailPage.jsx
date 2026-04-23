import { Link, useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import "./DetailPages.css";

function ProjectDetailPage() {
  const { slug } = useParams();

  const projects = {
    "corporate-business-website": {
      title: "Corporate Business Website",
      tech: "React • Node.js • MongoDB",
      description:
        "A premium company website focused on branding, trust, and client engagement with a clean corporate presentation.",
    },
    "internship-portal": {
      title: "Internship Portal",
      tech: "React • API Integration • Dashboard UI",
      description:
        "A digital platform for training discovery, student engagement, and onboarding with better user flow and clarity.",
    },
    "cybersecurity-dashboard": {
      title: "Cybersecurity Dashboard",
      tech: "React • Charts • Secure Monitoring",
      description:
        "A smart monitoring interface for threats, risks, and real-time visibility built for operational awareness.",
    },
    "e-commerce-platform": {
      title: "E-Commerce Platform",
      tech: "MERN • Payment Integration • Admin Panel",
      description:
        "A scalable online store with secure transaction flow, product management, and better conversion support.",
    },
    "cloud-migration-solution": {
      title: "Cloud Migration Solution",
      tech: "AWS • Docker • Deployment Automation",
      description:
        "A migration solution that moves legacy systems into a cloud-ready environment for stronger scalability and performance.",
    },
    "mobile-service-app": {
      title: "Mobile Service App",
      tech: "Flutter • API • Notification System",
      description:
        "A cross-platform mobile application focused on accessibility, service delivery, and smoother user engagement.",
    },
  };

  const item = projects[slug];

  if (!item) {
    return (
      <MainLayout>
        <section className="detail-page">
          <div className="detail-container">
            <div className="detail-card">
              <h1 className="detail-title">Project Not Found</h1>
              <div className="detail-actions">
                <Link to="/" className="detail-primary-btn">Back Home</Link>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="detail-page">
        <div className="detail-container">
          <div className="detail-card">
            <span className="detail-badge">Case Study</span>

            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-tech">{item.tech}</p>
            <p className="detail-description">{item.description}</p>

            <div className="detail-grid">
              <div className="detail-box">
                <h3>Project Outcome</h3>
                <p>
                  The solution improved clarity, usability, professional presentation,
                  and overall digital value for the target use case.
                </p>
              </div>

              <div className="detail-box">
                <h3>Key Strengths</h3>
                <ul>
                  <li>Modern UI and structured design</li>
                  <li>Clear business purpose</li>
                  <li>Scalable technical direction</li>
                </ul>
              </div>
            </div>

            <div className="detail-actions">
              <Link to="/contact" className="detail-primary-btn">Start Similar Project</Link>
              <Link to="/portfolio" className="detail-secondary-btn">Back to Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ProjectDetailPage;