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
    apoiosocial.classList.toggle('ativo')
})

botaooutros.addEventListener('click', () => {
    apoiooutros.classList.toggle('ativo')
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