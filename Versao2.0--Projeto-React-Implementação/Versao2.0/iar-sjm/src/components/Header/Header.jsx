import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="./imagens/logoheader.png"
          alt="Logo da Igreja" 
          className="logo-footer" 
          width={"70px"}
          height={"auto"}/>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#inicio" className="active">Início</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#encontre">Nos Encontre</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#ajuda">Precisa de Ajuda?</a></li>
            <li><a href="#colabore">Colabore</a></li>

          </ul>
        </nav>

        {/* Bloco 3: Ações e Menu Mobile */}
        <div className="header-actions">
          <button className="search-btn" aria-label="Pesquisar">
            {/* Ícone SVG simples de lupa */}
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          <button className="btn-ao-vivo">
            <span className="play-icon">▶</span> AO VIVO
          </button>

          {/* Botão Hambúrguer para Mobile */}
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Abrir menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
