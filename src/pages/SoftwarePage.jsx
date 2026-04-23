import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import "./SoftwarePage.css";

function SoftwarePage() {
  const softwareServices = [
    {
      title: "Web Development",
      slug: "web-development",
      tech: "React • Node.js • MongoDB",
      description: "Modern, scalable and responsive web applications.",
      icon: "🌐",
    },
    {
      title: "App Development",
      slug: "app-development",
      tech: "Flutter • React Native • Android",
      description: "Cross-platform and native mobile applications.",
      icon: "📱",
    },
    {
      title: "Enterprise Software",
      slug: "enterprise-software",
      tech: "Java • Spring Boot • .NET",
      description: "Secure and high-performance business systems.",
      icon: "🏢",
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      tech: "Figma • Adobe XD",
      description: "User-centered interface design solutions.",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      tech: "AWS • Azure • Docker",
      description: "Reliable and scalable cloud infrastructure.",
      icon: "☁️",
    },
    {
      title: "E-Commerce Development",
      slug: "e-commerce-development",
      tech: "Shopify • MERN • Payment Gateway",
      description: "Custom online stores with secure payment integration.",
      icon: "🛒",
    },
    {
      title: "API Development",
      slug: "api-development",
      tech: "REST • GraphQL • JWT",
      description: "Secure and scalable API architecture.",
      icon: "🔗",
    },
    {
      title: "AI & Machine Learning",
      slug: "ai-machine-learning",
      tech: "Python • TensorFlow • OpenCV",
      description: "Intelligent systems powered by modern AI technologies.",
      icon: "🤖",
    },
    {
      title: "DevOps & CI/CD",
      slug: "devops-cicd",
      tech: "Docker • GitHub Actions • Kubernetes",
      description: "Automated deployment and continuous integration pipelines.",
      icon: "⚙️",
    },
    {
      title: "Database Engineering",
      slug: "database-engineering",
      tech: "MySQL • PostgreSQL • MongoDB",
      description: "Optimized and secure database architecture.",
      icon: "🗄️",
    },
    {
      title: "Custom Software Solutions",
      slug: "custom-software-solutions",
      tech: "Full Stack • Microservices",
      description: "Tailored software solutions for business needs.",
      icon: "🧩",
    },
    {
      title: "SaaS Development",
      slug: "saas-development",
      tech: "Multi-tenant • Cloud • Scalable",
      description: "Build scalable software-as-a-service platforms.",
      icon: "🚀",
    },
  ];

  return (
    <MainLayout>
      <PageBanner
        title="Software Services"
        subtitle="Building modern, scalable, and high-performance applications."
      />

      <section className="software-page">
        <div className="software-container">
          <div className="software-intro">
            <div className="software-intro-card">
              <p className="section-label">Software Excellence</p>
              <h2>Digital Products Built for Real Business Growth</h2>
              <p>
                We design and develop software solutions tailored to your
                business needs. From startups to enterprise systems, our
                solutions are built to scale, perform, and deliver measurable
                value.
              </p>
              <p>
                Our approach combines clean architecture, modern interfaces,
                strong performance, and long-term maintainability.
              </p>
            </div>

            <div className="software-intro-visual"></div>
          </div>

          <div className="software-grid">
            {softwareServices.map((service, index) => (
              <div className="software-card" key={index}>
                <div className="software-card-top">
                  <div className="software-icon">{service.icon}</div>
                  <div className="software-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p className="software-tech">{service.tech}</p>
                <p className="software-description">{service.description}</p>

                <Link
                  to={`/services/software/${service.slug}`}
                  className="software-btn"
                >
                  More Details
                </Link>
              </div>
            ))}
          </div>

          <div className="software-process">
            <h2>How We Work</h2>

            <div className="process-grid">
              <div className="process-box">
                <span>01</span>
                <h3>Discovery</h3>
                <p>
                  We understand your business goals, users, and technical
                  requirements.
                </p>
              </div>

              <div className="process-box">
                <span>02</span>
                <h3>Planning</h3>
                <p>
                  We define the architecture, user experience, and delivery
                  roadmap.
                </p>
              </div>

              <div className="process-box">
                <span>03</span>
                <h3>Development</h3>
                <p>
                  We build clean, scalable, and responsive software systems.
                </p>
              </div>

              <div className="process-box">
                <span>04</span>
                <h3>Launch</h3>
                <p>
                  We deploy, optimize, and support your solution for real-world
                  success.
                </p>
              </div>
            </div>
          </div>

          <div className="software-cta">
            <h2>Need a Modern Software Solution?</h2>
            <p>
              Let’s build something scalable, secure, and professionally crafted
              for your business.
            </p>

            <div className="software-cta-buttons">
              <Link to="/contact" className="software-primary-btn">
                Start a Project
              </Link>
              <Link to="/portfolio" className="software-secondary-btn">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default SoftwarePage;