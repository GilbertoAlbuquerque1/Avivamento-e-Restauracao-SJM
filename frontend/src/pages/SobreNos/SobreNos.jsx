import PageHero from '../../components/PageHero/PageHero';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CTASection from '../../components/CTASection/CTASection';
import './SobreNos.css';
import heroImg from "../../assets/adoracao7.jpeg";
import sobreImg1 from "../../assets/primeiroCulto.jpeg";
import sobreImg2 from "../../assets/comunhao04.jpg";
import sobreImg3 from "../../assets/membros.jpeg";
import sobreImg4 from "../../assets/igreja.jpeg";
import pastorImg from "../../assets/pastor.jpeg";
import pastoraImg from "../../assets/pastora.jpg";
import presidenteImg from "../../assets/presidentes.png";

const valoresData = [
  {
    id: 1,
    icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
    title: 'Amor a Deus',
    desc: 'Buscamos a Deus em primeiro lugar, com todo o coração, alma e entendimento.',
  },
  {
    id: 2,
    icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
    title: 'Amor ao Próximo',
    desc: 'Servimos uns aos outros com compaixão, generosidade e genuíno cuidado.',
  },
  {
    id: 3,
    icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>,
    title: 'Serviço',
    desc: 'Cada membro é chamado a servir, usando os seus dons para edificar o corpo de Cristo.',
  },
  {
    id: 4,
    icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
    title: 'Santificação',
    desc: 'Buscamos viver de forma íntegra, separados para os propósitos de Deus.',
  },
  {
    id: 5,
    icon: <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>,
    title: 'Unidade',
    desc: 'Somos um só corpo, caminhando juntos com um único propósito: glorificar a Deus.',
  },
];

const SobreNos = () => {
  return (
    <main id="pagesobre" className="sobre-nos-page">
      <PageHero
        title="Sobre Nós"
        subtitle="Conheça nossa história, propósito e família."
        backgroundImage={heroImg}
      />
      <Breadcrumb items={[{ label: 'Sobre Nós' }]} />

      <section className="sobre-historia">
        <div className="container">
          <div className="sobre-block sobre-block--right">
            <div className="sobre-block-text">
              <span className="section-subtitle">NOSSA HISTÓRIA</span>
              <h2 className="section-title">Uma história de fé, amor e propósito</h2>
              <p className="section-desc">
                A Igreja Avivamento & Restauração nasceu de um chamado claro: levar a Palavra de Deus
                a São João da Madeira e à região, com autenticidade, amor e poder. Desde o início,
                nosso desejo sempre foi criar um ambiente onde cada pessoa pudesse encontrar esperança,
                restauração e uma comunidade genuína.
              </p>
              <p className="section-desc">
                O que começou como um pequeno grupo de oração se tornou uma família que cresce a cada
                dia, não apenas em número, mas em maturidade espiritual e impacto na comunidade.
                Cada culto, cada célula, cada encontro é uma oportunidade para vidas serem
                transformadas pelo poder de Deus.
              </p>
            </div>
            <div className="sobre-block-image">
              <img src={sobreImg1} alt="Comunidade da igreja reunida" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-missao">
        <div className="container">
          <div className="sobre-block sobre-block--left">
            <div className="sobre-block-image">
              <img src={sobreImg2} alt="Momento de adoração na igreja" className="img-fluid" />
            </div>
            <div className="sobre-block-text">
              <span className="section-subtitle">NOSSA MISSÃO</span>
              <h2 className="section-title">Transmitir a Palavra, transformar vidas</h2>
              <p className="section-desc">
                A missão da Avivamento & Restauração é transmitir fielmente a Palavra de Deus,
                promovendo avivamento espiritual e restauração em cada área da vida pessoal,
                familiar e comunitária.
              </p>
              <p className="section-desc">
                Queremos alcançar pessoas que ainda não conhecem o amor de Cristo e edificar
                aquelas que já caminham com Ele, capacitando cada membro a viver uma fé
                prática, ativa e transformadora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-visao">
        <div className="container">
          <div className="sobre-block sobre-block--right">
            <div className="sobre-block-text">
              <span className="section-subtitle">NOSSA VISÃO</span>
              <h2 className="section-title">Uma geração comprometida com o Reino</h2>
              <p className="section-desc">
                Ser uma igreja referência de fé e amor em São João da Madeira e além, uma
                comunidade que forma discípulos comprometidos com o Reino de Deus, que impacta
                a sociedade com integridade e que gera transformação espiritual duradoura.
              </p>
              <p className="section-desc">
                Acreditamos que Deus continua operando milagres, restaurando histórias e
                levantando uma geração que não se conforma, mas que transforma.
              </p>
            </div>
            <div className="sobre-block-image">
              <img src={sobreImg3} alt="Comunidade em momento de oração" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-valores">
        <div className="container">
          <div className="sobre-valores-header">
            <span className="section-subtitle">NOSSOS VALORES</span>
            <h2 className="section-title">Os pilares da nossa caminhada</h2>
          </div>
          <div className="valores-grid">
            {valoresData.map((valor) => (
              <div className="valor-card" key={valor.id}>
                <div className="valor-icon">{valor.icon}</div>
                <h3 className="valor-title">{valor.title}</h3>
                <p className="valor-desc">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sobre-igreja">
        <div className="container">
          <div className="sobre-block sobre-block--left">
            <div className="sobre-block-image">
              <img src={sobreImg4} alt="Momento de comunhão da igreja" className="img-fluid" />
            </div>
            <div className="sobre-block-text">
              <span className="section-subtitle">NOSSA IGREJA</span>
              <h2 className="section-title">Uma família, vários ministérios, um só propósito</h2>
              <p className="section-desc">
                Somos mais do que uma igreja — somos uma família. Aqui cada pessoa tem o seu
                lugar e é acolhida como é. Acreditamos no valor da comunidade e na força de
                caminhar juntos.
              </p>
              <p className="section-desc">
                Os nossos ministérios existem para que cada membro possa servir, crescer e
                contribuir com os seus dons. Da adoração ao ensino, do acolhimento ao
                serviço social — cada área reflete o nosso compromisso com o Reino de Deus
                e com as pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-pastores">
        <div className="container">
          <div className="sobre-pastores-header">
            <span className="section-subtitle">NOSSOS PASTORES</span>
            <h2 className="section-title">Quem nos lidera</h2>
            <p className="section-desc sobre-pastores-intro">
              Conheça os pastores que caminham à frente desta obra.
            </p>
              
          </div>
          <div className="pastores-grid">
            <div className="pastor-card">
              <div className="pastor-foto">
                <img src={pastorImg} alt="Pastor Gilberto Albuquerque e Pastora Graziela Mendonça" />
              </div>
              <div className="pastor-info">
                <h3 className="pastor-nome">Pr. Gilberto Albuquerque</h3>
                <span className="pastor-funcao">Pastor</span>
                <p className="pastor-bio">
                  Com um coração voltado para o ensino da Palavra e para o cuidado pastoral,
                  o Pastor Gilberto lidera a igreja com sabedoria, fé e dedicação. O seu
                  desejo é ver cada vida transformada pelo poder de Deus.
                </p>

              </div>
            </div>
            <div className="pastor-card">
              <div className="pastor-foto">
                <img src={pastoraImg} alt="Pastora Graziela Mendonça" />
              </div>
              <div className="pastor-info">
                <h3 className="pastor-nome">Pra. Graziela Mendonça</h3>
                <span className="pastor-funcao">Pastora</span>
                <p className="pastor-bio">
                  A Pastora Graziela é um exemplo de acolhimento e amor ao próximo.
                  Com sensibilidade e firmeza, ajuda a construir uma comunidade onde
                  todos se sentem em casa.
                </p>
              </div>
            </div>
          </div>
          <div className="sobre-pastores-bottom-text">
            <p className="section-desc">
                Formados na Escola do Avivamento e na Escola de Ministros, eles foram preparados não apenas academicamente, mas espiritualmente, desenvolvendo uma liderança fundamentada na Palavra, na oração e na prática da fé.
                <br />São mentorados pelo Apóstolo <strong>Nivaldo Silva</strong>, recebendo direção e cobertura espiritual dentro da visão do Ministério Avivamento e Restauração. Essa conexão fortalece a unidade, a identidade e o alinhamento da igreja local com a missão global do ministério.
            </p>
            <p className="section-desc">
                Além do ministério pastoral, são pais de <strong>Asafe Gabriel</strong> e vivem no dia a dia os valores que ensinam: fé, família e serviço. Acreditam que o exemplo dentro de casa é a base de uma liderança saudável e coerente.
                <br />
                Com um coração pastoral sensível e firme na verdade, os pastores <strong>Gilberto</strong> e <strong>Graziela</strong> têm como propósito formar discípulos maduros, fortalecer famílias e incentivar cada membro a viver uma fé ativa, ousada e transformadora.
            </p>
          </div>
        </div>
      </section>
      <section className="sobre-presidentes">
        <div className="container">
          <div className="sobre-block sobre-block--right">
            <div className="sobre-block-text">
              <span className="section-subtitle">NOSSA COBERTURA ESPIRITUAL</span>
              <h2 className="section-title">PASTORES PRESIDENTES</h2>
              <p className="section-desc">
                O ministério é presidido pelo Apóstolo <strong>Nivaldo Silva</strong> e pela Pastora <strong>Sheila Costa</strong>, um casal que tem dedicado a vida ao serviço de Deus e à expansão do Seu Reino.
              </p>
              <p className="section-desc">
                Casados há mais de 30 anos, caminham juntos na fé, no amor e no propósito de servir ao Senhor. Após terem um encontro transformador com Jesus Cristo, passaram a dedicar a vida integralmente à obra de Deus, desenvolvendo um ministério marcado pela fé, pela Palavra e pelo cuidado com vidas.
              </p>
              <p className="section-desc">
                Ao longo de sua trajetória ministerial, o casal tem sido instrumento na formação e no envio de líderes, pastores e obreiros, contribuindo para o crescimento de diversas igrejas e para a edificação do Corpo de Cristo. São amplamente amados por aqueles que caminham debaixo de sua liderança e têm ensinado, de forma consistente, princípios fundamentais da Palavra de Deus, especialmente sobre honra, discipulado e serviço no Reino.
              </p>
              <p className="section-desc">
                Com uma visão fundamentada na Palavra de Deus e no compromisso com o discipulado, o Apóstolo <strong>Nivaldo Silva</strong> e a Pastora <strong>Sheila Costa</strong> seguem liderando o ministério com amor, sabedoria e dedicação, inspirando vidas a viver plenamente o propósito de Deus.
              </p>
            </div>
            <div className="presidentes-image">
              <img src={presidenteImg} alt="Comunidade em momento de oração" className="img-fluid" />
            </div>
            
          </div>
        </div>
        </section>

      <CTASection
        title="Faça parte dessa história."
        buttonText="Nos encontre"
        buttonLink="/encontre"
      />
    </main>
  );
};

export default SobreNos;
