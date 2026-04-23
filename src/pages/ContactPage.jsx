import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageBanner from "../components/PageBanner/PageBanner";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // 🔴 CHANGE THIS NUMBER TO YOUR WHATSAPP NUMBER
    const phoneNumber = "917306150981"; 

    const message = `Hello VisionX,%0A%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Subject: ${formData.subject}%0A
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Show success message
    setSuccessMessage("Redirecting to WhatsApp...");

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <MainLayout>
      <PageBanner
        title="Contact VisionX"
        subtitle="Let’s discuss your ideas, business goals, and digital requirements."
      />

      <section className="contact-page">
        <div className="contact-container">
          <div className="contact-intro">
            <div className="contact-intro-card">
              <p className="section-label">Let’s Connect</p>
              <h2>Build Something Amazing Together</h2>
              <p>
                Have a project in mind? Reach out to us and let’s discuss how
                we can help you turn your ideas into a secure, scalable, and
                professional digital solution.
              </p>
              <p>
                Whether you need software development, cybersecurity support,
                training, or a complete digital platform, VisionX is ready to
                help.
              </p>
            </div>

            <div className="contact-intro-visual"></div>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-info-card">
                <h3>Email</h3>
                <p>hrvisionx@gmail.com</p>
              </div>

              <div className="contact-info-card">
                <h3>Address</h3>
                <p>
                  Neeloth Plaza, Wayanad Rd, East Nadakkave, Kozhikode, Kerala
                  673001
                </p>
              </div>

              <div className="contact-info-card">
                <h3>Services</h3>
                <p>
                  Software Development, Cybersecurity, Training & Workshops,
                  Digital Solutions
                </p>
              </div>

              <div className="contact-info-card">
                <h3>WhatsApp</h3>
                <p>Chat with us directly</p>
              </div>
            </div>

            <form className="contact-form-panel" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send via WhatsApp</button>

              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </form>
          </div>

          <div className="contact-cta">
            <h2>We’re Ready to Help You Move Forward</h2>
            <p>
              Let’s turn your ideas into a polished digital experience that
              feels modern, credible, and business-ready.
            </p>

            <div className="contact-cta-buttons">
              <Link to="/software" className="contact-primary-link">
                Explore Software
              </Link>
              <Link to="/cybersecurity" className="contact-secondary-link">
                Explore Security
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ContactPage;