const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.mobile-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
    toggle.textContent = opened ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();



// JORALAR preloader: sahifa to'liq yuklangach kamida 1.85 soniya ko'rsatiladi.
window.addEventListener('load', function () {
  const preloader = document.getElementById('joralar-preloader');
  if (!preloader) return;
  window.setTimeout(function () {
    preloader.classList.add('is-loaded');
    window.setTimeout(function () {
      preloader.remove();
    }, 700);
  }, 1850);
});
