import React from 'react';
import './News.css';

const newsData = [
  {
    id: 1,
    date: '12 MAI 2025',
    title: 'Encontro com Deus reúne grande número de pessoas',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    date: '05 MAI 2025',
    title: 'Nova série de ministrações começa neste domingo',
    image: 'https://images.unsplash.com/photo-1494172961521-337990f9ceaa?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    date: '28 ABR 2025',
    title: 'Ação social alcança famílias da comunidade',
    image: 'https://images.unsplash.com/photo-1593113589914-075568e09165?auto=format&fit=crop&w=400&q=80',
  }
];

const News = () => {
  return (
    <section className="news">
      <div className="container">
        
        <div className="section-header">
          <div className="header-titles">
            <span className="section-subtitle">ÚLTIMAS NOTÍCIAS</span>
            <h2 className="section-title">Fique por dentro</h2>
          </div>
          <a href="#noticias" className="view-all-link">Ver todas as notícias <span>→</span></a>
        </div>

        <div className="news-grid">
          {newsData.map((news) => (
            <div className="news-card" key={news.id}>
              <div className="news-image">
                <img src={news.image} alt={news.title} />
              </div>
              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3 className="news-title">{news.title}</h3>
                <a href="#ler" className="news-link">Ler mais <span>→</span></a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
