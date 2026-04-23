import { useState } from "react";
import "./Contact.css";

function Contact({ showHeader = true }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccessMessage("Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  return (
    <section className="contact">
      <div className="contact-container">
        {showHeader && <h2>Contact Us</h2>}

        {showHeader && (
          <p className="contact-subtitle">
            Let’s discuss your project and build something professional together.
          </p>
        )}

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: hello@visionx.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Kozhikode, Kerala</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>

            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;