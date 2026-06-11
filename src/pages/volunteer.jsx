import React, { useState } from 'react';
import axios from 'axios'; // Added missing import
import { useNavigate } from 'react-router-dom'; // Added missing import
import './pages.css';

const Volunteer = () => {
  const navigate = useNavigate(); // Initialized navigate
  
  // Define your API URL (Ideally from an environment variable)
  const apiUrl = process.env.VITE_API_URL ;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    region: '',
    motivation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      
    try {
      // Send the formData state directly
      const response = await axios.post(
        `${apiUrl}/api/auth/volunteer/register`, 
        formData, 
        { withCredentials: true }
      );

      console.log('Server Response:', response.data);
      console.log('Form Data Submitted:', formData);
      
      alert(`Thank you, ${formData.fullName}! Your application to protect the Himalayas has been received.`);
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        region: '',
        motivation: ''
      });
    } catch (error) {
      console.error("There was an error registering:", error);
      alert("Failed to submit the application. Please try again.");
    }
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header glass-panel">
        <h1 className="page-title">Become a Volunteer</h1>
        <p className="page-subtitle">
          We need passionate individuals to lead clean-up drives, educate tourists, and help us preserve the mountains. Fill out the form below to join our volunteer network.
        </p>
      </header>

      {/* Form Section */}
      <div className="form-container glass-panel">
        <form onSubmit={handleSubmit} className="volunteer-form">
          
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g., Ananya Sharma"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="ananya@example.com"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="region">Preferred Volunteer Region</label>
            <select 
              id="region" 
              name="region" 
              className="form-control"
              value={formData.region}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a Region</option>
              <option value="kedarnath">Kedarnath Trail</option>
              <option value="badrinath">Badrinath & Mana</option>
              <option value="rishikesh">Rishikesh River Banks</option>
              <option value="valley-of-flowers">Valley of Flowers</option>
              <option value="roopkund">Roopkund Trek</option>
              <option value="other">Other / Flexible</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="motivation">Why do you want to join us?</label>
            <textarea 
              id="motivation" 
              name="motivation" 
              className="form-control"
              value={formData.motivation}
              onChange={handleChange}
              placeholder="Tell us a little about your connection to nature and why you want to help..."
              required 
            ></textarea>
          </div>

          <button type="submit" className="btn-primary submit-btn glass-panel">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;