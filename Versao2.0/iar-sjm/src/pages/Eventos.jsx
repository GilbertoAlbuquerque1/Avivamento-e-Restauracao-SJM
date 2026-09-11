import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Eventos() {
  // Estado para controlar qual formulário está ativo ('encontro' | 'participe' | null)
  const [activeForm, setActiveForm] = useState(null);

  // Estados de confirmação/sucesso
  const [encontroSubmitted, setEncontroSubmitted] = useState(false);
  const [participeSubmitted, setParticipeSubmitted] = useState(false);

  // Estado dos campos do formulário Encontro
  const [encontroData, setEncontroData] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    endereco: "",
    cidade: "",
  });

  // Estado dos campos do formulário Participe (Célula)
  const [participeData, setParticipeData] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    cidade: "",
  });

  const formContainerRef = useRef(null);

  const scrollToForm = () => {
    setTimeout(() => {
      if (formContainerRef.current) {
        formContainerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  const handleToggleEncontro = () => {
    if (activeForm === "encontro") {
      setActiveForm(null);
    } else {
      setActiveForm("encontro");
      scrollToForm();
    }
  };

  const handleToggleParticipe = () => {
    if (activeForm === "participe") {
      setActiveForm(null);
    } else {
      setActiveForm("participe");
      scrollToForm();
    }
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  const handleSubmitEncontro = (e) => {
    e.preventDefault();
    const { nome, email, telefone, dataNascimento, endereco, cidade } =
      encontroData;

    if (!nome || !email || !telefone || !endereco || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const texto = `*Inscrição - Encontro com Deus*\n*Nome:* ${nome}\n*Email:* ${email}\n*Telefone:* ${telefone}\n*Data de Nasc.:* ${dataNascimento}\n*Endereço:* ${endereco}\n*Cidade:* ${cidade}`;
    const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

    window.open(urlWhatsApp, "_blank");
    setEncontroSubmitted(true);
  };

  const handleResetEncontro = () => {
    setEncontroSubmitted(false);
    setEncontroData({
      nome: "",
      email: "",
      telefone: "",
      dataNascimento: "",
      endereco: "",
      cidade: "",
    });
    setActiveForm(null);
  };

  const handleSubmitParticipe = (e) => {
    e.preventDefault();
    const { nome, telefone, endereco, cidade } = participeData;

    if (!nome || !telefone || !endereco || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const texto = `*Inscrição - Participar de uma Célula*\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Endereço:* ${endereco}\n*Cidade:* ${cidade}`;
    const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

    window.open(urlWhatsApp, "_blank");
    setParticipeSubmitted(true);
  };

  const handleResetParticipe = () => {
    setParticipeSubmitted(false);
    setParticipeData({
      nome: "",
      telefone: "",
      endereco: "",
      cidade: "",
    });
    setActiveForm(null);
  };

  return (
    <main>
      <h1 className="temapagina">Eventos</h1>
      <div className="eventos">
        {/* Seção Encontro com Deus */}
        <section className="encontro">
          <div>
            <picture>
              <source
                media="(max-width: 750px)"
                srcSet="/imagens/encontrop.png"
                type="image/png"
              />
              <img
                className="imgeventos"
                src="/imagens/encontrom.png"
                alt="eventos_iar_sjm"
                width="100%"
              />
            </picture>
          </div>
          <div className="interacao-evento">
            <article>
              <p className="descricao">
                O Encontro com Deus é um tempo separado para que você se
                desconecte da rotina e tenha uma experiência real e
                transformadora com a presença de Deus. Durante esses dias, cada
                momento é cuidadosamente preparado para ministrar ao seu
                coração, trazendo cura interior, libertação, restauração e um
                novo direcionamento espiritual.
              </p>
            </article>
            <article>
              <input
                type="button"
                value="Inscreva-se"
                className="btn-inscricao-toggle"
                onClick={handleToggleEncontro}
              />
            </article>
          </div>
        </section>

        {/* Seção Células */}
        <section className="celulas">
          <div>
            <picture>
              <source
                media="(max-width: 750px)"
                srcSet="/imagens/celulap.png"
                type="image/png"
              />
              <img
                className="imgeventos"
                src="/imagens/celulag.png"
                alt="eventos_iar_sjm"
                width="700"
              />
            </picture>
          </div>
          <div className="interacao-evento">
            <article>
              <p className="descricao">
                As células são pequenos grupos que se reúnem durante a semana
                para compartilhar a Palavra, orar e crescer juntos. Um ambiente
                de comunhão, cuidado e crescimento espiritual. Aqui você não
                caminha sozinho, fazemos parte de uma família. As células são o
                coração da igreja. É onde vidas são alcançadas, discipuladas e
                fortalecidas.
              </p>
            </article>
            <article>
              <input
                type="button"
                value="Participe"
                className="btn-participe-toggle"
                onClick={handleToggleParticipe}
              />
            </article>
          </div>
        </section>

        {/* Formulários Interativos */}
        <section
          className="formulario-container"
          id="formulario-container"
          ref={formContainerRef}
        >
          {/* Formulário Encontro */}
          <form
            className={`formulario-encontro ${activeForm === "encontro" ? "ativo" : ""}`}
            id="formulario-encontro"
            onSubmit={handleSubmitEncontro}
          >
            {encontroSubmitted ? (
              <div className="mensagem-sucesso">
                <h2>Inscrição iniciada com sucesso!</h2>
                <p>
                  Estamos muito felizes em saber que você tem interesse em
                  participar deste evento extraordinário. O WhatsApp foi aberto
                  para você concluir o processo de inscrição com um de nossos
                  colaboradores, por favor siga as instruções, e esteja atento às
                  condições que lhe serão apresentadas.
                </p>
                <button
                  type="button"
                  onClick={handleResetEncontro}
                  className="btn-voltar"
                >
                  Voltar
                </button>
                <p>
                  Se precisa de ajuda, <Link to="/ajuda">clique aqui</Link>
                </p>
              </div>
            ) : (
              <>
                <h2 className="h2form-encontro">
                  Inscrição - Encontro com Deus
                </h2>
                <div className="form-group">
                  <label htmlFor="nome-encontro">Nome Completo</label>
                  <input
                    type="text"
                    id="nome-encontro"
                    name="nome-encontro"
                    value={encontroData.nome}
                    onChange={(e) =>
                      setEncontroData({ ...encontroData, nome: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-encontro">Email</label>
                  <input
                    type="email"
                    id="email-encontro"
                    name="email-encontro"
                    value={encontroData.email}
                    onChange={(e) =>
                      setEncontroData({
                        ...encontroData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="telefone-encontro">Telefone</label>
                  <input
                    type="tel"
                    id="telefone-encontro"
                    name="telefone-encontro"
                    value={encontroData.telefone}
                    onChange={(e) =>
                      setEncontroData({
                        ...encontroData,
                        telefone: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group1">
                  <label htmlFor="data-nascimento">Data de Nascimento</label>
                  <input
                    type="date"
                    id="data-nascimento"
                    name="data-nascimento"
                    value={encontroData.dataNascimento}
                    onChange={(e) =>
                      setEncontroData({
                        ...encontroData,
                        dataNascimento: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endereco-encontro">Endereço</label>
                  <input
                    type="text"
                    id="endereco-encontro"
                    name="endereco-encontro"
                    value={encontroData.endereco}
                    onChange={(e) =>
                      setEncontroData({
                        ...encontroData,
                        endereco: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cidade-encontro">Cidade</label>
                  <input
                    type="text"
                    id="cidade-encontro"
                    name="cidade-encontro"
                    value={encontroData.cidade}
                    onChange={(e) =>
                      setEncontroData({
                        ...encontroData,
                        cidade: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="btn-formulariodiv">
                  <button type="submit" className="btn-enviar">
                    Confirmar
                  </button>
                  <button
                    type="button"
                    className="btn-fechar"
                    onClick={handleCloseForm}
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Formulário Participe */}
          <form
            className={`formulario-participe ${activeForm === "participe" ? "ativo" : ""}`}
            id="formulario-participe"
            onSubmit={handleSubmitParticipe}
          >
            {participeSubmitted ? (
              <div className="mensagem-sucesso">
                <h2>Pedido Iniciado!</h2>
                <p>
                  Estamos muito felizes em saber que você tem interesse em
                  participar de uma de nossas células. O WhatsApp foi aberto
                  para você concluir o processo, por favor siga as instruções, e
                  esteja atento quando um de nossos colaboradores entrar em
                  contato.
                </p>
                <button
                  type="button"
                  onClick={handleResetParticipe}
                  className="btn-voltar"
                >
                  Voltar
                </button>
                <p>
                  <Link to="/ajuda">Se precisa de ajuda, clique aqui</Link>
                </p>
              </div>
            ) : (
              <>
                <h2 className="h2form-participe">
                  Entre em Contato para Participar
                </h2>
                <div className="form-group">
                  <label htmlFor="nome-participe">Nome e Sobrenome</label>
                  <input
                    type="text"
                    id="nome-participe"
                    name="nome-participe"
                    value={participeData.nome}
                    onChange={(e) =>
                      setParticipeData({
                        ...participeData,
                        nome: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone-participe">Telefone</label>
                  <input
                    type="tel"
                    id="telefone-participe"
                    name="telefone-participe"
                    value={participeData.telefone}
                    onChange={(e) =>
                      setParticipeData({
                        ...participeData,
                        telefone: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endereco-participe">Endereço</label>
                  <input
                    type="text"
                    id="endereco-participe"
                    name="endereco-participe"
                    value={participeData.endereco}
                    onChange={(e) =>
                      setParticipeData({
                        ...participeData,
                        endereco: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cidade-participe">Cidade</label>
                  <input
                    type="text"
                    id="cidade-participe"
                    name="cidade-participe"
                    value={participeData.cidade}
                    onChange={(e) =>
                      setParticipeData({
                        ...participeData,
                        cidade: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="btn-formulariodiv">
                  <button type="submit" className="btn-enviar">
                    Confirmar
                  </button>
                  <button
                    type="button"
                    className="btn-fechar"
                    onClick={handleCloseForm}
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </form>
        </section>
      </div>
    </main>
  );
}
