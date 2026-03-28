let botaomenu = document.querySelector('.menu-toggle')
let menu = document.querySelector('.menu')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})

let botaoespiritual = document.querySelector('.apoio_espiritual-toggle')
let apoioespiritual = document.querySelector('.espiritual')
let botaosocial = document.querySelector('.apoio_social-toggle')
let apoiosocial = document.querySelector('.social')

botaoespiritual.addEventListener('click', () => {
    apoioespiritual.classList.toggle('ativo')
})

botaosocial.addEventListener('click', () => {
    apoiosocial.classList.toggle('ativo')
})