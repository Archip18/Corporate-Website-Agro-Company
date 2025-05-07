import mobileNav from './modules/mobile-nav.js';
import './modules/lang-toggle.js';
import './modules/activeMenu.js';

document.addEventListener('DOMContentLoaded', () => {
  
  const animatedEls = document.querySelectorAll('[class*="animate-"]');
  // Додаємо футер явно, якщо його немає у вибірці
  const footer = document.querySelector('.animate-footer');
  if (footer && ![...animatedEls].includes(footer)) {
    animatedEls = [...animatedEls, footer];
  }
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
  onScroll();


});

mobileNav();
