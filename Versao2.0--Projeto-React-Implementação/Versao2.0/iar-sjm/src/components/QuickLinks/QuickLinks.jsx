import React from 'react';
import './QuickLinks.css';

// Aqui definimos nossos dados. Em um projeto avançado, isso poderia vir de uma API/Banco de Dados!
const linksData = [
  {
    id: 1,
    title: 'PROGRAMAÇÃO DE EVENTOS',
    description: 'Encontros que fortalecem nossa fé e comunhão.',
    linkText: 'Ver eventos →',
    // Usaremos SVGs simples (inline) para os ícones
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
  },
  {
    id: 2,
    title: 'ÚLTIMA MINISTRAÇÃO',
    description: 'Ouça e assista as mensagens que edificam.',
    linkText: 'Acessar agora →',
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
  },
  {
    id: 3,
    title: 'NOS ENCONTRE',
    description: 'R. Dr. Sá Carneiro 235\nSão João da Madeira',
    linkText: 'Ver no mapa →',
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
  },
  {
    id: 4,
    title: 'PRECISA DE AJUDA?',
    description: 'Estamos aqui para te ouvir.',
    linkText: 'Fale conosco →',
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
  },
  {
    id: 5,
    title: 'COLABORE',
    description: 'Faça parte desta obra.',
    linkText: 'Saiba mais →',
    icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
  }
];

const QuickLinks = () => {
  return (
    <section className="quick-links">
      <div className="container">
        <div className="ql-grid">
          
          {/* Aqui usamos o map() para gerar os 5 blocos automaticamente! */}
          {linksData.map((item) => (
            <div key={item.id} className="ql-item">
              <div className="ql-icon">
                {item.icon}
              </div>
              <h3 className="ql-title">{item.title}</h3>
              {/* O white-space: pre-line no CSS vai fazer o \n pular linha */}
              <p className="ql-desc">{item.description}</p>
              <a href="#" className="ql-link">{item.linkText}</a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
