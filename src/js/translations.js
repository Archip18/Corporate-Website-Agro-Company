const translations = {
  ua: {
    location_nav: "Розташування",
    location_title: "Наше розташування"
  },
  en: {
    location_nav: "Location",
    location_title: "Our Location"
  },
  es: {
    location_nav: "Ubicación",
    location_title: "Nuestra Ubicación"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Автоматичне підключення до перемикача мов, якщо такий є
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.lang-toggle input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
      setLanguage(this.value);
    });
  });
  // Встановити мову за замовчуванням (UA)
  setLanguage(document.querySelector('.lang-toggle input[type="radio"]:checked').value || 'ua');
});
