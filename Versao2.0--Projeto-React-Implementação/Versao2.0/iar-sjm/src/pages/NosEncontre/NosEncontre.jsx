import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CTASection from '../../components/CTASection/CTASection';
import './NosEncontre.css';
import { HashLink  as Link} from 'react-router-hash-link';

const NosEncontre = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Futuro: integração com backend
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <main className="encontre-page">
      <PageHero
        title="Nos Encontre"
        subtitle="Estamos aqui para ouvir e receber você."
        backgroundImage="./imagens/nave.jpeg"
      />
      <Breadcrumb items={[{ label: 'Nos Encontre' }]} />
      <section className="encontre-info">
        <div className="container">
          <div className="encontre-info-grid">

            <div className="info-block">
              <div className="info-block-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="info-block-title">Endereço</h3>
              <p className="info-block-text">
                R. Dr. Sá Carneiro 235<br />
                3700-255 São João da Madeira
              </p>
              <a
                href="https://maps.app.goo.gl/TskVoSUnLbpW8KFC9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary info-block-btn"
              >
                Abrir rota no mapa
              </a>
            </div>

            <div className="info-block">
              <div className="info-block-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="info-block-title">Horários dos Cultos</h3>
              <div className="horarios-lista">
                <div className="horario-item">
                  <span className="horario-dia">Quinta-feira</span>
                  <div className="horario-horas">
                    <span className="horario-badge">10h</span>
                    <span className="horario-badge">20h</span>
                  </div>
                </div>
                <div className="horario-item">
                  <span className="horario-dia">Domingo</span>
                  <div className="horario-horas">
                    <span className="horario-badge">9h</span>
                    <span className="horario-badge">18h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-block">
              <div className="info-block-icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="info-block-title">Fale Connosco</h3>
              <p className="info-block-text">
                Tem alguma dúvida? Quer saber mais?<br />
                Entre em contacto!
              </p>
              <Link to="/encontre#contato" className="btn btn-primary">
                Contato
              </Link>
            </div>

          </div>
        </div>
      </section>


      <section className="encontre-mapa">
        <div className="container">
          <div className="mapa-placeholder">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.9097556635767!2d-8.4896162!3d40.901732599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2381657f28ac0b%3A0xbe4db8615e603273!2sAvivamento%20e%20Restaura%C3%A7%C3%A3o%20Igreja%20-%20SJM!5e0!3m2!1spt-PT!2spt!4v1789838353707!5m2!1spt-PT!2spt" width="100%" height="400px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </section>
      <section id="contato" className="encontre-contato">
        <div className="container">
          <div className="contato-grid">
            <div className="contato-text">
              <span className="section-subtitle">ENTRE EM CONTATO</span>
              <h2 className="section-title">Envie-nos uma mensagem</h2>
              <p className="section-desc">
                Seja para tirar dúvidas, pedir oração ou simplesmente dizer olá,
                estamos aqui para te ouvir e te ajudar no que for preciso. Preencha o formulário e responderemos o mais 
                breve possível.
              </p>
            </div>
            <form className="contato-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="+351 912 345 678"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Escreva aqui a sua mensagem..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-btn">
                Enviar mensagem <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <CTASection
        title="Esperamos por você."
        buttonText="Voltar ao início"
        buttonLink="/"
      />
    </main>
  );
};

export default NosEncontre;
