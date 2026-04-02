const botao = document.querySelector('.hamburguer');

const menu = document.querySelector('menu-nav');


botao.addEventListener('click', () => {
    menu.classList.toggle('aberto');
});