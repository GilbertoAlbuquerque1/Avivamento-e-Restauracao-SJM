import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <div className="topo">
        <button
          className="menu-toggle"
          aria-label="Abrir Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        <Link to="/" className="aheader" onClick={closeMenu}>
          <img
            className="logoprincipal"
            src="/imagens/logoheader.png"
            alt="logo-iarsjm"
            height="70px"
          />
          <span className="nomeiar">Avivamento & Restauração</span>
        </Link>
      </div>

      <nav className={`menu ${isMenuOpen ? "ativo" : ""}`}>
        <ul>
          <li className={isCurrent("/") ? "active" : "navlista"}>
            <NavLink
              to="/"
              className={isCurrent("/") ? "activea" : "nava"}
              onClick={closeMenu}
            >
              Início
            </NavLink>
          </li>
          <li className={isCurrent("/sobre-nos") ? "active" : "navlista"}>
            <NavLink
              to="/sobre-nos"
              className={isCurrent("/sobre-nos") ? "activea" : "nava"}
              onClick={closeMenu}
            >
              Sobre Nós
            </NavLink>
          </li>
          <li className={isCurrent("/nos-encontre") ? "active" : "navlista"}>
            <NavLink
              to="/nos-encontre"
              className={isCurrent("/nos-encontre") ? "activea" : "nava"}
              onClick={closeMenu}
            >
              Nos Encontre
            </NavLink>
          </li>
          <li className={isCurrent("/eventos") ? "active" : "navlista"}>
            <NavLink
              to="/eventos"
              className={isCurrent("/eventos") ? "activea" : "nava"}
              onClick={closeMenu}
            >
              Eventos
            </NavLink>
          </li>
          <li className={isCurrent("/ajuda") ? "active" : "navlista"}>
            <NavLink
              to="/ajuda"
              className={isCurrent("/ajuda") ? "activea" : "nava"}
              onClick={closeMenu}
            >
              Ajuda
            </NavLink>
          </li>
          <li className={isCurrent("/colabore") ? "active" : "navlista"}>
            <NavLink
              to="/colabore"
              className={isCurrent("/colabore") ? "activea" : "nava"}
              onClick={closeMenu}
            >
              Colabore
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
