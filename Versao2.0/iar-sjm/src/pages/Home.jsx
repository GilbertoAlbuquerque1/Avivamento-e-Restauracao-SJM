import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section id="hero" className="heroimg">
        <h1 className="txthero">Avivamento &amp; Restauração - SJM</h1>
        <Link className="txth3hero" to="/nos-encontre">
          Visite-nos
        </Link>
      </section>

      <main>
        <div className="container1">
          <section className="cultos">
            <Link to="/nos-encontre">
              <h2>Nossos Cultos</h2>
              <article className="article_domingo">
                <p className="domingo">Domingos</p>
                <p className="horariodoculto">9h</p>
                <p className="avivamento">Culto do Avivamento</p>
              </article>
              <article className="article_quinta">
                <p className="quinta">Quintas</p>
                <p className="horariodoculto">10h e 20h</p>
                <p className="restauracao">Culto da Restauração</p>
              </article>
            </Link>
          </section>

          <section className="sobrenos1">
            <Link to="/sobre-nos">
              <h2>Sobre Nós</h2>
              <p className="txtsobrenos">
                Nascemos como uma igreja viva, fundamentada na Palavra, guiada
                pelo Espírito Santo e comprometida com o avivamento e a
                restauração de vidas, famílias e ministérios.
              </p>
              <p className="txtsobrenos">
                Cremos no poder da fé e incentivamos cada pessoa a viver uma fé
                prática, ativa e transformadora não apenas dentro do templo, mas
                em todas as áreas da vida.
              </p>
              <p className="sobrenosfrase">
                “Deus continua operando milagres, restaurando histórias e
                levantando uma geração comprometida com o Reino”
              </p>
            </Link>
          </section>
        </div>

        <div className="container2">
          <section className="eventoshome">
            <h2>Eventos</h2>
            <Link className="acompanhe" to="/eventos">
              <picture>
                <source
                  media="(max-width: 750px)"
                  srcSet="/imagens/encontrop.png"
                  type="image/png"
                />
                <img
                  className="eventosimg"
                  src="/imagens/encontrom.png"
                  alt="eventos_iar_sjm"
                  width="600"
                />
              </picture>
            </Link>
            <Link className="acompanhe" to="/eventos">
              <picture>
                <source
                  media="(max-width: 750px)"
                  srcSet="/imagens/celulap.png"
                  type="image/png"
                />
                <img
                  className="eventosimg"
                  src="/imagens/celulag.png"
                  alt="eventos_iar_sjm"
                  width="600"
                />
              </picture>
            </Link>
          </section>
        </div>

        <div className="container2">
          <section className="ministracao">
            <h2>Ultimas Ministrações</h2>
            <a
              className="acompanhe"
              href="https://youtu.be/aflmQOx7DPU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgministracao"
                src="/imagens/ministracao1.png"
                alt="culto_iar_sjm_ministracao"
                height="210"
              />
            </a>
            <a
              className="acompanhe"
              href="https://youtu.be/gvq9kaSP_pU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgministracao"
                src="/imagens/ministracao2.png"
                alt="culto_iar_sjm_ministracao"
                height="210"
              />
            </a>
            <a
              className="acompanhe"
              href="https://youtu.be/sOyplteiuio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="imgministracao"
                src="/imagens/ministracao3.png"
                alt="culto_iar_sjm_ministracao"
                height="210"
              />
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
