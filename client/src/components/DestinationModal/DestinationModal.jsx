import React from 'react';
import './DestinationModal.css';

const DestinationModal = ({ destination, onClose }) => {
  if (!destination) return null;

  return (
    <div className="dest-modal-overlay" onClick={onClose}>
      <div className="dest-modal" onClick={(e) => e.stopPropagation()}>
        <button className="dest-modal-close" onClick={onClose}>✕</button>
        <div className="dest-modal-header">
          <img src={destination.image} alt={destination.name} className="dest-modal-image" />
          <div className="dest-modal-title">
            <h2>{destination.name}</h2>
            <p className="dest-tagline">{destination.tagline}</p>
          </div>
        </div>

        <div className="dest-modal-body">
          <p className="dest-about">{destination.about}</p>

          <div className="dest-grid">
            <div>
              <h4>Location</h4>
              <p>{destination.location}</p>
            </div>
            <div>
              <h4>Elevation</h4>
              <p>{destination.elevation || '—'}</p>
            </div>
            <div>
              <h4>Best Time</h4>
              <p>{destination.bestTime}</p>
            </div>
            <div>
              <h4>Avg Price</h4>
              <p>{destination.pricePerPerson ? `$${destination.pricePerPerson}` : '—'}</p>
            </div>
          </div>

          <h4>Things to do</h4>
          <ul className="dest-things">
            {destination.thingsToDo && destination.thingsToDo.slice(0,8).map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
