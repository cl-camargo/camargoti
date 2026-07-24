// CAMARGO Soluções em TI — comportamento do menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menuToggle');
  var nav = document.querySelector('nav.links');

  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('nav-open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggle.addEventListener('click', toggleMenu);

  // Fecha o menu ao clicar em um link (âncora)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fecha o menu ao tocar/clicar fora dele
  document.addEventListener('click', function (event) {
    if (!nav.classList.contains('nav-open')) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  // Fecha o menu ao redimensionar para desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) closeMenu();
  });
});
