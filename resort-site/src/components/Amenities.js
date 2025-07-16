import React from 'react';
import './Amenities.css';

function Amenities() {
  const features = [
    { icon: '🏊‍♂️', label: 'Infinity Pool' },
    { icon: '🏖️', label: 'Private Beach Access' },
    { icon: '💆‍♀️', label: 'Spa & Wellness Center' },
    { icon: '🍽️', label: 'Gourmet Restaurant' },
    { icon: '🧘‍♂️', label: 'Outdoor Yoga Studio' },
    { icon: '🥐', label: 'Complimentary Breakfast' }
  ];

  return (
    <section className="amenities" id="amenities">
      <h2>Our Amenities</h2>
      <div className="amenities-grid">
        {features.map((item, index) => (
          <div className="amenity-card" key={index}>
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Amenities;
