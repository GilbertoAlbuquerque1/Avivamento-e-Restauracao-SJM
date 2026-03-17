let botao = document.querySelector('.menu-toggle')
let menu = document.querySelector('.menu')

botao.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})