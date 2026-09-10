// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

primaryNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active section highlight in nav
const sections = document.querySelectorAll('main .section, .hero');
const navLinks = document.querySelectorAll('.primary-nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? '' : '';
      });
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.primary-nav a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
