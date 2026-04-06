// ========== MENU HAMBÚRGUER ==========
const botao = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-nav');

botao.addEventListener('click', () => {
  menu.classList.toggle('aberto');
});

// ========== HEADER FIXO AO ROLAR ==========
const header = document.querySelector('.main_header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#fff';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    header.style.right = '0';
    header.style.zIndex = '1000';
    header.style.transition = 'all 0.3s ease';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
});

// ========== FADE IN AO ROLAR ==========
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