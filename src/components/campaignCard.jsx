// src/components/CampaignCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const CampaignCard = ({ title, date, location, description, image, status }) => {
  return (
    <div className="campaign-card glass-panel">
      {/* Dynamic Background Image */}
      <div 
        className="card-image" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      <div className="card-body">
        <div className="card-date">{date} • {status}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="card-footer">
          <span className="card-location">
            📍 {location}
          </span>
          {/* Conditional rendering: Only show Join button if the drive is upcoming */}
          {status === 'Upcoming' ? (
            <Link to="/volunteer" className="btn-primary" style={{ padding: '8px 16px', borderRadius: '5px', textDecoration: 'none', color: 'white', fontSize: '0.9rem' }}>
              Join Drive
            </Link>
          ) : (
             <span style={{ color: '#a0a0a0', fontSize: '0.9rem', fontStyle: 'italic' }}>
               Completed
             </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;