import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handlePortfolioClick = () => {
    navigate('/portfolio'); // Navigate to the Portfolio page
  };

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <div className="homepage-container">
      {/* Watermark Text */}
      <div className="watermark">PORTFOLIO</div>

      {/* Profile Image */}
      <img
        src="/images/girl img.jpeg" // Replace with your image URL
        alt="Profile"
        className="img-fluid"
      />
      
      {/* Name */}
      <h1>NAVANEETHA PRAKASH</h1>
      
      {/* Welcome Message */}
      <p>PORTFOLIO</p>
      
      {/* Buttons Container */}
      <div className="button-container">
        <button onClick={handlePortfolioClick} className="btn btn-primary">
          PROJECTS
        </button>
        <button onClick={handleContactClick} className="btn btn-secondary">
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default Homepage;
