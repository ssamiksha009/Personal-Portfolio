// Contact.jsx
import React from 'react';
import '../App.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">Feel free to reach out through any of the following platforms:</p>
      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:ss6632@srmist.edu.in" className="contact-link">ss6632@srmist.edu.in</a>
        </div>
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <a href="tel:+919962589093" className="contact-link">+91 99625 89093</a>
        </div>
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/in/samiksha-s-891b5428b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            linkedin.com/in/samiksha-s
          </a>
        </div>
        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a 
            href="https://github.com/ssamiksha009" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            github.com/ssamiksha009
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
