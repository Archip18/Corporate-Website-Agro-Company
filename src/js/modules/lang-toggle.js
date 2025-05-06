
document.addEventListener('DOMContentLoaded', function() {
    const langRadios = document.querySelectorAll('input[name="lang"]');

    const translations = {
        ua: {
            home: 'Головна',
            about: 'Про компанію',
            services: 'Послуги',
            news: 'Новини',
            location: 'Розташування',
            location_nav: 'Розташування',
            location_title: 'Наше розташування',
            'hero-title': 'Ваш надійний партнер в аграрних рішеннях',
            'hero-desc': 'Ми пропонуємо інноваційні рішення для аграрного сектору, що допомагають досягти успіху. Наша команда експертів завжди готова підтримати вас на кожному етапі.',
            'hero-more': 'Детальніше',
            'hero-contact': 'Зв\'язатися',
            'main-title': 'Наші продукти та послуги для вас',
            'main-subtitle': 'Ми пропонуємо широкий асортимент аграрної продукції та професійні послуги, що відповідають потребам сучасного сільського господарства. Наша команда експертів завжди готова допомогти вам досягти успіху.',
            'card1-title': 'Продукція відповідає найвищим стандартам',
            'card1-desc': 'Наші продукти вирощуються з дотриманням усіх технологічних норм.',
            'card2-title': 'Професійні послуги для аграріїв',
            'card2-desc': 'Ми надаємо консалтингові послуги для оптимізації вашого бізнесу.',
            'card3-title': 'Забезпечення якісною продукцією',
            'card3-desc': 'Ми постачаємо насіння та добрива найвищої якості.',
            'footer-text': '© 2025 Cropia. Всі права захищені.',
            'footer-contacts-title': 'К<br>О<br>Н<br>Т<br>А<br>К<br>Т<br>И',
            'footer-address-label': 'Адреса:',
            'footer-phone-label': 'Телефон:',
            'footer-email-label': 'Email:',
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
            location: 'Location',
            location_nav: 'Location',
            location_title: 'Our Location',
            'hero-title': 'Your reliable partner in agricultural solutions',
            'hero-desc': 'We offer innovative solutions for the agricultural sector to help you succeed. Our team of experts is always ready to support you at every stage.',
            'hero-more': 'Learn more',
            'hero-contact': 'Contact us',
            'main-title': 'Our products and services for you',
            'main-subtitle': 'We offer a wide range of agricultural products and professional services to meet the needs of modern agriculture. Our team of experts is always ready to help you succeed.',
            'card1-title': 'Products meet the highest standards',
            'card1-desc': 'Our products are grown in compliance with all technological standards.',
            'card2-title': 'Professional services for farmers',
            'card2-desc': 'We provide consulting services to optimize your business.',
            'card3-title': 'Supplying quality products',
            'card3-desc': 'We supply the highest quality seeds and fertilizers.',
            'footer-text': '© 2025 Cropia. All rights reserved.',
            'footer-contacts-title': 'C<br>O<br>N<br>T<br>A<br>C<br>T<br>S',
            'footer-address-label': 'Address:',
            'footer-phone-label': 'Phone:',
            'footer-email-label': 'Email:',
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
            location: 'Ubicación',
            location_nav: 'Ubicación',
            location_title: 'Nuestra ubicación',
            'hero-title': 'Su socio confiable en soluciones agrícolas',
            'hero-desc': 'Ofrecemos soluciones innovadoras para el sector agrícola que le ayudan a tener éxito. Nuestro equipo de expertos siempre está listo para apoyarle en cada etapa.',
            'hero-more': 'Más información',
            'hero-contact': 'Contactar',
            'main-title': 'Nuestros productos y servicios para usted',
            'main-subtitle': 'Ofrecemos una amplia gama de productos agrícolas y servicios profesionales que satisfacen las necesidades de la agricultura moderna. Nuestro equipo de expertos siempre está listo para ayudarle a tener éxito.',
            'card1-title': 'Productos que cumplen con los más altos estándares',
            'card1-desc': 'Nuestros productos se cultivan cumpliendo todas las normas tecnológicas.',
            'card2-title': 'Servicios profesionales para agricultores',
            'card2-desc': 'Ofrecemos servicios de consultoría para optimizar su negocio.',
            'card3-title': 'Suministro de productos de calidad',
            'card3-desc': 'Suministramos semillas y fertilizantes de la más alta calidad.',
            'footer-text': '© 2025 Cropia. Todos los derechos reservados.',
            'footer-contacts-title': 'C<br>O<br>N<br>T<br>A<br>C<br>T<br>O',
            'footer-address-label': 'Dirección:',
            'footer-phone-label': 'Teléfono:',
            'footer-email-label': 'Email:',
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
                if (key === 'footer-contacts-title') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    langRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            translatePage(this.value);
        });
    });

    
    const checkedLang = document.querySelector('input[name="lang"]:checked');
    if (checkedLang) {
        translatePage(checkedLang.value);
    }
});
