import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import "./SolutionsPage.css";

function SolutionsPage() {
  const solutions = [
    {
      title: "Software Development",
      subtitle: "Web, mobile, and enterprise systems",
      description:
        "Modern software products built for performance, scalability, and long-term business value.",
      icon: "💻",
      items: ["Web Applications", "Mobile Apps", "Enterprise Software"],
      linkText: "Explore Software Services",
      link: "/software",
    },
    {
      title: "Cybersecurity",
      subtitle: "Protection for digital infrastructure",
      description:
        "Advanced security services designed to reduce risk, strengthen systems, and improve resilience.",
      icon: "🔐",
      items: ["Penetration Testing", "Cloud Security", "SOC Monitoring"],
      linkText: "Explore Cybersecurity",
      link: "/cybersecurity",
    },
    {
      title: "Training & Workshops",
      subtitle: "Programs for students and professionals",
      description:
        "Practical, industry-focused training programs designed to build modern technical skills and confidence.",
      icon: "🎓",
      items: ["React Training", "Ethical Hacking", "AI & ML"],
      linkText: "Explore Training",
      link: "/training",
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Infrastructure, automation, deployment",
      description:
        "Cloud-ready systems and DevOps practices built for speed, reliability, and efficient delivery.",
      icon: "☁️",
      items: ["Cloud Deployment", "CI/CD", "Containerization"],
      linkText: "View Related Services",
      link: "/software",
    },
    {
      title: "Digital Transformation",
      subtitle: "Better systems and better experiences",
      description:
        "We help organizations modernize processes, improve digital presence, and create business-ready solutions.",
      icon: "🚀",
      items: ["Workflow Improvement", "Modern Interfaces", "Scalable Platforms"],
      linkText: "See Our Works",
      link: "/portfolio",
    },
    {
      title: "Design & Experience",
      subtitle: "Clear interfaces and stronger user journeys",
      description:
        "Elegant and user-centered design solutions that improve trust, usability, and product clarity.",
      icon: "🎨",
      items: ["UI/UX Design", "Brand Presentation", "Interaction Design"],
      linkText: "Explore Portfolio",
      link: "/portfolio",
    },
  ];

  return (
    <MainLayout>
      <PageBanner
        title="Our Solutions"
        subtitle="Technology solutions designed for performance, scalability, and security."
      />

      <section className="solutions-page">
        <div className="solutions-container">
          <div className="solutions-intro">
            <div className="solutions-intro-card">
              <p className="section-label">Solution Areas</p>
              <h2>Everything You Need to Build, Secure, and Grow Digitally</h2>
              <p>
                VisionX provides a connected ecosystem of digital services that
                support modern business needs, technical growth, and stronger
                user experiences.
              </p>
              <p>
                From software and cybersecurity to training and digital
                transformation, our solutions are designed to deliver practical
                results with a premium standard of execution.
              </p>
            </div>

            <div className="solutions-intro-visual"></div>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div className="solution-card" key={index}>
                <div className="solution-card-top">
                  <div className="solution-icon">{solution.icon}</div>
                  <div className="solution-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3>{solution.title}</h3>
                <p className="solution-subtitle">{solution.subtitle}</p>
                <p className="solution-description">{solution.description}</p>

                <div className="solution-list">
                  {solution.items.map((item, itemIndex) => (
                    <span key={itemIndex}>{item}</span>
                  ))}
                </div>

                <Link to={solution.link} className="solution-btn">
                  {solution.linkText}
                </Link>
              </div>
            ))}
          </div>

          <div className="solutions-why">
            <h2>Why Our Solution Structure Works</h2>

            <div className="solutions-why-grid">
              <div className="solutions-why-card">
                <h3>Connected Services</h3>
                <p>
                  Our solutions are designed to work together, making it easier
                  to build complete digital systems with clarity and consistency.
                </p>
              </div>

              <div className="solutions-why-card">
                <h3>Business Relevance</h3>
                <p>
                  Every solution area is aligned with practical business needs,
                  real user journeys, and performance outcomes.
                </p>
              </div>

              <div className="solutions-why-card">
                <h3>Professional Delivery</h3>
                <p>
                  We focus on design quality, technical strength, and credible
                  presentation in every engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="solutions-cta">
            <h2>Need the Right Digital Direction?</h2>
            <p>
              Explore the solution path that best matches your goals and let
              VisionX help you move forward with confidence.
            </p>

            <div className="solutions-cta-buttons">
              <Link to="/contact" className="solutions-primary-link">
                Contact Us
              </Link>
              <Link to="/portfolio" className="solutions-secondary-link">
                View Our Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default SolutionsPage;