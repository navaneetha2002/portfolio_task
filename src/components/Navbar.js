import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import "./Navbar.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 
import githubLogo from '../assets/images/github.png';
import linkedinLogo from '../assets/images/linkedin.png';

const Navbar = () => {
  const location = useLocation(); 
  const [isMobile, setIsMobile] = useState(false); 


  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <div className="navbar">
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className={location.pathname === '/profile' ? 'active' : ''}>
          <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        
        <li>
          <a className="nav-link-img1" href="https://github.com/navaneetha2002" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="nav-image" />
          </a>
        </li>
        <li>
          <a className="nav-link-img2" href="https://www.linkedin.com/in/navaneetha-prakash-56a90726b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="nav-image" />
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        
        <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
      </div>
    </div>
  );
};

export default Navbar;
