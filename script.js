let botaomenu = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu");

/* 
   ACESSIBILIDADE (ARIA):
   O atributo 'aria-expanded' indica a tecnologias assistivas (como leitores de tela) 
   se o conteúdo controlado pelo botão está visível (true) ou oculto (false).
*/
botaomenu.addEventListener("click", () => {
  const estaAtivo = menu.classList.toggle("ativo");
  // Atualiza o estado de expansão para acessibilidade
  botaomenu.setAttribute("aria-expanded", estaAtivo);
});

/* 
   PADRONIZAÇÃO DE ACCORDIONS
   Esta função recebe o botão clicado, o conteúdo a ser exibido e uma lista de outros 
   conteúdos que devem ser fechados (removendo a classe 'ativo').
*/
function gerenciarAccordion(botao, alvo, outros) {
  if (botao && alvo) {
    botao.addEventListener("click", () => {
      alvo.classList.toggle("ativo");
      outros.forEach((item) => {
        if (item) item.classList.remove("ativo");
      });
    });
  }
}

let apoioespiritual = document.querySelector(".espiritual");
let apoioessocial = document.querySelector(".social");
let apoiooutros = document.querySelector(".outros");

gerenciarAccordion(
  document.querySelector(".apoio_espiritual-toggle"),
  apoioespiritual,
  [apoioessocial, apoiooutros],
);
gerenciarAccordion(
  document.querySelector(".apoio_social-toggle"),
  apoioessocial,
  [apoioespiritual, apoiooutros],
);
gerenciarAccordion(
  document.querySelector(".outros_assuntos-toggle"),
  apoiooutros,
  [apoioespiritual, apoioessocial],
);

let formularioencontro = document.querySelector(".formulario-encontro");
let formularioparticipe = document.querySelector(".formulario-participe");

let botaoformularioi = document.querySelector(".btn-inscricao-toggle");

if (botaoformularioi && formularioencontro) {
  botaoformularioi.addEventListener("click", () => {
    formularioencontro.classList.toggle("ativo");
    formularioparticipe.classList.remove("ativo");

    if (formularioencontro.classList.contains("ativo")) {
      setTimeout(() => {
        formularioencontro.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  });
}

let botaoformulario2 = document.querySelector(".btn-participe-toggle");

if (botaoformulario2 && formularioparticipe) {
  botaoformulario2.addEventListener("click", () => {
    formularioparticipe.classList.toggle("ativo");
    formularioencontro.classList.remove("ativo");

    if (formularioparticipe.classList.contains("ativo")) {
      setTimeout(() => {
        formularioparticipe.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  });
}

const pedidoapoioespiritual = document.getElementById("apoio-es");

if (pedidoapoioespiritual) {
  pedidoapoioespiritual.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome =
      this.querySelector('input[name="nome-espiritual"]')?.value || "";
    const numerocontato =
      this.querySelector('input[name="contato-espiritual"]')?.value || "";
    const mensagemespiritual =
      this.querySelector('textarea[name="mensagem-espiritual"]')?.value || "";

    if (nome && numerocontato && mensagemespiritual) {
      const texto = `*Pedido de Apoio Espiritual*\n*Nome:* ${nome}\n*Contato:* ${numerocontato}\n*Mensagem:* ${mensagemespiritual}`;
      const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

      window.open(urlWhatsApp, "_blank");
      this.innerHTML = `
                <div class="mensagem-sucesso">
                    <h2>Pedido de Apoio Iniciado!</h2>
                    <p>Estamos muito felizes em saber que você tem interesse em receber apoio espiritual. O WhatsApp foi aberto para você receber nosso apoio o mais rápido possível.</p>
                    <button type="button" onclick="location.reload()" class="btn-voltar">
                        Voltar
                    </button>
                </div>
            `;
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}

const pedidoapoiosocial = document.getElementById("apoio-sc");

if (pedidoapoiosocial) {
  pedidoapoiosocial.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.querySelector('input[name="nome-social"]')?.value || "";
    const numerocontato =
      this.querySelector('input[name="contato-social"]')?.value || "";
    const email = this.querySelector('input[name="email-social"]')?.value || "";
    const mensagemsocial =
      this.querySelector('textarea[name="mensagem-social"]')?.value || "";

    if (nome && numerocontato && mensagemsocial) {
      const texto = `*Pedido de Apoio Social*\n*Nome:* ${nome}\n*Contato:* ${numerocontato}\n*Email:* ${email}\n*Mensagem:* ${mensagemsocial}`;
      const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

      window.open(urlWhatsApp, "_blank");
      this.innerHTML = `
                <div class="mensagem-sucesso">
                    <h2>Pedido de Apoio Iniciado!</h2>
                    <p>Estamos para te apoiar, faremos o possível para te ajudar no que você precisar. O WhatsApp foi aberto para você receber nosso apoio o mais rápido possível.</p>
                    <button type="button" onclick="location.reload()" class="btn-voltar">
                        Voltar
                    </button>
                </div>
            `;
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
}

if (formularioencontro) {
  formularioencontro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.querySelector('input[name="nome-encontro"]')?.value || "";
    const email =
      this.querySelector('input[name="email-encontro"]')?.value || "";
    const telefone =
      this.querySelector('input[name="telefone-encontro"]')?.value || "";
    const endereco =
      this.querySelector('input[name="endereco-encontro"]')?.value || "";
    const cidade =
      this.querySelector('input[name="cidade-encontro"]')?.value || "";

    if (nome && email && telefone && endereco && cidade) {
      const texto = `*Inscrição - Encontro com Deus*\n*Nome:* ${nome}\n*Email:* ${email}\n*Telefone:* ${telefone}\n*Endereço:* ${endereco}\n*Cidade:* ${cidade}`;
      const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

      window.open(urlWhatsApp, "_blank");
      this.innerHTML = `
                <div class="mensagem-sucesso">
                    <h2>Inscrição iniciada com sucesso!</h2>
                    <p>Estamos muito felizes em saber que você tem interesse em participar deste evento extraordinário. O WhatsApp foi aberto para você concluir o processo de inscrição com um de nossos colaboradores, por favor siga as instruções, e esteja atento às condições que lhe serão apresentadas.</p>
                    <button type="button" onclick="location.reload()" class="btn-voltar">Voltar</button>
                    <p>Se precisa de ajuda,<a href="ajuda.html" target="_self">clique aqui</a></p>
                </div>
            `;
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
}

if (formularioparticipe) {
  formularioparticipe.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome =
      this.querySelector('input[name="nome-participe"]')?.value || "";
    const telefone =
      this.querySelector('input[name="telefone-participe"]')?.value || "";
    const endereco =
      this.querySelector('input[name="endereco-participe"]')?.value || "";
    const cidade =
      this.querySelector('input[name="cidade-participe"]')?.value || "";

    if (nome && telefone && endereco && cidade) {
      const texto = `*Inscrição - Participar de uma Célula*\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Endereço:* ${endereco}\n*Cidade:* ${cidade}`;
      const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;

      window.open(urlWhatsApp, "_blank");
      this.innerHTML = `
                <div class="mensagem-sucesso">
                    <h2>Pedido Iniciado!</h2>
                    <p>Estamos muito felizes em saber que você tem interesse em participar de uma de nossas células. O WhatsApp foi aberto para você concluir o processo, por favor siga as instruções, e esteja atento quando um de nossos colaboradores entrar em contato.</p>
                    <button type="button" onclick="location.reload()" class="btn-voltar">Voltar</button>
                    <a href="ajuda.html" target="_self">Se precisa de ajuda, clique aqui</a>
                </div>
            `;
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
}

function fecharFormulario() {
  if (formularioencontro) formularioencontro.classList.remove("ativo");
  if (formularioparticipe) formularioparticipe.classList.remove("ativo");
}
