import React from 'react';
import './Hero.css';
import { HashLink as Link } from 'react-router-hash-link';

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
            <Link className="btn btn-primary" to="/encontre">
              Visite-nos <span>→</span>
            </Link>
            <Link className="btn btn-secondary" to="https://www.instagram.com/reel/DdOyd2uoEC1/" target="_blank"><span className="play-icon-circle">▶</span> Assista ao vídeo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
