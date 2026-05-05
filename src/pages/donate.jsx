import React, { useState } from 'react';
import './pages.css';

const Donate = () => {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    pan: '' // PAN is often required for Indian NGO donations (80G tax exemption)
  });

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    
    if (!finalAmount || finalAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Here you would integrate Razorpay, Stripe, or PayU
    console.log(`Initiating payment of ₹${finalAmount} for`, formData);
    alert(`Thank you, ${formData.fullName}! Redirecting to secure payment gateway for ₹${finalAmount}...`);
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header glass-panel">
        <h1 className="page-title">Fuel the Movement</h1>
        <p className="page-subtitle">
          Your contribution directly funds cleanup logistics, local waste management infrastructure, and awareness campaigns across the high altitudes.
        </p>
      </header>

      {/* Donate Layout (Split Screen) */}
      <div className="donate-layout">
        
        {/* Left Side: Impact Info */}
        <div className="donate-info glass-panel">
          <h2>Your Impact</h2>
          <div className="impact-item">
            <h3>₹ 500</h3>
            <p>Provides reusable safety gear and biodegradable trash bags for one volunteer.</p>
          </div>
          <div className="impact-item">
            <h3>₹ 2,000</h3>
            <p>Funds the transportation of 50kg of non-biodegradable waste from basecamps to recycling centers.</p>
          </div>
          <div className="impact-item">
            <h3>₹ 5,000+</h3>
            <p>Helps install bear-proof, weather-resistant waste bins along major trekking routes like Kedarnath and Roopkund.</p>
          </div>
          
        </div>

        {/* Right Side: Donation Form */}
        <div className="donate-form glass-panel">
          <form onSubmit={handlePayment} className="volunteer-form">
            
            <div className="form-group">
              <label>Select Amount (₹)</label>
              <div className="amount-selector">
                <button type="button" className={`amount-btn ${amount === 500 ? 'active' : ''}`} onClick={() => handleAmountClick(500)}>₹500</button>
                <button type="button" className={`amount-btn ${amount === 1000 ? 'active' : ''}`} onClick={() => handleAmountClick(1000)}>₹1,000</button>
                <button type="button" className={`amount-btn ${amount === 2000 ? 'active' : ''}`} onClick={() => handleAmountClick(2000)}>₹2,000</button>
                <button type="button" className={`amount-btn ${amount === 5000 ? 'active' : ''}`} onClick={() => handleAmountClick(5000)}>₹5,000</button>
              </div>
              <input 
                type="number" 
                className="form-control custom-amount" 
                placeholder="Or enter custom amount" 
                value={customAmount}
                onChange={handleCustomAmountChange}
                onClick={() => setAmount('custom')}
                min="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="pan">PAN Number (Optional, for 80G receipt)</label>
              <input type="text" id="pan" name="pan" className="form-control" value={formData.pan} onChange={handleChange} maxLength="10" placeholder="ABCDE1234F" style={{ textTransform: 'uppercase' }} />
            </div>

            <button type="submit" className="btn-primary submit-btn glass-panel" style={{ marginTop: '20px' }}>
              Proceed to Pay {amount === 'custom' && customAmount ? `₹${customAmount}` : amount !== 'custom' ? `₹${amount}` : ''}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Donate;