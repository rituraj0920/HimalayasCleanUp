import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Background Overlay for mobile */}
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>

      <nav className="navbar glass-panel">
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-icon">🏔️</span> EcoHimalaya
          </Link>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-menu ${isOpen ? 'active glass-panel' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/awareness" className="nav-links" onClick={closeMenu}>Awareness</Link>
            </li>
            <li className="nav-item">
              <Link to="/campaigns" className="nav-links" onClick={closeMenu}>Campaigns</Link>
            </li>
            <li className="nav-item">
              <Link to="/achievements" className="nav-links" onClick={closeMenu}>Achievements</Link>
            </li>
            <li className="nav-item">
              <Link to="/volunteer" className="nav-links" onClick={closeMenu}>Volunteer</Link>
            </li>
            <li className="nav-item nav-btn">
              <Link to="/donate" className="btn-primary donate-btn" onClick={closeMenu}>Donate</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;