import mobileNav from './modules/mobile-nav.js';
import './modules/lang-toggle.js';
import './modules/activeMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  // Анімація при прокручуванні для всіх ефектів
  const animatedEls = document.querySelectorAll('[class*="animate-"]');
  const onScroll = () => {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('show');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll(); // запуск при завантаженні


});

mobileNav();
