import React, { useState } from "react";
import "../styles/Contact.css";
import data from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp message
    const { name, email, message } = formData;
    const whatsappMessage = encodeURIComponent(
      `Hello! I am ${name}.\n\nEmail: ${email}\nMessage: ${message}`
    );

    // Replace with your WhatsApp number
    const whatsappNumber = "+91 9763189395"; // Add your WhatsApp number here
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send via WhatsApp</button>
      </form>
      <div className="contact-info">
        <div className="address">
          <i className="fas fa-map-marker-alt"></i>
          <p>{data.contact.address}</p>
        </div>
        <div className="phone">
          <i className="fas fa-phone-alt"></i>
          <p>{data.contact.phone}</p>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          <p>{data.contact.email}</p>
        </div>
      </div>
      <div className="social-links">
        <p>Follow me on Social Media</p>
        <a href={data.contact.socialMedia.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href={data.contact.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={data.contact.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={data.contact.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href={data.contact.socialMedia.telegram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram"></i>
        </a>
        <a href={data.contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
