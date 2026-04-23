import { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio({ showHeader = true }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "Business Website",
      title: "Corporate Business Website",
      description:
        "A clean and modern company website designed to improve brand image, trust, and client engagement.",
      details:
        "This project focuses on responsive design, strong branding, fast loading speed, and a modern user experience for business growth.",
      imageClass: "portfolio-image-1"
    },
    {
      id: 2,
      category: "Training Platform",
      title: "Internship Portal",
      description:
        "A platform for students to explore programs, register online, and connect with mentors and opportunities.",
      details:
        "This project includes a registration flow, dashboard concepts, student-friendly layout, and professional training program presentation.",
      imageClass: "portfolio-image-2"
    },
    {
      id: 3,
      category: "Security System",
      title: "Cybersecurity Dashboard",
      description:
        "A smart dashboard concept for monitoring alerts, analyzing risks, and viewing real-time security reports.",
      details:
        "This project is designed to visualize threats, show security insights, and provide a clean interface for monitoring critical data.",
      imageClass: "portfolio-image-3"
    }
  ];

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        {showHeader && <h2>Our Projects</h2>}

        {showHeader && (
          <p className="portfolio-subtitle">
            A showcase of professional digital solutions built for modern businesses.
          </p>
        )}

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card" key={project.id}>
              <div className={`portfolio-image ${project.imageClass}`}></div>

              <div className="portfolio-body">
                <span className="portfolio-tag">{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {project.id === 1 ? (
                  <Link to="/project" className="portfolio-btn-link">
                    View Project
                  </Link>
                ) : (
                  <button
                    className="portfolio-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="portfolio-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="portfolio-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="portfolio-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div
              className={`portfolio-image modal-image ${selectedProject.imageClass}`}
            ></div>

            <span className="portfolio-tag">
              {selectedProject.category}
            </span>

            <h3>{selectedProject.title}</h3>

            <p>{selectedProject.description}</p>

            <p>{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;