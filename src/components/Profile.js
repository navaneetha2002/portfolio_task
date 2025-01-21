import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Profile.css'; // Optional: Add custom CSS for Profile if needed
import profileImage1 from '../assets/images/codemeetcreativity.png';
import profileImage2 from '../assets/images/design_tmrw.png';
import logo1 from '../assets/images/c_logo.png';
import logo2 from '../assets/images/css.png';
import logo3 from '../assets/images/github.png';
import logo4 from '../assets/images/html.png';
import logo5 from '../assets/images/javalang.png';
import logo6 from '../assets/images/python_lang.png';
import logo7 from '../assets/images/react.png';
import logo8 from '../assets/images/springboot.png';

const Profile = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">HOME</Link>
          </li>
        </ul>
      </nav>

      <div className="profile-container">
        <div className="profile-header">
          <h1>ABOUT ME</h1>
          <p>
            Hi, I'm Navaneetha Prakash, an aspiring developer who is design enthusiastic and curious to learn.
          </p>
          <div>
            <img src={profileImage1} alt="Profile" className="profile-image-1" />
          </div>
        </div>

        {/* Second Row: Profile Image 2 and Header */}
        <div className="second-row">
          <div>
            <img src={profileImage2} alt="Profile" className="profile-image-2" />
          </div>
          <div>
            <h1>MY SKILLS <br /> INCLUDE </h1>
          </div>
          <div className="logo-container">
            <img src={logo1} alt="Logo 1" className="logo logo-1" />
            <img src={logo2} alt="Logo 2" className="logo logo-2" />
            <img src={logo3} alt="Logo 3" className="logo logo-3" />
            <img src={logo4} alt="Logo 4" className="logo logo-4" />
            <img src={logo5} alt="Logo 5" className="logo logo-5" />
            <img src={logo6} alt="Logo 6" className="logo logo-6" />
            <img src={logo7} alt="Logo 7" className="logo logo-7" />
            <img src={logo8} alt="Logo 8" className="logo logo-8" />
          </div>
        </div>

        <div className="third-row">
          <p1>
            Currently working as an Associate Software Engineer at Tarento Technologies Pvt Ltd.
          </p1>
          <p2>
            Eager to contribute in innovative projects and to explore and improve my back-end skills.
          </p2>
          <h1>EXPERIENCE <br /> AND GOALS </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
