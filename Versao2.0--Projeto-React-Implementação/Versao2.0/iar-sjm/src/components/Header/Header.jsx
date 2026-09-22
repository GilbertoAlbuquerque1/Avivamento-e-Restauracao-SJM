import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header id='home' className="header">
      <div className="header-container">
        
        <div className="header-actions">
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Abrir menu">
            <svg width="50" height="24" fill="none" stroke="currentColor" viewBox="0 0 30 20">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="./imagens/logoheader.png"
              alt="Logo da Igreja"
              className="logo-footer"
              width={"70px"}
              height={"auto"} />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Início</Link></li>
            <li><Link to="/sobre" className={isActive('/sobre') ? 'active' : ''} onClick={closeMenu}>Sobre Nós</Link></li>
            <li><Link to="/encontre" className={isActive('/encontre') ? 'active' : ''} onClick={closeMenu}>Nos Encontre</Link></li>
            <li><Link to="/eventos" className={isActive('/eventos') ? 'active' : ''} onClick={closeMenu}>Eventos</Link></li>
            <li><Link to="/help" className={isActive('/Help') ? 'active' : ''} onClick={closeMenu}>Precisa de Ajuda?</Link></li>
            <li><Link to="/colabore" className={isActive('/colabore') ? 'active' : ''} onClick={closeMenu}>Colabore</Link></li>
          </ul>
        </nav>

    
        {/* <div className="header-actions">
          <button className="search-btn" aria-label="Pesquisar">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          <button className="btn-ao-vivo">
            <span className="play-icon">▶</span> AO VIVO
          </button>
        </div> */}

      </div>
    </header>
  );
};

export default Header;
