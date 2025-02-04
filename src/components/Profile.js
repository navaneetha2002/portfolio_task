import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Profile.css';


const Profile = () => {

    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);
    const [aboutme, setAboutme] = useState([]);
  
   
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/skills'); 
        const updatedSkills = response.data.map((skill) => ({
          ...skill,
           image: `http://localhost:8080/api/skills/${skill.id}/image`,
          }));

  
        setSkills(updatedSkills);

        const educationResponse = await axios.get('http://localhost:8080/api/education');
        setEducation(educationResponse.data);

        const aboutmeResponse = await axios.get('http://localhost:8080/api/aboutme');
        setAboutme(aboutmeResponse.data);





      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);
  return (
    <div>
      
      <div>
      <Navbar />
      
    </div>
      <div className="profile-container">
       
        <div className="profile-header">
          <div className="profile-about">
            <h1>ABOUT ME</h1>
          </div>
          <div className="about-para">
          {aboutme.map((abt) => (
            <div key={abt.id}>
              <p>{abt.description}</p>
            </div>
          ))}
          </div>
          
        </div>

        
        <div className="second-row">
        
          
          <div>
            <h1>MY SKILLS  INCLUDE </h1>
          </div>

          <div className="logo-container">
            {console.log(`Skills: ${skills}`)}
            {skills.map((skill) => (
              <img
                src={skill.image} 
                alt="Skill Logo"
                className="logo"
              />
            ))}
          </div>

          
        </div>


        
        {/* Education Section */}
        <div className="fourth-row">
          <h1>EDUCATION</h1>
          {education.map((edu) => (
            <div key={edu.id}>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
     

        <div>
            
          </div>
      </div>
      
    </div>
  );
};

export default Profile;

