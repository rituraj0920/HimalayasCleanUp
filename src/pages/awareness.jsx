import React from 'react';
import './pages.css';

const Awareness = () => {
  return (
    <div className="page-container">
      {/* Page Header */}
      <header className="awareness-header glass-panel">
        <h1 className="page-title">The Fragile Ecosystem</h1>
        <p className="page-subtitle">
          The Himalayas are the water tower of Asia and home to unique biodiversity. 
          But unprecedented footfall is pushing this delicate environment to its breaking point.
        </p>
      </header>

      {/* Content Sections */}
      <div className="awareness-content">
        
        {/* Section 1: The Problem */}
        <section className="glass-panel content-card">
          <div className="card-text">
            <h2>The Weight of Tourism</h2>
            <p>
              Millions of visitors travel to the high altitudes every year. While this brings economic growth, 
              it also leaves behind a trail of single-use plastics, discarded gear, and unregulated waste. 
              In freezing temperatures, this waste does not decompose, permanently scarring the landscape and polluting glacier-fed rivers.
            </p>
          </div>
          <div className="card-image-placeholder img-plastic">
            {/* If you have local images in src/assets, replace this div with an <img src={yourImage} /> */}
            <span>🏔️ Trash on Trails</span>
          </div>
        </section>

        {/* Section 2: The Impact (Reversed Layout) */}
        <section className="glass-panel content-card reverse">
          <div className="card-text">
            <h2>Threat to Flora & Fauna</h2>
            <p>
              Microplastics and toxic runoff from open dump sites threaten the native wildlife, including the elusive Snow Leopard and Himalayan Monal. 
              Alpine vegetation, which takes decades to grow in harsh conditions, is frequently trampled or destroyed by expanding campsites.
            </p>
          </div>
          <div className="card-image-placeholder img-wildlife">
            <span>🐾 Endangered Life</span>
          </div>
        </section>

        {/* Section 3: The Solution */}
        <section className="glass-panel content-card">
          <div className="card-text">
            <h2>Leave No Trace</h2>
            <p>
              The solution begins with accountability. We advocate for the <strong>"Leave No Trace"</strong> principles:
            </p>
            <ul className="guidelines-list">
              <li>Pack out everything you pack in.</li>
              <li>Use reusable water bottles and avoid single-use plastics.</li>
              <li>Stay on designated trails to protect alpine flora.</li>
              <li>Support local eco-friendly businesses and homestays.</li>
            </ul>
          </div>
          <div className="card-image-placeholder img-clean">
            <span>🌱 Sustainable Trekking</span>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Awareness;