import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import './Projects.css';

// Import Lottie animation JSON files
import bloodbankAnimation from '../assets/images/bloodbank.json';
import voiceAssistantAnimation from '../assets/images/voiceassistant.json';
import grievanceAnimation from '../assets/images/grievance.json';

const projectData = [
  {
    id: 1,
    title: "BLOOD HUB",
    description: "An online blood bank management system was made which made it possible for donors to register themselves and donate blood and for recipients to request needed amount of blood of their required bloodtype and for blood donation units to schedule camps and assign each recipient with a corresponding nearest donor.",
    animation: bloodbankAnimation,
  },
  {
    id: 2,
    title: "HEAR ME",
    description: "An email system which operates through voice alone that enables the blinds to easily send, receive, and read mails without any help. A model is used which is trained to identify the keywords from the command of the user and do the corresponding function.",
    animation: voiceAssistantAnimation,
  },
  {
    id: 3,
    title: "HOSTEL CARE",
    description: "Helps to get feedback from the students in college hostels regarding the issues they face and a supervisor assigns each issue to an assignee who will resolve the corresponding issue. Multiple issues are taken care by different assignees and user can monitor the status of their issues.",
    animation: grievanceAnimation,
  }
];

const Projects = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">HOME</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h1>My Projects</h1>

        <div className="main-content">
          {/* Left Section: Text Content */}
          <div className="text-section">
            <h2>BLOODBANK MANAGEMENT SYSTEM</h2>
            <p>My role in this mini project was mainly on the front end designing the webpage and documentation part.<br/> It included multiple logins for donor, recipient, and bloodbank units and <br/> other functionalities like scheduling the camps, finding nearest donor, etc.</p>
            <button className="view-more-btn">View More</button>

            <h2>VOICE ASSISTED EMAIL SYSTEM FOR BLINDS <br/>USING JOINT INTENT AND SLOT FILLING MODEL</h2>
            <p>In this project, a whole new database was created from scratch and I played a major role in that.<br/> It involved TTS and STT conversions and training a joint intent and slot filling model.</p>
            <button className="view-more-btn">View More</button>

            <h2>GRIEVANCE MANAGEMENT SYSTEM</h2>
            <p>This project allowed me to take part in the backend part using Java Spring Boot as well as frontend <br/> using React. Postgres was used for the interaction with database</p>
            <button className="view-more-btn">View More</button>
          </div>

          {/* Right Section: Vertical Images */}
          <div className="image-section">
            {projectData.map((project) => (
              <div className="card" key={project.id}>
                {/* Lottie Animation */}
                <div className="card-animation">
                  <Player
                    autoplay
                    loop
                    src={project.animation}
                    style={{ height: '200px', width: '200px' }}
                  />
                </div>
                
                {/* Card Title */}
                <h2 className="card-title">{project.title}</h2>
                
                {/* Card Description */}
                <p className="card-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
