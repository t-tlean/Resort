// src/components/MapSegment.js
// src/components/MapSegment.js
import React, { useState } from 'react';
import './MapSegment.css';
import mapImage from '../assets/map.jpg';

const houseData = {
  1: ['Cozy two-bedroom cottage.', 'Ideal for small families.', 'Close to main pool.'],
  2: ['Luxury suite with balcony.', 'Perfect for couples.', 'Great sunset view.'],
  3: ['Spacious family villa.', 'Includes kitchen and dining area.', 'Near the playground.'],
  4: ['Private bungalow.', 'Secluded area.', 'Surrounded by trees.'],
  5: ['Standard room with patio.', 'Good for short stays.', 'Near main lobby.'],
  6: ['Elegant beachfront unit.', 'Unobstructed ocean view.', 'Quick beach access.'],
  7: ['Budget option.', 'Compact and simple.', 'Close to parking.'],
  8: ['Modern loft style.', 'High ceiling interior.', 'Good light exposure.'],
  9: ['Hilltop villa.', 'Panoramic view of resort.', 'Quiet surroundings.'],
  10: ['Poolside room.', 'Steps away from water.', 'Ideal for kids.'],
  11: ['Classic cabin.', 'Rustic charm.', 'Good for long stays.'],
};

const positions = {
  1: { top: '9.38%', left: '1.95%' },
  2: { top: '5.86%', left: '9.38%' },
  3: { top: '8.21%', left: '18.36%' },
  4: { top: '24.03%', left: '17.97%' },
  5: { top: '34.01%', left: '17.58%' },
  6: { top: '40.45%', left: '11.33%' },
  7: { top: '35.76%', left: '3.91%' },
  8: { top: '46.31%', left: '4.69%' },
  9: { top: '52.75%', left: '17.19%' },
  10: { top: '58.85%', left: '7.81%' },
  11: { top: '64.49%', left: '3.91%' },
};

function MapSegment() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [hoveredHouse, setHoveredHouse] = useState(null);

  const handleHouseClick = (houseId) => {
    setSelectedHouse(houseId);
    setPageIndex(0);
  };

  const handleClose = () => {
    setSelectedHouse(null);
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % houseData[selectedHouse].length);
  };

  const handlePrev = () => {
    setPageIndex((prev) => (prev - 1 + houseData[selectedHouse].length) % houseData[selectedHouse].length);
  };

  return (
    <section className="map-segment" id="map">
      <h2>Resort Map</h2>
      <div className="map-image">
        <img src={mapImage} alt="Resort Map" />

        {Object.entries(positions).map(([id, pos]) => (
          <div
            key={id}
            className="house"
            style={{ top: pos.top, left: pos.left }}
            onClick={() => handleHouseClick(parseInt(id))}
            onMouseEnter={() => setHoveredHouse(parseInt(id))}
            onMouseLeave={() => setHoveredHouse(null)}
          />
        ))}

        {hoveredHouse && (
          <div
            className="gif-popup"
            style={{
              top: `calc(${positions[hoveredHouse].top} - 5%)`,
              left: `calc(${positions[hoveredHouse].left} + 5%)`,
            }}
          >
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxxYXoweGJuc2NnbGR0bDdrd2wwMTAybDB2dWk0OHRpZzF4YzF5ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4kpvOjTzZo4Rhd6Reb/giphy.gif"
              alt="House preview"
              width="250"
              height="140"
            />
          </div>
        )}

        {selectedHouse && (
          <div
            className="popup"
            style={{
              top: `calc(${positions[selectedHouse].top} - 5%)`,
              left: `calc(${positions[selectedHouse].left} + 5%)`,
            }}
          >
            <button className="close-btn" onClick={handleClose}>×</button>
            <h3>House {selectedHouse}</h3>
            <p>{houseData[selectedHouse][pageIndex]}</p>
            <div className="popup-controls">
              <button onClick={handlePrev}>&larr;</button>
              <button onClick={handleNext}>&rarr;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MapSegment;
