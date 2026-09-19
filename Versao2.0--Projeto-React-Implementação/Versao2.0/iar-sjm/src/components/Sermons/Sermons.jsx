import React from 'react';
import './Sermons.css';

const sermonsData = [
  {
    id: 1,
    title: 'Qual a Necessidade de Conhecer o Mal?',
    preacher: 'Pr. Gilberto Albuquerque',
    date: '12 de Maio de 2026',
    image: './imagens/ministracao1.png',
    videoLink: "https://youtu.be/afW7lem1Nhk"
  },
  {
    id: 2,
    title: 'Exercite a Sua Fé',
    preacher: 'Pr. Alex Alexandre',
    date: '06 de Setembro de 2026',
    image: './imagens/ministracao05.png',
    videoLink: "https://www.youtube.com/watch?v=x2uolOCSIYg&t=1s"
  },
  {
    id: 3,
    title: 'Valor',
    preacher: 'Sup. Edmilson Guilherme',
    date: '10 de Maio de 2026',
    image: './imagens/ministracao3.png',
    videoLink: "https://youtu.be/oE2p4-bbed0"
  },
  {
    id: 4,
    title: 'A Visão que Jesus Veio Nos Trazer',
    preacher: 'Sup. David Benner',
    date: '16 de Agosto de 2026',
    image: './imagens/ministracao03.png',
    videoLink: "https://www.youtube.com/watch?v=ieibf5CKZxM"
  }
];

const Sermons = () => {
  return (
    <section className="sermons">
      <div className="container">
        <div className="sermons-header">
          <div className="sermons-titles">
            <span className="sermons-subtitle">ÚLTIMAS MINISTRAÇÕES</span>
            <h2 className="sermons-title">Mensagens que edificam</h2>
          </div>
          <a href="https://www.youtube.com/@AvivamentoeRestaura%C3%A7%C3%A3o-SJM" target="_blank" rel="noopener noreferrer" className="sermons-view-all">Ver todas as ministrações <span>→</span></a>
        </div>

        <div className="sermons-grid">
          {sermonsData.map((sermon) => (
            <a className="sermon-card" href={sermon.videoLink} target="_blank" rel="noopener noreferrer" key={sermon.id}>
              <div className="sermon-thumbnail">
                <img src={sermon.image} alt={sermon.title} />
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
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sermons;
