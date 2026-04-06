const botao = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-nav');
const header = document.querySelector('.main_header');
const logo = document.querySelector('.Logo_texto');
const menuLinks = document.querySelectorAll('.menu-desktop a');

botao.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#fff';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    header.style.transition = 'all 0.3s ease';
    logo.style.color = '#333';
    menuLinks.forEach(link => link.style.color = '#000');
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
    logo.style.color = '#fff';
    menuLinks.forEach(link => link.style.color = '#fff');
  }
});

const observador = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.plans, .aula-card, .hero-content, .title').forEach(el => {
  el.classList.add('fade-in');
  observador.observe(el);
});

logo.style.color = '#fff';

