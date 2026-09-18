import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        
        <div className="hero-content">
          <span className="hero-subtitle">BEM-VINDO À NOSSA IGREJA</span>
          
          <h1 className="hero-title">
            AVIVAMENTO E<br />
            RESTAURAÇÃO
          </h1>
          
          <h2 className="hero-slogan">São João da Madeira</h2>
          
          <p className="hero-description">
           Somos uma igreja que crê no poder da fé como estilo de vida. <br />
           Incentivamos cada pessoa a viver uma fé prática, ativa e transformadora <br />
           não apenas dentro do templo, mas em todas as áreas da vida. <br /> 
           Acreditamos que Deus continua operando milagres, restaurando histórias <br />
           e levantando uma geração comprometida com o Reino.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              Visite-nos <span>→</span>
            </button>
            <button className="btn btn-secondary">
              <span className="play-icon-circle">▶</span> Assista ao vídeo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
