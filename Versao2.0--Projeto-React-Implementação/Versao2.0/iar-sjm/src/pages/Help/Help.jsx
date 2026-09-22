import React, { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CTASection from '../../components/CTASection/CTASection';
import './Help.css';

const Help = () => {
  const [formData, setFormData] = useState({
    nome: '',
    contacto: '',
    tipoAjuda: 'espiritual',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado ${formData.nome}. O seu pedido de apoio foi recebido. Entraremos em contacto em breve.`);
    setFormData({ nome: '', contacto: '', tipoAjuda: 'espiritual', mensagem: '' });
  };

  return (
    <main id='pagehelp' className="help-page">
      <PageHero
        title="Precisa de Ajuda?"
        subtitle="Não caminhe sozinho. Estamos aqui para o apoiar e ouvir."
        backgroundImage="./imagens/comunhao07.jpg"
      />
      <Breadcrumb items={[{ label: 'Precisa de Ajuda?' }]} />

      <section className="help-intro">
        <div className="container text-center">
          <span className="section-subtitle">ESTAMOS COVOSCO</span>
          <h2 className="section-title">Como podemos ajudar?</h2>
          <p className="section-desc">
            Acreditamos que a igreja é um lugar de refúgio, restauração e cuidado mútuo. Se está a passar por um momento difícil, seja espiritual, emocional ou social, a nossa liderança e comunidade estão prontas para estender a mão.
          </p>
        </div>
      </section>

      <section className="help-areas bg-light">
        <div className="container">
          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path></svg>
              </div>
              <h3>Apoio Espiritual</h3>
              <p>Precisa de oração, aconselhamento pastoral ou de alguém para conversar sobre a sua fé? Queremos caminhar consigo.</p>
            </div>

            <div className="help-card">
              <div className="help-icon">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
              </div>
              <h3>Apoio Social</h3>
              <p>Orientação e assistência para famílias que enfrentam vulnerabilidades ou necessidades de bens e suporte de primeira necessidade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="help-whatsapp">
        <div className="container text-center">
          <h3>Prefere falar diretamente connosco agora?</h3>
          <p>Clique no botão abaixo para iniciar uma conversa privada e segura com a nossa equipa de apoio no WhatsApp.</p>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{marginRight: '8px'}}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.414 1.452 5.383 0 9.763-4.378 9.766-9.76.002-2.607-1.01-5.057-2.85-6.898-1.84-1.84-4.291-2.854-6.899-2.855-5.39 0-9.77 4.38-9.774 9.762-.001 1.996.522 3.946 1.516 5.66l-.991 3.616 3.708-.973zm10.367-3.924c-.287-.143-1.696-.838-1.959-.933-.262-.096-.452-.143-.642.143-.19.286-.737.933-.903 1.123-.167.19-.333.214-.62.071-.286-.143-1.21-.446-2.305-1.424-.853-.76-1.428-1.7-1.595-1.986-.167-.286-.018-.44.125-.581.129-.127.287-.333.43-.5.143-.167.19-.286.286-.476.096-.19.048-.357-.024-.5-.071-.143-.642-1.548-.88-2.119-.232-.559-.467-.483-.642-.492-.166-.008-.357-.01-.548-.01-.19 0-.5.071-.762.357-.262.286-1 .976-1 2.381 0 1.405 1.023 2.762 1.166 2.952.143.19 2.013 3.074 4.877 4.31.682.294 1.214.47 1.63.601.685.218 1.31.187 1.803.114.549-.081 1.696-.693 1.935-1.363.238-.67.238-1.24.167-1.362-.071-.121-.262-.19-.549-.333z"/></svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </section>


      <section id="contatoAjuda"  className="help-form-section">
        <div className="container">
          <div className="form-wrapper">
            <h3 className="text-center">Envie uma mensagem confidencial</h3>
            <form onSubmit={handleSubmit} className="styled-form">
              <div className="form-group">
                <label htmlFor="nome">O seu Nome</label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  placeholder="Escreva o seu nome completo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contacto">Telemóvel / E-mail</label>
                <input
                  type="text"
                  id="contacto"
                  required
                  value={formData.contacto}
                  onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                  placeholder="Como prefere ser contactado?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tipoAjuda">Tipo de Apoio Necessário</label>
                <select
                  id="tipoAjuda"
                  value={formData.tipoAjuda}
                  onChange={(e) => setFormData({...formData, tipoAjuda: e.target.value})}
                >
                  <option value="espiritual">Apoio Espiritual / Oração</option>
                  <option value="social">Apoio Social / Familiar</option>
                  <option value="aconselhamento">Aconselhamento / Conversa</option>
                  <option value="outro">Outro Motivo</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Descreva brevemente como o podemos ajudar</label>
                <textarea
                  id="mensagem"
                  rows="5"
                  required
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  placeholder="A sua mensagem será lida estritamente pela equipa pastoral..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Enviar Pedido de Ajuda</button>
            </form>
          </div>
        </div>
      </section>

      <CTASection
        title="Você não está sozinho nesta caminhada."
        buttonText="Voltar ao início"
        buttonLink="/"
      />
    </main>
  );
};

export default Help;