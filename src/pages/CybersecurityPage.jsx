import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import "./CybersecurityPage.css";

function CybersecurityPage() {
  const securityServices = [
    {
      title: "Penetration Testing",
      slug: "penetration-testing",
      tech: "OWASP • Kali Linux • Burp Suite",
      description: "Identify vulnerabilities before attackers do.",
      icon: "🛡️",
    },
    {
      title: "Network Security",
      slug: "network-security",
      tech: "Firewalls • IDS/IPS • SIEM",
      description:
        "Protect infrastructure from internal and external threats.",
      icon: "🌐",
    },
    {
      title: "Cloud Security",
      slug: "cloud-security",
      tech: "AWS Shield • Azure Security • IAM",
      description: "Secure cloud workloads and prevent breaches.",
      icon: "☁️",
    },
    {
      title: "Security Auditing",
      slug: "security-auditing",
      tech: "Compliance • Risk Analysis • ISO",
      description:
        "Comprehensive security assessments and compliance audits.",
      icon: "📋",
    },
    {
      title: "Endpoint Protection",
      slug: "endpoint-protection",
      tech: "EDR • Antivirus • Monitoring",
      description: "Advanced endpoint monitoring and threat response.",
      icon: "💻",
    },
    {
      title: "SOC Monitoring",
      slug: "soc-monitoring",
      tech: "24/7 Monitoring • SIEM",
      description: "Real-time threat detection and incident response.",
      icon: "📡",
    },
  ];

  return (
    <MainLayout>
      <PageBanner
        title="Cybersecurity Services"
        subtitle="Protecting your digital assets with advanced security solutions."
      />

      <section className="cyber-page">
        <div className="cyber-container">
          <div className="cyber-intro">
            <div className="cyber-intro-card">
              <p className="section-label">Security First</p>
              <h2>Advanced Protection for Modern Digital Infrastructure</h2>
              <p>
                We provide comprehensive cybersecurity services to protect your
                systems, applications, data, and infrastructure from modern
                digital threats.
              </p>
              <p>
                Our approach combines proactive testing, real-time monitoring,
                risk reduction, and compliance awareness to strengthen business
                resilience.
              </p>
            </div>

            <div className="cyber-intro-visual"></div>
          </div>

          <div className="cyber-grid">
            {securityServices.map((service, index) => (
              <div className="cyber-card" key={index}>
                <div className="cyber-card-top">
                  <div className="cyber-icon">{service.icon}</div>
                  <div className="cyber-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p className="cyber-tech">{service.tech}</p>
                <p className="cyber-description">{service.description}</p>

                <Link
                  to={`/services/cybersecurity/${service.slug}`}
                  className="cyber-btn"
                >
                  More Details
                </Link>
              </div>
            ))}
          </div>

          <div className="cyber-process">
            <h2>Security Workflow</h2>

            <div className="cyber-process-grid">
              <div className="cyber-process-box">
                <span>01</span>
                <h3>Assessment</h3>
                <p>
                  We evaluate your environment, identify weak points, and define
                  the security scope.
                </p>
              </div>

              <div className="cyber-process-box">
                <span>02</span>
                <h3>Testing</h3>
                <p>
                  We perform structured analysis, penetration testing, and
                  targeted security reviews.
                </p>
              </div>

              <div className="cyber-process-box">
                <span>03</span>
                <h3>Protection</h3>
                <p>
                  We recommend and implement controls to strengthen your digital
                  defenses.
                </p>
              </div>

              <div className="cyber-process-box">
                <span>04</span>
                <h3>Monitoring</h3>
                <p>
                  We support visibility, incident response readiness, and
                  continuous security improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="cyber-highlights">
            <div className="cyber-highlight-card">
              <h3>Threat Prevention</h3>
              <p>
                Detect risks early and reduce the chance of disruption or data
                compromise.
              </p>
            </div>

            <div className="cyber-highlight-card">
              <h3>Compliance Readiness</h3>
              <p>
                Strengthen security posture with structured auditing and risk
                visibility.
              </p>
            </div>

            <div className="cyber-highlight-card">
              <h3>Continuous Protection</h3>
              <p>
                Build a strong long-term security foundation with monitoring and
                response support.
              </p>
            </div>
          </div>

          <div className="cyber-cta">
            <h2>Need Stronger Digital Protection?</h2>
            <p>
              Let’s secure your systems with modern cybersecurity services built
              for resilience, visibility, and trust.
            </p>

            <div className="cyber-cta-buttons">
              <Link to="/contact" className="cyber-primary-btn">
                Talk to Us
              </Link>
              <Link to="/portfolio" className="cyber-secondary-btn">
                View Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default CybersecurityPage;