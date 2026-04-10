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