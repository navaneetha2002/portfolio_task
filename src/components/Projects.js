import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import filmroll from '../assets/images/filmroll.png';

const Projects = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
          </ul>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h1>My Projects</h1>
        <div className="content">
          <div className="text-section">
            <h2>BLOODBANK MANAGEMENT SYSTEM</h2>
            <p className="description">
              My role in this mini project was mainly on the front end and documentation part.
            </p>
            <h2>VOICE ASSISSTED EMAIL SYSTEM</h2>
            <p className="description">
              In this project, a whole new database was created from scratch and I played a major role in that. It involved TTS and STT conversions and training a joint intent and slot filling model.
            </p>
            <h2>GRIEVANCE MANAGEMENT SYSTEM</h2>
            <p className="description">
              This project allowed me to take part in the backend part using Java Spring Boot as well as frontend using React.
            </p>
          </div>
          <div className="image-section">
            <img src={filmroll} alt="film" className="filmroll" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
