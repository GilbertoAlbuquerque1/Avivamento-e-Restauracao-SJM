export default function NosEncontre() {
  return (
    <main>
      <h1 className="temapagina">Nos Encontre</h1>
      <div className="localizacao">
        <section>
          <article className="agenda">
            <h2>
              Não vemos a hora de te receber em nosso templo, aponta nossa morada
              e vem!
            </h2>
            <a
              href="https://maps.app.goo.gl/qvnzro8xRR8vmB5m7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imglocal"
                src="/imagens/visite-nos.png"
                alt="Visite-nos"
                height="200"
              />
            </a>
          </article>
          <article className="agenda">
            <iframe
              className="iframenosencontre"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12062.557520055801!2d-8.500010775175417!3d40.901724762266745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2381657f28ac0b%3A0xbe4db8615e603273!2sAvivamento%20e%20Restaura%C3%A7%C3%A3o%20Igreja%20-%20SJM!5e0!3m2!1spt-PT!2spt!4v1772402666834!5m2!1spt-PT!2spt"
              width="500"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Avivamento e Restauração SJM"
            />
            <a
              className="acompanhe"
              href="https://maps.app.goo.gl/qvnzro8xRR8vmB5m7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="txtendereco">
                R. Dr. Sá Carneiro 235 - São João da Madeira
              </p>
            </a>
          </article>
        </section>
      </div>

      <div className="informacao">
        <section className="dias-cultos">
          <article className="article_domingo1">
            <h2 className="domingo1">Domingos</h2>
            <p className="horariodoculto">9h</p>
            <p className="avivamento1">Culto do Avivamento</p>
          </article>
          <article className="article_quinta1">
            <h2 className="quinta1">Quintas</h2>
            <p className="horariodoculto">10h e 20h</p>
            <p className="restauracao1">Culto de Restauração</p>
          </article>
          <h3 className="agendacultos">
            Reuniões de células — terças e sábados
          </h3>
        </section>

        <section className="duvidas">
          <h2>Alguma dúvida?</h2>
          <h3 className="agendacultos">Entre em contato!</h3>
          <article>
            <a
              href="https://wa.me/351969879724"
              className="whatsapp-float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contato"
                src="/imagens/logo_whatsapp_200.png"
                alt="logo_whatsapp"
                width="50"
              />
            </a>
            <a
              href="mailto:gilbertogian.rs@gmail.com"
              className="email-float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contato"
                src="/imagens/logo_email_200.png"
                alt="logo_email"
                width="50"
              />
            </a>
            <a
              href="https://ig.me/m/avivaerestaura_sjm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contato"
                src="/imagens/logo_instagram_200.png"
                alt="logo_instagram"
                width="50"
              />
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
