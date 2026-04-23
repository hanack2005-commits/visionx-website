import { Link, useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import "./DetailPages.css";

function ServiceDetailPage() {
  const { category, slug } = useParams();

  const services = {
    software: {
      "web-development": {
        title: "Web Development",
        tech: "React • Node.js • MongoDB",
        description:
          "We build modern, scalable, and responsive websites and web applications tailored for business growth, performance, and user experience.",
      },
      "app-development": {
        title: "App Development",
        tech: "Flutter • React Native • Android",
        description:
          "We create cross-platform and native mobile applications with strong performance, clean interfaces, and dependable architecture.",
      },
      "enterprise-software": {
        title: "Enterprise Software",
        tech: "Java • Spring Boot • .NET",
        description:
          "We develop secure and high-performance enterprise systems for complex business processes and internal operations.",
      },
      "ui-ux-design": {
        title: "UI/UX Design",
        tech: "Figma • Adobe XD",
        description:
          "We design clean, user-centered interfaces that improve usability, trust, and overall product clarity.",
      },
      "cloud-solutions": {
        title: "Cloud Solutions",
        tech: "AWS • Azure • Docker",
        description:
          "We provide reliable and scalable cloud infrastructure solutions for modern digital products and services.",
      },
      "e-commerce-development": {
        title: "E-Commerce Development",
        tech: "Shopify • MERN • Payment Gateway",
        description:
          "We build custom online stores with secure payment integration, optimized user journeys, and scalable architecture.",
      },
      "api-development": {
        title: "API Development",
        tech: "REST • GraphQL • JWT",
        description:
          "We create secure and scalable APIs that support modern integrations and backend communication.",
      },
      "ai-machine-learning": {
        title: "AI & Machine Learning",
        tech: "Python • TensorFlow • OpenCV",
        description:
          "We build intelligent solutions powered by modern AI technologies and practical data-driven workflows.",
      },
      "devops-cicd": {
        title: "DevOps & CI/CD",
        tech: "Docker • GitHub Actions • Kubernetes",
        description:
          "We implement automated deployment and continuous integration pipelines that improve delivery speed and reliability.",
      },
      "database-engineering": {
        title: "Database Engineering",
        tech: "MySQL • PostgreSQL • MongoDB",
        description:
          "We design optimized and secure database systems for performance, structure, and long-term scalability.",
      },
      "custom-software-solutions": {
        title: "Custom Software Solutions",
        tech: "Full Stack • Microservices",
        description:
          "We deliver tailored software solutions built around unique business requirements and workflows.",
      },
      "saas-development": {
        title: "SaaS Development",
        tech: "Multi-tenant • Cloud • Scalable",
        description:
          "We build scalable software-as-a-service platforms designed for multi-user environments and long-term growth.",
      },
    },
    cybersecurity: {
      "penetration-testing": {
        title: "Penetration Testing",
        tech: "OWASP • Kali Linux • Burp Suite",
        description:
          "We identify vulnerabilities before attackers do through structured security testing and practical risk analysis.",
      },
      "network-security": {
        title: "Network Security",
        tech: "Firewalls • IDS/IPS • SIEM",
        description:
          "We protect infrastructure from internal and external threats using layered network defense strategies.",
      },
      "cloud-security": {
        title: "Cloud Security",
        tech: "AWS Shield • Azure Security • IAM",
        description:
          "We secure cloud workloads, access control, and deployment environments to reduce exposure and risk.",
      },
      "security-auditing": {
        title: "Security Auditing",
        tech: "Compliance • Risk Analysis • ISO",
        description:
          "We perform structured security assessments, risk reviews, and compliance-focused auditing processes.",
      },
      "endpoint-protection": {
        title: "Endpoint Protection",
        tech: "EDR • Antivirus • Monitoring",
        description:
          "We provide advanced endpoint monitoring and response support to protect user systems and connected devices.",
      },
      "soc-monitoring": {
        title: "SOC Monitoring",
        tech: "24/7 Monitoring • SIEM",
        description:
          "We support real-time threat detection, incident visibility, and response readiness for modern security operations.",
      },
    },
  };

  const item = services[category]?.[slug];

  if (!item) {
    return (
      <MainLayout>
        <section className="detail-page">
          <div className="detail-container">
            <div className="detail-card">
              <h1 className="detail-title">Service Not Found</h1>
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
            <span className="detail-badge">
              {category === "software" ? "Software Service" : "Cybersecurity Service"}
            </span>

            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-tech">{item.tech}</p>
            <p className="detail-description">{item.description}</p>

            <div className="detail-grid">
              <div className="detail-box">
                <h3>What We Deliver</h3>
                <ul>
                  <li>Professional planning and execution</li>
                  <li>Modern tools and structured workflows</li>
                  <li>Scalable and business-ready delivery</li>
                </ul>
              </div>

              <div className="detail-box">
                <h3>Why It Matters</h3>
                <p>
                  This solution helps improve performance, reliability, user trust,
                  and long-term digital readiness.
                </p>
              </div>
            </div>

            <div className="detail-actions">
              <Link to="/contact" className="detail-primary-btn">Start a Project</Link>
              <Link
                to={category === "software" ? "/software" : "/cybersecurity"}
                className="detail-secondary-btn"
              >
                Back to {category === "software" ? "Software" : "Cybersecurity"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ServiceDetailPage;