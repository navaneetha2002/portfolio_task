import './Contact.css';
import connect from '../assets/images/connect.png';
import { Link } from 'react-router-dom'; 

import React, { useState } from "react";

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
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">HOME</Link>
          </li>
        </ul>
      </nav>
      <div className="containercontact">
        {/* Connect image */}
        <div className="connectimg">
          <img src={connect} alt="connect" className="img-connect" />
        </div>

        {/* Contact form */}
        <form className="contactforms" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label-name">NAME</label>
            <input type="text" id="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label-email">EMAIL</label>
            <input type="email" id="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label-subject">SUBJECT</label>
            <input type="text" id="subject" className="form-control" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label-msg">MESSAGE</label>
            <textarea id="message" className="form-control-msg" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>

        {/* Heading and Paragraph */}
        <div className="text-content">
          <h1>REACH OUT TO ME!</h1>
          <p>Got feedback or questions? Drop me a note!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
