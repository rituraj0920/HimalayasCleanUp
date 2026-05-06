// src/pages/Campaigns.jsx
import React, { useState } from 'react';
import CampaignCard from '../components/campaignCard';
import './pages.css';

// Mock Data: Replace this with an API call later
const mockCampaigns = [
  {
    id: 1,
    title: "Kedarnath Basecamp Cleanup",
    date: "Oct 15, 2026",
    location: "Kedarnath, Uttarakhand",
    description: "A post-monsoon drive to clear plastic waste accumulated along the final 5km stretch to the temple.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsv0H5UG8te_3tGDu4BVa-guCyUpljrIZ3g&s",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Valley of Flowers Restoration",
    date: "Aug 02, 2026",
    location: "Chamoli District",
    description: "Removing micro-trash from the botanical trails without disturbing the blooming alpine flora.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKnmZH6WfSBVCeFfHgBR_iJCevdr8xh01Aw&s",
    status: "Completed"
  },
  {
    id: 3,
    title: "Roopkund Trail Sweep",
    date: "Nov 10, 2026",
    location: "Trishul Massif",
    description: "A high-altitude expedition targeting abandoned camping gear and non-biodegradable waste.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0js87-JrdoqV60RvUB_neuT_k1Zu6wcSOA&s",
    status: "Upcoming"
  },
  {
    id: 4,
    title: "Rishikesh Riverbank Drive",
    date: "Sep 25, 2026",
    location: "Rishikesh, Ganges",
    description: "Clearing the banks of the Ganges to prevent downstream microplastic pollution.",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop",
    status: "Completed"
  }
];

const Campaigns = () => {
  const [filter, setFilter] = useState('All');

  // Filter logic
  const filteredCampaigns = mockCampaigns.filter(campaign => {
    if (filter === 'All') return true;
    return campaign.status === filter;
  });

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header glass-panel">
        <h1 className="page-title">Action on the Ground</h1>
        <p className="page-subtitle">
          Explore our past achievements and register for upcoming cleanup drives. Every pair of hands makes a difference on the mountain.
        </p>
      </header>

      {/* Filter Controls */}
      <div className="filter-controls">
        <button 
          className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All Drives
        </button>
        <button 
          className={`filter-btn ${filter === 'Upcoming' ? 'active' : ''}`}
          onClick={() => setFilter('Upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`}
          onClick={() => setFilter('Completed')}
        >
          Completed
        </button>
      </div>

      {/* Campaigns Grid */}
      <div className="campaigns-grid">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <CampaignCard 
              key={campaign.id}
              title={campaign.title}
              date={campaign.date}
              location={campaign.location}
              description={campaign.description}
              image={campaign.image}
              status={campaign.status}
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', width: '100%', color: '#e0e0e0', padding: '40px' }}>
            No campaigns found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaigns;