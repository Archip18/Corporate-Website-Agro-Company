// Модуль перемикача мов для Cropia

document.addEventListener('DOMContentLoaded', function() {
    const langRadios = document.querySelectorAll('input[name="lang"]');

    const translations = {
        ua: {
            home: 'Головна',
            about: 'Про компанію',
            services: 'Послуги',
            news: 'Новини',
            contacts: 'Контакти',
            lang: {
                ua: 'УКР',
                en: 'АНГЛ',
                es: 'ІСП'
            }
        },
        en: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            news: 'News',
            contacts: 'Contacts',
            lang: {
                ua: 'UA',
                en: 'EN',
                es: 'ES'
            }
        },
        es: {
            home: 'Inicio',
            about: 'Sobre la empresa',
            services: 'Servicios',
            news: 'Noticias',
            contacts: 'Contactos',
            lang: {
                ua: 'UA',
                en: 'EN',
                es: 'ES'
            }
        }
    };

    function translatePage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        }); // Кнопки мов не перекладаємо
    }

    langRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            translatePage(this.value);
        });
    });

    // Перекладаємо сторінку за замовчуванням при завантаженні
    const checkedLang = document.querySelector('input[name="lang"]:checked');
    if (checkedLang) {
        translatePage(checkedLang.value);
    }
});
