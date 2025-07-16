import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>About Azure Bay</h2>
        <p>
          Nestled between lush hills and the pristine coastline, Azure Bay Resort offers a peaceful escape from the everyday. 
          Enjoy luxurious accommodations, world-class service, and breathtaking views that soothe the soul.
        </p>
      </div>
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1587502537745-84f7b3ae4f7d" alt="Resort view" />
      </div>
    </section>
  );
}

export default About;
