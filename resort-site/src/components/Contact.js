import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-intro">We’d love to hear from you. Reach out with any questions or booking inquiries.</p>
      <div className="contact-wrapper">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-details">
          <div><strong>Phone:</strong> +1 (800) 123-4567</div>
          <div><strong>Email:</strong> info@azurebayresort.com</div>
          <div><strong>Address:</strong> 123 Beachfront Ave, Island Paradise</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
