const PhotoGallery = ({ photos }) => {
  if (!photos || photos.length === 0) {
    return <p>No photos available at the moment.</p>;
  }

  return (
    <div className="photo-gallery-grid">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img src={photo.url} alt={photo.caption || `Himalaya clean up ${index + 1}`} />
          {photo.caption && <p className="photo-caption">{photo.caption}</p>}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;