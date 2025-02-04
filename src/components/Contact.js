import React, { useState } from "react";
import Navbar from './Navbar';
import './Contact.css';
import contactimg from '../assets/images/plane.png';
import linkedinLogo from '../assets/images/linkedin.png'; // Replace with your image path
import githubLogo from '../assets/images/github.png'; // Replace with your image path

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="social-links">

      <div className="git">
        <a href="https://github.com/navaneetha2002" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
        </div>
        <div className="linkedin">
        <a href="https://www.linkedin.com/in/navaneetha-prakash-56a90726b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>
        </div>
       
        
      </div>
      <div className="containercontact">
        <div className="content-row">
          <div className="image-container">
            <img src={contactimg} alt="Contact Us" className="contact-image" />
          </div>
          <div className="form-container">
            <div className="text-content">
              <h1>REACH OUT TO ME!</h1>
              <p>Got feedback or questions? <br />Drop me a note!</p>
            </div>
            <form className="contactforms" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">NAME</label>
                <input
                  type="text"
                  id="name"
                  className="form-control-name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  className="form-control-email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  className="form-control-subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">MESSAGE</label>
                <textarea
                  id="message"
                  className="form-control-msg"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
