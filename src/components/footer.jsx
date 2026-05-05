import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper glass-panel">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">🏔️</span> EcoHimalaya
          </Link>
          <p className="footer-description">
            Dedicated to preserving the pristine beauty of the Himalayas through community action, awareness, and sustainable practices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/awareness">The Crisis</Link></li>
            <li><Link to="/campaigns">Clean-up Drives</Link></li>
            <li><Link to="/achievements">Our Impact</Link></li>
            <li><Link to="/volunteer">Become a Volunteer</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="footer-section contact-section">
          <h3>Connect With Us</h3>
          <p>📍 Srinagar, Uttarakhand, India</p>
          <p>📧 contact@ecohimalaya.org</p>
          <div className="social-links">
            {/* Replace # with your actual social links */}
            <a href="#" className="social-icon" aria-label="Instagram">IG</a>
            <a href="#" className="social-icon" aria-label="Facebook">FB</a>
            <a href="#" className="social-icon" aria-label="Twitter">X</a>
          </div>
          <Link to="/donate" className="btn-primary footer-donate-btn glass-panel">
            Support Our Cause
          </Link>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EcoHimalaya. All rights reserved. | "Leave No Trace"</p>
      </div>
    </footer>
  );
};

export default Footer;