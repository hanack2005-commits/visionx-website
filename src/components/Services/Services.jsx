import { useRef } from "react";
import "./Services.css";

function Services({ showHeader = true }) {
  const sliderRef = useRef(null);

  const services = [
    {
      title: "Web Development",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Modern, scalable and responsive web applications.",
      icon: "🌐"
    },
    {
      title: "App Development",
      tech: ["Flutter", "React Native", "Android"],
      description: "Cross-platform and native mobile applications.",
      icon: "📱"
    },
    {
      title: "Enterprise Software",
      tech: ["Java", "Spring Boot", ".NET"],
      description: "Secure and high-performance business systems.",
      icon: "🏢"
    },
    {
      title: "UI/UX Design",
      tech: ["Figma", "Adobe XD", "Prototyping"],
      description: "Elegant and intuitive product experiences for modern users.",
      icon: "🎨"
    },
    {
      title: "Cloud Solutions",
      tech: ["AWS", "Azure", "Docker"],
      description: "Scalable infrastructure and cloud-ready deployments.",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      tech: ["VAPT", "SIEM", "Cloud Security"],
      description: "Protection-first systems with monitoring and hardening.",
      icon: "🔐"
    }
  ];

  function scrollLeft() {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  }

  return (
    <section className="services premium-services">
      <div className="services-container">
        {showHeader && (
          <div className="services-topbar">
            <div>
              <p className="section-mini-label">Our Best Services</p>
              <h2>Software & Technology Services</h2>
              <p className="services-subtitle">
                From business websites to enterprise systems, VisionX delivers
                modern digital solutions designed for growth, performance, and trust.
              </p>
            </div>

            <div className="services-nav-buttons">
              <button onClick={scrollLeft} aria-label="Scroll left">
                ←
              </button>
              <button onClick={scrollRight} aria-label="Scroll right">
                →
              </button>
            </div>
          </div>
        )}

        <div className="services-slider" ref={sliderRef}>
          {services.map((service, index) => (
            <div className="premium-service-card" key={index}>
              <div className="premium-service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="premium-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p className="premium-service-description">
                {service.description}
              </p>

              <div className="premium-service-tags">
                {service.tech.map((item, tagIndex) => (
                  <span key={tagIndex}>{item}</span>
                ))}
              </div>

              <button className="premium-service-btn">More Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;