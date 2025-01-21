import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import profileImage from '../assets/images/girl2done.png';

const Homepage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleProjectsClick = () => {
    navigate('/projects'); // Navigate to the Projects page
  };

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the Profile page
  };

  return (
    <div className="homepage-container">
      {/* Watermark Texts */}
      <div className="watermark watermark-1">PORTFOLIO</div>
      <div className="watermark watermark-2">PORTFOLIO</div>
      <div className="watermark watermark-3">PORTFOLIO</div>
      <div className="watermark watermark-4">PORTFOLIO</div>

      {/* Profile Image */}
      <div className='img-container'>
        <img
          src={profileImage}
          alt="Profile"
          className="img-fluid"
        />
      </div>

      {/* Text and Buttons */}
      <div className="text-container">
        {/* Name */}
        <h1>NAVANEETHA PRAKASH</h1>

        {/* Welcome Message */}
        <p>
          Lets Code, Create and Inspire together!
        </p>

        {/* Buttons Container */}
        <div className="button-container">
        <button onClick={handleProfileClick} className="btn btn-tertiary">
            PROFILE
          </button>
          <button onClick={handleProjectsClick} className="btn btn-primary">
            PROJECTS
          </button>
          <button onClick={handleContactClick} className="btn btn-secondary">
            CONTACT ME
          </button>
          {/* New Profile Button */}
          
        </div>
      </div>
    </div>
  );
};

export default Homepage;
