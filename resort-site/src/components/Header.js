import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Тихий Ліс</div>
      <nav className="nav">
        <a href="#map">Мапа</a>
      </nav>
    </header>
  );
}

export default Header;