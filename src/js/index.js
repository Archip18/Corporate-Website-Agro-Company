import {mobileNav } from './modules/mobile-nav.js';
import './modules/footer-effect.js';
import './modules/lang-toggle.js';
import './modules/activeMenu.js';
import '../js/after-video-anim.js';

document.addEventListener('DOMContentLoaded', () => {
  let animatedEls = document.querySelectorAll('[class*="animate-"]');

  const footer = document.querySelector('.animate-footer');
  if (footer && ![...animatedEls].includes(footer)) {
    animatedEls = [...animatedEls, footer];
  }

  const onScroll = () => {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 200) {
        el.classList.add('show');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll();
  mobileNav();
});


