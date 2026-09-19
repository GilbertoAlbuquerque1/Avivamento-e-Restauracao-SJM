import PageHero from '../../components/PageHero/PageHero';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CTASection from '../../components/CTASection/CTASection';
import './Colabore.css';

const Colabore = () => {
  return (
    <main className="colabore-page">
      <PageHero
        title="Colabore"
        subtitle="Contribua para a expansão do Reino e causas sociais."
        backgroundImage="./imagens/comunhao02.jpg"
      />
      <Breadcrumb items={[{ label: 'Colabore' }]} />

      <section className="colabore-intro">
        <div className="container text-center">
          <span className="section-subtitle">DIGNIDADE E GENEROSIDADE</span>
          <h2 className="section-title">Apoie esta obra</h2>
          <p className="section-desc">
            A generosidade da nossa família é o motor que mantém as portas abertas, financia os nossos ministérios e permite dar suporte social ativo às famílias da nossa região em São João da Madeira. Cada contribuição voluntária é uma semente de transformação.
          </p>
        </div>
      </section>

      <section className="colabore-dados bg-light">
        <div className="container">
          <div className="dados-grid">

            <div className="dados-card">
              <h3>Transferência Bancária</h3>
              <p className="card-info">Utilize os dados abaixo através do seu banco ou homebanking:</p>
              <div className="dados-copiar-box">
                <div className="dado-linha">
                  <strong>Banco:</strong> <span>Banco Exemplo Portugal</span>
                </div>
                <div className="dado-linha">
                  <strong>IBAN:</strong> <span className="iban-text">PT50 0000 0000 0000 0000 0000 0</span>
                </div>
                <div className="dado-linha">
                  <strong>Titular:</strong> <span>Igreja Avivamento & Restauração</span>
                </div>
              </div>
              <p className="dados-nota">* Envie o comprovativo para o e-mail da igreja caso necessite de recibo de donativo para fins fiscais.</p>
            </div>

            <div className="dados-card inline-cards">
              <div className="sub-card">
                <h3>MB WAY</h3>
                <p>Pode contribuir de forma rápida inserindo o número oficial da igreja:</p>
                <div className="mbway-box">
                  <strong>Telemóvel:</strong> <span>+351 969 879 724</span>
                </div>
              </div>
              
              <div className="sub-card top-border">
                <h3>Contribuição Presencial</h3>
                <p>Se preferir, poderá entregar os seus dízimos e ofertas em mãos durante os momentos dedicados nos nossos cultos de Quinta-feira e Domingo.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="colabore-pilares">
        <div className="container">
          <div className="text-center">
            <span className="section-subtitle">TRANSPARÊNCIA</span>
            <h2 className="section-title">Onde o seu investimento é aplicado</h2>
          </div>
          <div className="pilares-grid">
            <div className="pilar-item">
              <h4>Manutenção da Casa</h4>
              <p>Custos de arrendamento, energia, som e infraestrutura do nosso templo em São João da Madeira.</p>
            </div>
            <div className="pilar-item">
              <h4>Ação Social Prática</h4>
              <p>Compra de alimentos, roupas e suporte direto a famílias necessitadas integradas nos nossos programas de ajuda.</p>
            </div>
            <div className="pilar-item">
              <h4>Missões & Eventos</h4>
              <p>Financiamento e suporte a missionários e materiais de evangelismo, conferências, atividades de jovens e outros eventos.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Cada um contribua segundo propôs no seu coração."
        buttonText="Ver Horários de Culto"
        buttonLink="/encontre"
      />
    </main>
  );
};

export default Colabore;