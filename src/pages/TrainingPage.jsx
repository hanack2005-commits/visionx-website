import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import "./TrainingPage.css";

function TrainingPage() {
  const programs = [
    {
      title: "Advanced React",
      slug: "advanced-react",
      tech: "React • Hooks • three.js",
      description:
        "Deep dive into advanced React concepts, performance optimization, and modern frontend patterns.",
      category: "Frontend Development",
      icon: "⚛️",
    },
    {
      title: "Spring Boot Bootcamp",
      slug: "spring-boot-bootcamp",
      tech: "Java • Spring Boot • REST",
      description:
        "Build enterprise backend systems with structured architecture and real-world APIs.",
      category: "Backend Development",
      icon: "☕",
    },
    {
      title: "Ethical Hacking",
      slug: "ethical-hacking",
      tech: "Kali Linux • VAPT",
      description:
        "Learn penetration testing, vulnerability assessment, and practical attack-defense thinking.",
      category: "Cybersecurity",
      icon: "🛡️",
    },
    {
      title: "AI & Machine Learning",
      slug: "ai-machine-learning",
      tech: "Python • ML • TensorFlow",
      description:
        "Build intelligent systems and understand practical AI workflows with modern tools.",
      category: "Artificial Intelligence",
      icon: "🤖",
    },
    {
      title: "Cloud Deployment",
      slug: "cloud-deployment",
      tech: "AWS • Docker • CI/CD",
      description:
        "Deploy scalable applications using cloud infrastructure and modern DevOps workflows.",
      category: "Cloud & DevOps",
      icon: "☁️",
    },
    {
      title: "UI/UX Masterclass",
      slug: "ui-ux-masterclass",
      tech: "Figma • UX Research",
      description:
        "Design modern and user-focused digital experiences with strong visual clarity and usability.",
      category: "Design",
      icon: "🎨",
    },
    {
      title: "DevOps Training",
      slug: "devops-training",
      tech: "Docker • Kubernetes • CI/CD",
      description:
        "Learn real-world DevOps tools, deployment pipelines, and infrastructure thinking.",
      category: "DevOps",
      icon: "⚙️",
    },
    {
      title: "Cyber Defense Pro",
      slug: "cyber-defense-pro",
      tech: "SIEM • SOC • Threat Analysis",
      description:
        "Understand enterprise monitoring, incident visibility, and security operations workflows.",
      category: "Cyber Defense",
      icon: "📡",
    },
  ];

  return (
    <MainLayout>
      <PageBanner
        title="Training & Workshops"
        subtitle="Professional tech programs for students and early professionals."
      />

      <section className="training-page">
        <div className="training-container">
          <div className="training-intro">
            <div className="training-intro-card">
              <p className="section-label">Career-Oriented Learning</p>
              <h2>Programs Designed for Practical Skills and Real-World Confidence</h2>
              <p>
                We offer industry-focused training programs designed to equip
                students and professionals with practical technical knowledge,
                project exposure, and modern tool familiarity.
              </p>
              <p>
                These programs are structured to feel relevant, current, and
                professionally aligned with real technology roles.
              </p>
            </div>

            <div className="training-intro-visual"></div>
          </div>

          <div className="training-benefits">
            <div className="training-benefit-card">
              <h3>Hands-On Learning</h3>
              <p>
                Programs focused on practical implementation rather than theory alone.
              </p>
            </div>

            <div className="training-benefit-card">
              <h3>Industry-Relevant Tools</h3>
              <p>
                Learn with modern technologies used in real software and security teams.
              </p>
            </div>

            <div className="training-benefit-card">
              <h3>Professional Exposure</h3>
              <p>
                Build confidence with project-based learning and structured guidance.
              </p>
            </div>
          </div>

          <div className="training-grid">
            {programs.map((program, index) => (
              <div className="training-card" key={index}>
                <div className="training-card-top">
                  <div className="training-icon">{program.icon}</div>
                  <div className="training-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <span className="training-category">{program.category}</span>

                <h3>{program.title}</h3>
                <p className="training-tech">{program.tech}</p>
                <p className="training-description">{program.description}</p>

                <div className="training-card-actions">
                  <Link
                    to={`/training/${program.slug}`}
                    className="training-btn-primary"
                  >
                    View Program
                  </Link>
                  <Link
                    to={`/training/${program.slug}`}
                    className="training-btn-secondary"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="training-cta">
            <h2>Ready to Strengthen Your Skills?</h2>
            <p>
              Explore professional programs designed to help you learn faster,
              build stronger projects, and move forward with confidence.
            </p>

            <div className="training-cta-buttons">
              <Link to="/contact" className="training-primary-link">
                Contact Us
              </Link>
              <Link to="/portfolio" className="training-secondary-link">
                View Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default TrainingPage;