// src/components/PortfolioPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Fetch portfolio items from backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/portfolio')
      .then((response) => {
        setPortfolioItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching portfolio items:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>My Portfolio</h2>
      <div className="row">
        {portfolioItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
