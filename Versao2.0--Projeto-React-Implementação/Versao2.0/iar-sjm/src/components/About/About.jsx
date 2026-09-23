import './About.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules';
import comunhao01 from '../../assets/comunhao01.jpg';
import comunhao02 from '../../assets/comunhao02.jpg';
import comunhao03 from '../../assets/comunhao03.jpg';
import comunhao04 from '../../assets/comunhao04.jpg';
import comunhao05 from '../../assets/comunhao05.jpg';
import comunhao06 from '../../assets/comunhao06.jpg';
import comunhao07 from '../../assets/comunhao07.jpg';
import comunhao08 from '../../assets/comunhao08.jpg';
import comunhao09 from '../../assets/comunhao09.jpg';
import comunhao10 from '../../assets/comunhao10.jpg';
import comunhao11 from '../../assets/comunhao11.jpg';
import comunhao12 from '../../assets/comunhao12.jpg';
import comunhao13 from '../../assets/comunhao13.jpg';
import comunhao14 from '../../assets/comunhao14.jpg';
import 'swiper/css'
import 'swiper/css/effect-fade'


const About = () => {
  const imagensHero = [comunhao01, comunhao02, comunhao03, comunhao04, comunhao05, comunhao06, comunhao07, comunhao08, comunhao09, comunhao10, comunhao11, comunhao12, comunhao13, comunhao14];

  return (
    <section className="about">
      <div className="container">

        <div className="about-grid">
          <div className="about-text">
            <span className="section-subtitle">SOBRE NÓS</span>
            <h2 className="section-title">Uma igreja que<br />ama vidas</h2>
            <p className="section-desc">
              Avivamento & Restauração - SJM existe para transmitir  a Palavra de Deus,
              promover avivamento e restauração em nossa comunidade e além.
            </p>
            <a className="btn btn-primary" href="/sobre">
              Conheça nossa história <span>→</span>
            </a>
          </div>

          <div className="about-image">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              style={{ width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}
            >
              {imagensHero.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    alt={`Membros da igreja adorando - Foto ${index + 1}`}
                    className="img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
                <p>R. Dr. Sá Carneiro 235<br />3700-255 São João da Madeira</p>
              </div>
            </div>

            <a href="/sobre" className="info-link">Saiba mais sobre nós <span>→</span></a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
