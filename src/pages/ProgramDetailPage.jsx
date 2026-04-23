import { Link, useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import "./DetailPages.css";

function ProgramDetailPage() {
  const { slug } = useParams();

  const programs = {
    "advanced-react": {
      title: "Advanced React",
      tech: "React • Hooks • three.js",
      description:
        "A practical program covering advanced React patterns, component thinking, optimization, and modern frontend structure.",
    },
    "spring-boot-bootcamp": {
      title: "Spring Boot Bootcamp",
      tech: "Java • Spring Boot • REST",
      description:
        "A structured backend development program focused on enterprise APIs, architecture, and practical implementation.",
    },
    "ethical-hacking": {
      title: "Ethical Hacking",
      tech: "Kali Linux • VAPT",
      description:
        "A cybersecurity program focused on vulnerability testing, security awareness, and practical ethical hacking workflows.",
    },
    "ai-machine-learning": {
      title: "AI & Machine Learning",
      tech: "Python • ML • TensorFlow",
      description:
        "A modern learning program for intelligent systems, practical AI tools, and real-world ML thinking.",
    },
    "cloud-deployment": {
      title: "Cloud Deployment",
      tech: "AWS • Docker • CI/CD",
      description:
        "A cloud-focused program for deployment workflows, containerization, and scalable application delivery.",
    },
    "ui-ux-masterclass": {
      title: "UI/UX Masterclass",
      tech: "Figma • UX Research",
      description:
        "A design program centered on user-focused interfaces, usability thinking, and professional digital presentation.",
    },
    "devops-training": {
      title: "DevOps Training",
      tech: "Docker • Kubernetes • CI/CD",
      description:
        "A program focused on deployment pipelines, infrastructure thinking, and practical DevOps workflows.",
    },
    "cyber-defense-pro": {
      title: "Cyber Defense Pro",
      tech: "SIEM • SOC • Threat Analysis",
      description:
        "A cybersecurity operations program that introduces monitoring, incident visibility, and practical defense workflows.",
    },
  };

  const item = programs[slug];

  if (!item) {
    return (
      <MainLayout>
        <section className="detail-page">
          <div className="detail-container">
            <div className="detail-card">
              <h1 className="detail-title">Program Not Found</h1>
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
            <span className="detail-badge">Training Program</span>

            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-tech">{item.tech}</p>
            <p className="detail-description">{item.description}</p>

            <div className="detail-grid">
              <div className="detail-box">
                <h3>What You Learn</h3>
                <ul>
                  <li>Practical, skill-based learning</li>
                  <li>Industry-relevant tools and workflows</li>
                  <li>Project-ready confidence and exposure</li>
                </ul>
              </div>

              <div className="detail-box">
                <h3>Who It Is For</h3>
                <p>
                  Ideal for students, freshers, and early professionals who want
                  stronger technical confidence and real-world relevance.
                </p>
              </div>
            </div>

            <div className="detail-actions">
              <Link to="/contact" className="detail-primary-btn">Enroll Now</Link>
              <Link to="/training" className="detail-secondary-btn">Back to Training</Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ProgramDetailPage;