document.addEventListener('DOMContentLoaded', function() {
  // --- Анімація для after-video ---
  const section = document.querySelector('.company-section');
  const image = document.querySelector('.company-image-placeholder');
  const info = document.querySelector('.company-info');
  const animatedTexts = [
    ...document.querySelectorAll('.company-section .animate-text-1, .company-section .animate-text-2, .company-section .animate-text-3, .company-section .animate-text-4, .company-section .animate-text-5, .company-section .animate-text-6, .company-section .animate-text-7, .company-section .animate-text-8')
  ];
  const detailBtn = document.querySelector('.button-detail');

  if (section && image && info) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('in-view');
          image.classList.add('in-view');
          info.classList.add('in-view');
          animatedTexts.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('in-view');
            }, i * 120);
          });
          if (detailBtn) {
            setTimeout(() => {
              detailBtn.classList.add('button-detail--visible');
            }, animatedTexts.length * 120 + 1000);
          }
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(section);
  }

  // --- Анімація для video-bg ---
  const videoBgContent = document.querySelector('.video-bg__content');
  if (videoBgContent) {
    const animatedTextsBg = [
      ...videoBgContent.querySelectorAll('.animate-text-1, .animate-text-2, .animate-text-3, .animate-text-4, .animate-text-5, .animate-text-6, .animate-text-7, .animate-text-8')
    ];
    const observerBg = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatedTextsBg.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('in-view');
            }, i * 140);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observerBg.observe(videoBgContent);
  }

  // --- Валідація форми футера ---
  const footerForm = document.querySelector('.footer__question-form');
  if (footerForm) {
    footerForm.addEventListener('submit', function(e) {
      const nameInput = footerForm.querySelector('input[name="name"]');
      const phoneInput = footerForm.querySelector('input[name="phone"]');
      let valid = true;
      if (!nameInput.value.match(/^[A-Za-zА-Яа-яІіЇїЄєҐґ'\- ]{2,}$/)) {
        alert("Введіть коректне ім'я (тільки літери, мінімум 2 символи)");
        valid = false;
      }
      if (!phoneInput.value.match(/^[\+0-9\s\-\(\)]{10,}$/) || /[A-Za-zА-Яа-яІіЇїЄєҐґ]/.test(phoneInput.value)) {
        alert("Введіть коректний номер телефону (мінімум 10 цифр, дозволені +, -, (), пробіли)");
        valid = false;
      }
      if (!valid) e.preventDefault();
    });
  }
});