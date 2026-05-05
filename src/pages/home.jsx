// src/pages/Home.jsx
import React from 'react';
import './pages.css'; // We'll add a few specific styles here
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PhotoGallery from '../components/PhotoGallery';



const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section glass-panel">
        <h1 className="hero-title">Preserving the Peaks</h1>
        <p className="hero-subtitle">
          Join the movement to keep the Himalayas pristine. 
          Discover, participate, and protect the natural beauty of the mountains.
        </p>
        <div className="hero-buttons">
       
          <button 
                 onClick={() => navigate('/volunteer')} 
                 className="btn-primary glass-panel">
                                                
                  Join a Drive
           </button>
          <button 
                 onClick={() => navigate('/achievements')} 
                 className="btn-secondary glass-panel">
                                                
                    Learn More
           </button>

           <section style={{ width: '100%', maxWidth: '1200px', marginTop: '50px' }}>
             <PhotoGallery title="Recent Cleanups" />
           </section>
          
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="info-grid">
        <div className="info-card glass-panel">
          <h3>The Crisis</h3>
          <p>Rising tourism leaves tons of plastic waste across high-altitude trails, threatening local ecosystems and wildlife.</p>
        </div>
        <div className="info-card glass-panel">
          <h3>Our Mission</h3>
          <p>To organize community-led cleanup drives, spread awareness, and implement sustainable waste management systems.</p>
        </div>
        <div className="info-card glass-panel">
          <h3>Your Impact</h3>
          <p>Every piece of trash removed brings us one step closer to restoring the sacred balance of these mountains.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;