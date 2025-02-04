import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Projects.css';
import Navbar from './Navbar';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const fallbackImage = "../assets/error.jpg"; 

  const handleViewMore = (id) => {
    navigate(`/projects/${id}`); 
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/projects");

        console.log("Fetched Data:", response.data);

       
        const updatedProjects = response.data.map((project) => ({
          ...project,
          image: `http://localhost:8080/api/projects/${project.id}/image`,
        }));

        setProjects(updatedProjects);
        console.log("Updated Projects State:", updatedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>My Projects</h1>

        <div className="main-content">
          {projects.map((project) => (
            <div className="project-section" key={project.id}>
              <div className="card">
                <img
                  className="card-animation"
                  src={project.image}
                  alt={project.name || "Project image"}
                  onError={(e) => {
                    e.target.src = fallbackImage; 
                  }}
                />
                <h2 className="card-title">{project.name}</h2>
              </div>
              <button
                className="view-more-btn"
                onClick={() => handleViewMore(project.id)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
