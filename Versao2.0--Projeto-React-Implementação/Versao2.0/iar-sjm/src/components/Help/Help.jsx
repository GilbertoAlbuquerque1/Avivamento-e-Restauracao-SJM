import React from 'react';
import './Help.css';

const helpData = [
  {
    id: 1,
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
    title: 'Apoio Espiritual',
    desc: 'Oração, aconselhamento e acompanhamento.',
  },
  {
    id: 2,
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>,
    title: 'Apoio Social',
    desc: 'Cestas básicas, orientação e assistência.',
  },
  {
    id: 3,
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>,
    title: 'Outros',
    desc: 'Tem alguma outra necessidade? Entre em contato.',
  }
];

const Help = () => {
  return (
    <section className="help">
      <div className="container">
        <div className="help-grid">
          
          {/* Lado Esquerdo: Textos */}
          <div className="help-text">
            <span className="section-subtitle">PRECISA DE AJUDA?</span>
            <h2 className="section-title">Estamos aqui por você</h2>
            <p className="section-desc">
              Se você precisa de apoio espiritual, social ou tem 
              alguma outra necessidade, fale conosco. Será um privilégio 
              poder caminhar com você!
            </p>
            <button className="btn btn-primary">
              Fale conosco <span>→</span>
            </button>
          </div>

          {/* Lado Direito: Cards */}
          <div className="help-cards-grid">
            {helpData.map((item) => (
              <div className="help-card" key={item.id}>
                <div className="help-icon">{item.icon}</div>
                <h3 className="help-card-title">{item.title}</h3>
                <p className="help-card-desc">{item.desc}</p>
                <a href="#ajuda" className="help-link">Saiba mais <span>→</span></a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Help;
