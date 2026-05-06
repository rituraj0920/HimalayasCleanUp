import React, { useState, useEffect } from 'react';
import './components.css'; 

// Dummy data baked in for easy testing
const dummyImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    alt: "Volunteers cleaning a mountain trail"
  },
  {
    id: 2,
    url: "https://www.mayniladwater.com.ph/wp-content/uploads/2022/09/Sept-21-Maynilad-TV5-and-Phil-Navy-volunteers-for-Intl-Coastal-Cleanup-scaled.jpg",
    alt: "Collected waste bags at basecamp"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    alt: "Pristine Himalayan peaks after a successful drive"
  },
  {
    id: 4,
    url: "https://www.shivkhori.in/wp-content/uploads/2025/09/Kedarnath-768x614.webp",
    alt: "Local community gathering for awareness"
  }
];

const PhotoGallery = ({ title = "Moments of Change" }) => {
  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <div className="gallery-wrapper">
      {/* Optional Heading */}
      {title && <h2 className="section-heading">{title}</h2>}

      {/* Grid */}
      <div className="gallery-grid">
        {dummyImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item glass-panel"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.url} alt={image.alt} className="gallery-image" />
            <div className="gallery-overlay">
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default PhotoGallery;