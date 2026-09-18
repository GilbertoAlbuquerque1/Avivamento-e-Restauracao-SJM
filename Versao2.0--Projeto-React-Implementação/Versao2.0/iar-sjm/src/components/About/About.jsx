import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        
        <div className="about-grid">
          <div className="about-text">
            <span className="section-subtitle">SOBRE NÓS</span>
            <h2 className="section-title">Uma igreja que<br/>ama vidas</h2>
            <p className="section-desc">
              Avivamento & Restauração - SJM existe para transmitir  a Palavra de Deus, 
              promover avivamento e restauração em nossa comunidade e além.
            </p>
            <button className="btn btn-primary">
              Conheça nossa história <span>→</span>
            </button>
          </div>

          <div className="about-image">
            <img 
              src="./imagens/hero01.png" 
              alt="Membros da igreja adorando" 
              className="img-fluid"
            />
          </div>

          <div className="about-info-card">
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <div className="info-content">
                <h4>Nossos Pastores</h4>
                <p>Gilberto Albuquerque & Graziela Mendonça</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
              </div>
              <div className="info-content">
                <h4>Nossa Igreja</h4>
                <p>Uma família, vários ministérios, um só propósito.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div className="info-content">
                <h4>Nosso Endereço</h4>
                <p>R. Dr. Sá Carneiro 235<br/>3700-255 São João da Madeira</p>
              </div>
            </div>

            <a href="#sobre-nos" className="info-link">Saiba mais sobre nós <span>→</span></a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
