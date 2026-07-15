const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

const burger = document.getElementById('burgerBtn');
burger.addEventListener('click', () => header.classList.toggle('nav-open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => header.classList.remove('nav-open')));

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.querySelector('.form-submit').textContent = 'Solicitud enviada';
  });
}
