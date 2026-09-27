import React from 'react';
import './Events.css';
import { eventsData } from '../../data/eventsData';



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
