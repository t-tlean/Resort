import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Resort</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#amenities">Amenities</a>
        <a href="#map">Map</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;