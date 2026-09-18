import React from 'react';
import './Sermons.css';

const sermonsData = [
  {
    id: 1,
    title: 'O Direito de Resgate',
    preacher: 'Pr. Gilberto Albuquerque',
    date: '12 de Maio de 2025',
    image: 'https://images.unsplash.com/photo-1544427920-c49ccbc8e298?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Rio Jordão',
    preacher: 'Pr. Gilberto Albuquerque',
    date: '20 de Abril de 2025',
    image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Páscoa - Êxodo 12',
    preacher: 'Pr. Gilberto Albuquerque',
    date: '06 de Abril de 2025',
    image: 'https://images.unsplash.com/photo-1504609774528-68875507544d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Valorizando a Presença',
    preacher: 'Pr. Gilberto Albuquerque',
    date: '23 de Março de 2025',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=400&q=80',
  }
];

const Sermons = () => {
  return (
    <section className="sermons">
      <div className="container">
        
        {/* Cabeçalho da Seção (similar ao de Eventos, mas cor clara) */}
        <div className="sermons-header">
          <div className="sermons-titles">
            <span className="sermons-subtitle">ÚLTIMAS MINISTRAÇÕES</span>
            <h2 className="sermons-title">Mensagens que edificam</h2>
          </div>
          <a href="#ministracoes" className="sermons-view-all">Ver todas as ministrações <span>→</span></a>
        </div>

        {/* Grade de Cards de Vídeo */}
        <div className="sermons-grid">
          {sermonsData.map((sermon) => (
            <div className="sermon-card" key={sermon.id}>
              
              {/* O Container da Imagem possui position: relative no CSS */}
              <div className="sermon-thumbnail">
                <img src={sermon.image} alt={sermon.title} />
                
                {/* O Botão Play possui position: absolute no CSS */}
                <div className="sermon-play-btn">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              
              <div className="sermon-info">
                <h3 className="sermon-name">{sermon.title}</h3>
                <p className="sermon-preacher">{sermon.preacher}</p>
                <p className="sermon-date">{sermon.date}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sermons;
