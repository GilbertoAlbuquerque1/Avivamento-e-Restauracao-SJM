import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo">
              <img src="./imagens/logoheader.png"
                alt="Logo da Igreja"
                className="logo-footer"
                width={"100px"}
                height={"auto"} />
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Links rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/#home">Início</Link></li>
              <li><Link to="/sobre#pagesobre">Sobre Nós</Link></li>
              <li><Link to="/encontre#pageencontre">Nos Encontre</Link></li>
              <li><Link to="/eventos#pageeventos">Eventos</Link></li>
              <li><Link to="/help#pagehelp">Precisa de Ajuda?</Link></li>
              <li><Link to="/colabore#pagecolabore">Colabore</Link></li>
            </ul>
          </div>


          <div className="footer-col">
            <h4 className="footer-title">Siga-nos</h4>
            <div className="social-icons">
              <a href="https://www.youtube.com/@AvivamentoeRestaura%C3%A7%C3%A3o-SJM" target="_blank" aria-label="YouTube"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></a>
              <a href="https://www.instagram.com/avivaerestaura_sjm/" target="_blank" aria-label="Instagram"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
              <a href="https://www.facebook.com/profile.php?id=100067635055262" target="_blank" aria-label="Facebook"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a>
            </div>

            <div className="newsletter-box">
              <h5>Receba nossas novidades</h5>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Seu e-mail" required />
                <button type="submit">Inscrever</button>
              </form>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Nosso endereço</h4>
            <div className="footer-info-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <p>R. Dr. Sá Carneiro 235<br />3700-255 São João da Madeira</p>
            </div>

            <h4 className="footer-title mt-24">Horários dos cultos</h4>
            <div className="footer-info-item">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p>Quinta-feira: 19h e 20h<br />Domingo: 9h, 17h e 19h</p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 Avivamento & Restauração SJM. Todos os direitos reservados.</p>
          <p>Desenvolvido com propósito</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
