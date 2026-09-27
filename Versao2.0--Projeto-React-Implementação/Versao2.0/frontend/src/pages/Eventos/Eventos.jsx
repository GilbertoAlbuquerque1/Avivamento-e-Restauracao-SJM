import React, { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CTASection from '../../components/CTASection/CTASection';
import { eventsData } from '../../data/eventsData';
import './Eventos.css';
import heroImg from '../../assets/nave01.jpeg'

const Eventos = () => {
  const [activeFilter, setActiveFilter] = useState('todos');


  const categories = [
    { label: 'Todos', key: 'todos' },
    { label: 'Conferências', key: 'conferencias' },
    { label: 'Encontro', key: 'encontro' },
    { label: 'Células', key: 'celulas' },
    { label: 'Jovens', key: 'jovens' },
    { label: 'Cultos', key: 'cultos' },
  ];


  const filteredEvents = activeFilter === 'todos'
    ? eventsData.filter(e => !e.featured) 
    : eventsData.filter(e => e.categoryKey === activeFilter);


  const featuredEvent = eventsData.find(e => e.featured);

  return (
    <main id='pageeventos' className="eventos-page">
      <PageHero
        title="Nossa Agenda"
        subtitle="Fique por dentro de todos os cultos, eventos e conferências."
        backgroundImage={heroImg}
      />
      <Breadcrumb items={[{ label: 'Eventos' }]} />


      {activeFilter === 'todos' && featuredEvent && (
        <section className="evento-destaque-section">
          <div className="container">
            <span className="section-subtitle">PRÓXIMO GRANDE EVENTO</span>
            <div className="evento-destaque-card">
              <div className="destaque-img-wrapper">
                <img src={featuredEvent.image} alt={featuredEvent.title} />
              </div>
              <div className="destaque-content">
                <span className="badge-categoria">{featuredEvent.category}</span>
                <h3 className="destaque-title">{featuredEvent.title}</h3>
                <p className="destaque-desc">{featuredEvent.desc}</p>
                <div className="destaque-meta">
                  <span className="meta-item">
                    <strong>Quando:</strong> {featuredEvent.date} de {featuredEvent.month} às {featuredEvent.time}
                  </span>
                  <span className="meta-item">
                    <strong>Onde:</strong> {featuredEvent.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="eventos-lista-section bg-light">
        <div className="container">
          <div className="filtros-wrapper">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`btn-filtro ${activeFilter === cat.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="eventos-grid">
              {filteredEvents.map((evento) => (
                <div className="evento-card" key={evento.id}>
                  <div className="evento-card-img">
                    <img src={evento.image} alt={evento.title} />
                    <div className="evento-data-badge">
                      <span className="dia">{evento.date}</span>
                      <span className="mes">{evento.month}</span>
                    </div>
                  </div>
                  <div className="evento-card-body">
                    <span className="card-tag">{evento.category}</span>
                    <h4 className="card-title">{evento.title}</h4>
                    <p className="card-text">{evento.desc}</p>
                    <div className="card-footer-meta">
                      <span>⏱ {evento.time}</span>
                      <span>📍 {evento.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="sem-eventos text-center">
              <p>Não existem eventos agendados para esta categoria de momento.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Quer participar?"
        buttonText="Contato"
        buttonLink="/encontre"
      />
    </main>
  );
};

export default Eventos;
