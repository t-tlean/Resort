import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Azure Bay Resort. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
