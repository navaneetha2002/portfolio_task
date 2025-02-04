import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectDetails.css';
import Navbar from './Navbar';

const ProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fallbackImage = "../assets/error.jpg"; 

  useEffect(() => {
    
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/projects/${id}`);

        console.log('Fetched Project Data:', response.data);

        const projectWithImage = {
          ...response.data,
          image: `http://localhost:8080/api/projects/${id}/image`,
        };

        setProject(projectWithImage);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="project-details-container">
        {project ? (
          <>
            <h1 className="project-title">{project.name}</h1>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
              onError={(e) => e.target.src = fallbackImage} 
            />
            <p className="project-description">{project.description}</p>
          </>
        ) : (
          <div>No project found.</div>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
