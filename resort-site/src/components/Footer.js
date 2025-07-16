import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Тихий Ліс. Усі права захищені.</p>
    </footer>
  );
}

export default Footer;