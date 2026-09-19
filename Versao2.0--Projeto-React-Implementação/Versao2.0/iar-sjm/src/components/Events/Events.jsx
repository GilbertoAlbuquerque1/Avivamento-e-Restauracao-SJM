import React from 'react';
import './Events.css';

const eventsData = [
  {
    id: 1,
    day: '05',
    month: 'JUN',
    title: 'Encontro com Deus',
    time: '19h - Sábado',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80',
  },
  { 
    id: 2,
    day: '12',
    month: 'JUN',
    title: 'Células',
    time: '19h - Quinta-feira',
    image: 'https://images.unsplash.com/photo-1494172961521-337990f9ceaa?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    day: '22',
    month: 'JUN',
    title: 'Culto de Jovens',
    time: '19h - Domingo',
    image: 'https://images.unsplash.com/photo-1525683110294-0610f44bc19a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    day: '28',
    month: 'JUN',
    title: 'Conferência de Avivamento',
    time: '19h - Sábado',
    image: 'https://images.unsplash.com/photo-1470229722913-7c090be5c520?auto=format&fit=crop&w=400&q=80',
  }
];

const Events = () => {
  return (
    <section className="events">
      <div className="container">
        
        <div className="section-header">
          <div className="header-titles">
            <span className="section-subtitle">PRÓXIMOS EVENTOS</span>
            <h2 className="section-title">Participe com a gente</h2>
          </div>
          <a href="#eventos" className="view-all-link">Ver todos os eventos <span>→</span></a>
        </div>

        <div className="events-grid">
          {eventsData.map((event) => (
            <div className="event-card" key={event.id}>
              
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              
              <div className="event-body">
                
                <div className="event-date">
                  <span className="date-day">{event.day}</span>
                  <span className="date-month">{event.month}</span>
                </div>
                
                <div className="event-info">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-time">{event.time}</p>
                  <a href="#" className="event-link">Saiba mais <span>→</span></a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
