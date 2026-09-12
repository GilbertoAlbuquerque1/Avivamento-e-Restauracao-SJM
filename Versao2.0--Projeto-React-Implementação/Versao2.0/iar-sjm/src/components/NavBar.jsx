import { useState } from 'react';

export default function Navbar() {
  // Menu mobile começa como false (fechado)
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para alternar o estado do menu
  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="cabecalho">
      <div className="container-nav">
        <a href="#/" className="logo">
          <img src="/imagens/logo.png" alt="Logo Igreja Avivamento e Restauração" />
        </a>

        <button 
          className={`menu-toggle ${menuAberto ? 'active' : ''}`}
          onClick={alternarMenu}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu ${menuAberto ? 'active' : ''}`}>
          <a href="#/" onClick={() => setMenuAberto(false)}>Início</a>
          <a href="#/sobrenos" onClick={() => setMenuAberto(false)}>Sobre Nós</a>
          <a href="#/nosencontre" onClick={() => setMenuAberto(false)}>Nos Encontre</a>
          <a href="#/eventos" onClick={() => setMenuAberto(false)}>Eventos</a>
          <a href="#/ajuda" onClick={() => setMenuAberto(false)}>Precisa de Ajuda?</a>
          <a href="#/colabore" className="btn-colabore" onClick={() => setMenuAberto(false)}>Colabore</a>
        </nav>
      </div>
    </header>
  );
}