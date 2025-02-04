import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import profileImage from '../assets/images/girllaptop.json';
import Lottie from 'react-lottie';
import Navbar from './Navbar';

const Homepage = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleContactClick = () => {
    
    window.open('/assets/Resumee new Navn.pdf', '_blank');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: profileImage,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
};

  return (
    <div className="homepage-container">
      <div>
        <Navbar />
      </div>

      
      <div className="watermark watermark-1">PORTFOLIO</div>
      <div className="watermark watermark-2">PORTFOLIO</div>
      <div className="watermark watermark-3">PORTFOLIO</div>

     
      <div className='img-container'>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>

      <div>
        <h1 className='myname'>NAVANEETHA PRAKASH</h1>
      </div>

      
      <div className="text-container">
        <p>Lets Code, Create and Inspire together!</p>

        <div className="button-container">
          <button onClick={handleProfileClick} className="btn btn-tertiary">
            PROFILE
          </button>
          <button onClick={handleProjectsClick} className="btn btn-primary">
            PROJECTS
          </button>
          <button onClick={handleContactClick} className="btn btn-secondary">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
