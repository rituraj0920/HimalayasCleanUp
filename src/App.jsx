import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Navbar from './components/navbar';
import Footer from './components/footer';

// Import Pages
import Home from './pages/home';
import Awareness from './pages/awareness';
import Campaigns from './pages/campaigns';
import Achievements from './pages/achievements';
import Volunteer from './pages/volunteer';
import Donate from './pages/donate';
import '/src/app.css'

const App = () => {
  return (
    <Router>
      {/* The layout wrapper ensures the footer stays at the bottom 
        even if the page content is short. 
      */}
      <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Navbar stays at the top of every route */}
        <Navbar />

        {/* Main content area expands to fill available space */}
        <main className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            
            {/* Optional: A 404 Catch-all Route */}
            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2>404 - Page Not Found</h2>
                <p>Looks like you wandered off the trail!</p>
              </div>
            } />
          </Routes>
        </main>

        {/* Footer stays at the bottom of every route */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;