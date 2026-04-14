
let botaomenu = document.querySelector('.menu-toggle')
let menu = document.querySelector('.menu')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})

/* Espiritual */
let botaoespiritual = document.querySelector('.apoio_espiritual-toggle') 
let apoioespiritual = document.querySelector('.espiritual')

/* Social */
let botaosocial = document.querySelector('.apoio_social-toggle')
let apoiosocial = document.querySelector('.social')
/* Outros */
let botaooutros = document.querySelector('.outros_assuntos-toggle')
let apoiooutros = document.querySelector('.outros')

botaoespiritual.addEventListener('click', () => {
    apoioespiritual.classList.toggle('ativo')
})

botaosocial.addEventListener('click', () => {
})

botaooutros.addEventListener('click', () => {
    apoiooutros.classList.toggle('ativo')
})

let botaoformulario = document.querySelector('.btn-inscricao-toggle')
let formularioencontro = document.querySelector('.formulario-container')

botaoformulario.addEventListener('click', () => {
    formularioencontro.classList.toggle('ativo')
})





// Função para enviar mensagem de apoio espiritual
function enviarMensagemEspiritual() {
    const mensagem = document.querySelector('.espiritual textarea').value;
    const nome = document.querySelector('.espiritual input[type="text"]').value;
    const email = document.querySelector('.espiritual input[type="email"]').value;
    
    if (mensagem && nome && email) {
        console.log('Mensagem Espiritual:', { nome, email, mensagem });
        alert('Obrigado! Sua mensagem foi enviada.');
        document.querySelector('.espiritual form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para enviar mensagem de apoio social
function enviarMensagemSocial() {
    const mensagem = document.querySelector('.social textarea').value;
    const nome = document.querySelector('.social input[type="text"]').value;
    const email = document.querySelector('.social input[type="email"]').value;
    
    if (mensagem && nome && email) {
        console.log('Mensagem Social:', { nome, email, mensagem });
        alert('Obrigado! Sua mensagem foi enviada.');
        document.querySelector('.social form').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Event listeners para botões de envio
document.querySelector('.espiritual .enviar-btn')?.addEventListener('click', enviarMensagemEspiritual);
document.querySelector('.social .enviar-btn')?.addEventListener('click', enviarMensagemSocial);

// Função para enviar mensagem de encontro via WhatsApp

function enviarMensagemEncontro() {
    const form = document.getElementById('formulario-encontro');
    const nome = form.querySelector('input[name="nome"]')?.value;
    const email = form.querySelector('input[name="email"]')?.value;
    const telefone = form.querySelector('input[name="telefone"]')?.value;
    const assunto = form.querySelector('input[name="assunto"]')?.value;
    const mensagem = form.querySelector('textarea[name="mensagem"]')?.value;
    
    if (nome && email && telefone && assunto && mensagem) {
        const texto = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
        const urlWhatsApp = `https://wa.me/351969879724?text=${encodeURIComponent(texto)}`;
        window.open(urlWhatsApp, '_blank');
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.querySelector('#formulario-encontro .enviar-btn')?.addEventListener('click', enviarMensagemEncontro);