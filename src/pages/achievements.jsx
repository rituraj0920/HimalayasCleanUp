import React from 'react';
import './pages.css';

// Mock data for the photo gallery
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    alt: "Volunteers cleaning a mountain trail"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1605001088653-f7728ce78cf2?q=80&w=1000&auto=format&fit=crop",
    alt: "Collected waste bags at basecamp"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    alt: "Pristine Himalayan peaks after a successful drive"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000&auto=format&fit=crop",
    alt: "Local community gathering for awareness"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop",
    alt: "Plantation drive in the lower Garhwal region"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1618477461853-cf6ed80f4125?q=80&w=1000&auto=format&fit=crop",
    alt: "Sorting recyclable plastics"
  }
];

const Achievements = () => {
  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header glass-panel">
        <h1 className="page-title">Our Impact</h1>
        <p className="page-subtitle">
          Through the dedication of our volunteers and the support of the community, we are slowly restoring the natural harmony of the mountains.
        </p>
      </header>

      {/* Stats/Milestones Section */}
      <section className="stats-container">
        <div className="stat-box glass-panel">
          <h2 className="stat-number">15,000+</h2>
          <p className="stat-label">KGs of Waste Removed</p>
        </div>
        <div className="stat-box glass-panel">
          <h2 className="stat-number">42</h2>
          <p className="stat-label">Clean-up Drives</p>
        </div>
        <div className="stat-box glass-panel">
          <h2 className="stat-number">1,200+</h2>
          <p className="stat-label">Active Volunteers</p>
        </div>
        <div className="stat-box glass-panel">
          <h2 className="stat-number">18</h2>
          <p className="stat-label">Trails Restored</p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-heading">Moments of Change</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item glass-panel">
              <img src={image.url} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;