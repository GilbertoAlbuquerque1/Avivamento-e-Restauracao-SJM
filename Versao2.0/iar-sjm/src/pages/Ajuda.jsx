import { useState } from "react";

export default function Ajuda() {
  const [openSection, setOpenSection] = useState(null);

  // Estados de confirmação
  const [espiritualSubmitted, setEspiritualSubmitted] = useState(false);
  const [socialSubmitted, setSocialSubmitted] = useState(false);

  // Estados dos campos
  const [espiritualData, setEspiritualData] = useState({
    nome: "",
    contato: "",
    mensagem: "",
  });

  const [socialData, setSocialData] = useState({
    nome: "",
    contato: "",
    email: "",
    mensagem: "",
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const handleSubmitEspiritual = (e) => {
    e.preventDefault();
    const { nome, contato, mensagem } = espiritualData;

    if (!nome || !contato || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const texto = `*Pedido de Apoio Espiritual*\n*Nome:* ${nome}\n*Contato:* ${contato}\n*Mensagem:* ${mensagem}`;
    const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

    window.open(urlWhatsApp, "_blank");
    setEspiritualSubmitted(true);
  };

  const handleResetEspiritual = () => {
    setEspiritualSubmitted(false);
    setEspiritualData({ nome: "", contato: "", mensagem: "" });
  };

  const handleSubmitSocial = (e) => {
    e.preventDefault();
    const { nome, contato, email, mensagem } = socialData;

    if (!nome || !contato || !mensagem) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const texto = `*Pedido de Apoio Social*\n*Nome:* ${nome}\n*Contato:* ${contato}\n*Email:* ${email || "Não informado"}\n*Mensagem:* ${mensagem}`;
    const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

    window.open(urlWhatsApp, "_blank");
    setSocialSubmitted(true);
  };

  const handleResetSocial = () => {
    setSocialSubmitted(false);
    setSocialData({ nome: "", contato: "", email: "", mensagem: "" });
  };

  return (
    <main>
      <h1 className="temapagina">Precisa de Ajuda?</h1>
      <div className="container6">
        {/* Seção Apoio Espiritual */}
        <section className="apoioespiritual">
          <h2>Espiritual?</h2>
          <p className="apresentacao-espiritual">
            Se você está passando por um momento difícil, não precisa enfrentar
            isso sozinho(a).
          </p>
          <button
            type="button"
            className="apoio_espiritual-toggle"
            onClick={() => toggleSection("espiritual")}
          >
            {openSection === "espiritual" ? "Fechar" : "Solicitar Apoio"}
          </button>
          <div className={`espiritual ${openSection === "espiritual" ? "ativo" : ""}`}>
            {espiritualSubmitted ? (
              <div className="mensagem-sucesso">
                <h2>Pedido de Apoio Iniciado!</h2>
                <p>
                  Estamos muito felizes em saber que você tem interesse em receber
                  apoio espiritual. O WhatsApp foi aberto para você receber nosso
                  apoio o mais rápido possível.
                </p>
                <button
                  type="button"
                  onClick={handleResetEspiritual}
                  className="btn-voltar"
                >
                  Voltar
                </button>
              </div>
            ) : (
              <form className="apoio-es" id="apoio-es" onSubmit={handleSubmitEspiritual}>
                <p className="txtapresentacao">
                  Compartilhe conosco como podemos te ajudar, queremos orar e
                  caminhar com você.
                </p>
                <div className="campo">
                  <label htmlFor="nomeespiritual">Nome e Sobrenome:</label>
                  <input
                    type="text"
                    name="nome-espiritual"
                    id="nomeespiritual"
                    value={espiritualData.nome}
                    onChange={(e) =>
                      setEspiritualData({ ...espiritualData, nome: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="contatoespiritual">Numero para Contato:</label>
                  <input
                    type="tel"
                    name="contato-espiritual"
                    id="contatoespiritual"
                    value={espiritualData.contato}
                    onChange={(e) =>
                      setEspiritualData({
                        ...espiritualData,
                        contato: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="mensagem-espiritual">Escreva sua Mensagem:</label>
                  <textarea
                    className="mensagem"
                    id="mensagem-espiritual"
                    name="mensagem-espiritual"
                    rows="5"
                    value={espiritualData.mensagem}
                    onChange={(e) =>
                      setEspiritualData({
                        ...espiritualData,
                        mensagem: e.target.value,
                      })
                    }
                    placeholder="Digite sua mensagem aqui...&#10;&#10;Aqui você recebe:&#10;Oração,&#10;Aconselhamento,&#10;Acompanhamento e etc."
                    required
                  />
                </div>
                <div className="campo">
                  <button className="btn-enviar-espiritual" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Seção Apoio Social */}
        <section className="apoiosocial">
          <h2>Apoio Social?</h2>
          <p className="apresentacao-social">
            Seu pedido será tratado com carinho (ou muita atenção) e total
            confidencialidade.
          </p>
          <button
            type="button"
            className="apoio_social-toggle"
            onClick={() => toggleSection("social")}
          >
            {openSection === "social" ? "Fechar" : "Solicitar Apoio"}
          </button>
          <div className={`social ${openSection === "social" ? "ativo" : ""}`}>
            {socialSubmitted ? (
              <div className="mensagem-sucesso">
                <h2>Pedido de Apoio Iniciado!</h2>
                <p>
                  Estamos para te apoiar, faremos o possível para te ajudar no que
                  você precisar. O WhatsApp foi aberto para você receber nosso apoio
                  o mais rápido possível.
                </p>
                <button
                  type="button"
                  onClick={handleResetSocial}
                  className="btn-voltar"
                >
                  Voltar
                </button>
              </div>
            ) : (
              <form className="apoio-sc" id="apoio-sc" onSubmit={handleSubmitSocial}>
                <p className="txtapresentacao">
                  Descreva em que área você precisa de ajuda, e conte nos um pouco
                  sobre sua situação.
                </p>
                <div className="campo">
                  <label htmlFor="nomesocial">Nome e Sobrenome *</label>
                  <input
                    type="text"
                    name="nome-social"
                    id="nomesocial"
                    value={socialData.nome}
                    onChange={(e) =>
                      setSocialData({ ...socialData, nome: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="contatosocial">Numero para Contato *</label>
                  <input
                    type="text"
                    name="contato-social"
                    id="contatosocial"
                    value={socialData.contato}
                    onChange={(e) =>
                      setSocialData({ ...socialData, contato: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="campo">
                  <label htmlFor="emailsocial">Email: (opcional)</label>
                  <input
                    type="email"
                    name="email-social"
                    id="emailsocial"
                    value={socialData.email}
                    onChange={(e) =>
                      setSocialData({ ...socialData, email: e.target.value })
                    }
                  />
                </div>
                <div className="campo">
                  <label htmlFor="mensagem-social">Escreva sua Mensagem:</label>
                  <textarea
                    className="mensagem"
                    id="mensagem-social"
                    name="mensagem-social"
                    rows="5"
                    value={socialData.mensagem}
                    onChange={(e) =>
                      setSocialData({ ...socialData, mensagem: e.target.value })
                    }
                    placeholder="Digite sua mensagem aqui...&#10;&#10;Aqui você pode receber:&#10;Ajuda prática,&#10;Suprimentos para necessidades,&#10;Suporte familiar e etc."
                    required
                  />
                </div>
                <div className="campo">
                  <button className="btn-enviar-social" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Seção Outros Assuntos */}
        <section className="outros_assuntos">
          <h2>Outros Assuntos</h2>
          <p className="apresentacao-outros">
            Para dúvidas, informações ou qualquer outro assunto.
          </p>
          <button
            type="button"
            className="outros_assuntos-toggle"
            onClick={() => toggleSection("outros")}
          >
            {openSection === "outros" ? "Fechar" : "Entrar em contato"}
          </button>

          <div className={`outros ${openSection === "outros" ? "ativo" : ""}`}>
            <p>
              Entre em contato com nossa equipe, escolhendo um dos canais abaixo:
            </p>

            <a
              href="https://wa.me/351969879724"
              className="whatsapp-float"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <img src="/imagens/whats100.webp" alt="WhatsApp" width="50px" />
            </a>

            <a href="mailto:gilbertogian.rs@gmail.com" title="Gmail">
              <img src="/imagens/gmail100.png" alt="Gmail" height="50px" />
            </a>

            <a
              href="https://ig.me/m/avivaerestaura_sjm"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Direct"
            >
              <img
                src="/imagens/logo_instagram_200.png"
                alt="Instagram"
                width="50"
              />
            </a>
            <p>Ou ligue nos:</p>
            <p className="numero_telefone">969 879 724</p>
          </div>
        </section>
      </div>
    </main>
  );
}
