
document.addEventListener('DOMContentLoaded', function() {
    const langRadios = document.querySelectorAll('input[name="lang"]');
    const langLabels = document.querySelectorAll('.lang-toggle-label');
    // Remove animation on page load
    langLabels.forEach(label => label.classList.remove('lang-animate'));

    // Get saved language from localStorage or default to 'ua'
    let currentLang = localStorage.getItem('siteLang') || 'ua';

    const translations = {
        ua: {
            home: "Головна",
            about: "Про компанію",
            services: "Послуги",
            news: "Новини",
            location_nav: "Розташування",
            'footer-address-label': 'Адреса:',
            'footer-phone-label': 'Телефон:',
            'footer-email-label': 'Email:',
            'footer-question-title': 'Якщо у Вас є питання',
            'footer-question-subtitle': 'залиште контактні дані і ми зв\'яжемося з Вами',
            'footer-question-name-ph': "Введіть ім'я",
            'footer-question-phone-ph': 'Введіть телефон',
            'footer-question-submit': 'Відправити',
            'footer-telegram-label': 'Telegram:',
            'footer-hours-label': 'Графік роботи:',
            'footer-hours-value': 'Пн-Пт з 8:00 до 19:00',
            'footer-phone-title': 'Будь ласка, введіть номер телефону у правильному форматі (лише цифри, знаки "+", "-", дужки та пробіли. Мінімальна довжина — 10 символів.)',
            'footer-name-title': 'Будь ласка, введіть правильне ім’я (лише літери, щонайменше 2 символи.)',
            // Головна секція
            'location_title': 'Наше розташування',
            'location_map_title': 'Офіс на Google Maps',
            'hero-title': 'Ваш надійний партнер в аграрних рішеннях',
            'hero-desc': 'Ми пропонуємо інноваційні рішення для аграрного сектору, що допомагають досягти успіху. Наша команда експертів завжди готова підтримати вас на кожному етапі.',
            'hero-more': 'Детальніше',
            'hero-contact': "Зв'язатися",
            // Основний зміст
            'main-title': 'Наші продукти та послуги для вас',
            'main-subtitle': 'Ми пропонуємо широкий асортимент аграрної продукції та професійні послуги, що відповідають потребам сучасного сільського господарства. Наша команда експертів завжди готова допомогти вам досягти успіху.',
            'card1-title': 'Продукція відповідає найвищим стандартам',
            'card1-desc': 'Наші продукти вирощуються з дотриманням усіх технологічних норм.',
            'card2-title': 'Професійні послуги для аграріїв',
            'card2-desc': 'Ми надаємо консалтингові послуги для оптимізації вашого бізнесу.',
            'card3-title': 'Забезпечення якісною продукцією',
            'card3-desc': 'Ми постачаємо насіння та добрива найвищої якості.',
            // Новини
            'news-header': 'Новини',
            'news1-title': 'ЕКСПОРТ УКРАЇНСЬКОЇ ПРОДУКЦІЇ ЗА КОРДОН',
            'news1-date': '10 травня 2025',
            'news1-desc': 'Українські аграрії активно розвивають експорт, забезпечуючи поставки зерна, олії та іншої продукції на світові ринки. Завдяки сучасній логістиці та високій якості товарів, країна зміцнює свої позиції серед провідних експортерів сільськогосподарської продукції...',
            'news1-link': 'читати далі',
            'news2-title': 'ОСОБЛИВОСТІ ЗАСТОСУВАННЯ ФОСФОРНИХ ДОБРИВ',
            'news2-date': '5 травня 2025',
            'news2-desc': 'Фосфорні добрива відіграють ключову роль у формуванні кореневої системи та підвищенні врожайності. Для досягнення найкращих результатів важливо враховувати тип ґрунту, строки та способи внесення. Оптимальне застосування фосфору сприяє розвитку рослин і забезпечує стабільний урожай навіть у складних погодних умовах...',
            'news2-link': 'читати далі',
            'news3-title': 'ДОДАТКОВІ ПІЛЬГИ ДЛЯ АГРАРІЇВ ПІДЧАС ВІЙНИ',
            'news3-date': '28 квітня 2025',
            'news3-desc': 'У період воєнного стану держава запровадила додаткові пільги для аграріїв: податкові послаблення, спрощене кредитування та підтримку логістики. Це дозволяє сільгоспвиробникам зберігати стабільність, розвивати господарства та забезпечувати країну продовольством навіть у складних умовах....',
            'news3-link': 'читати далі',
            'news4-title': 'ПРОГНОЗИ НА ВРОЖАЙ 2025',
            'news4-date': '20 квітня 2025',
            'news4-desc': 'Аграрії очікують гарний врожай у 2025 році завдяки сприятливій погоді, сучасним технологіям та якісному насінню. Експерти прогнозують зростання виробництва пшениці, кукурудзи та інших основних культур. Це створює позитивні перспективи для аграрного сектору країни....',
            'news4-link': 'читати далі',
            'news5-title': ' Інноваційні технології на полях України',
            'news5-date': '12 квітня 2025',
            'news5-desc': 'Українські аграрії все активніше впроваджують сучасні технології в сільське господарство. Завдяки використанню дронів, GPS-навігації та автоматизованих систем зрошення значно зростає ефективність виробництва та зменшується вплив на довкілля...',
            'news5-link': 'читати далі',
            'news6-title': 'Рекордний урожай пшениці на Півдні України',
            'news6-date': '2 квітня 2025',
            'news6-desc': 'Аграрії Херсонської області зібрали рекордний врожай пшениці за останні 10 років. Завдяки сприятливим погодним умовам та ефективному використанню добрив, середня врожайність склала понад 60 ц/га. Це створює позитивні перспективи для сільського господарства країни та забезпечує стабільність виробництва...',
            'news6-link': 'читати далі',
            'news-promo-title': 'Будьте в курсі головного!',
            'news-promo-desc': 'Читайте свіжі новини та аналітику агросектору — дізнавайтесь першими про важливе!',
            'news-promo-btn': 'Більше новин',
            // Після блокування відео
            'after-title': 'CROPIA — СУЧАСНІ РІШЕННЯ ДЛЯ АГРАРНОГО СЕКТОРУ',
            'after-desc': 'Ми команда досвідчених фахівців, яка працює для розвитку сільського господарства в Україні. Ми поєднуємо традиції агровиробництва з передовими технологіями, щоб створювати ефективні, надійні та довготривалі рішення для аграрного бізнесу.',
            'after-prod-title': 'Агровиробництво',
            'after-prod-desc': 'Вирощуємо зернові та технічні культури на основі сучасних технологій, агрохімічного аналізу ґрунтів і точного землеробства. Основна мета — максимальна врожайність за збереження природного балансу.',
            'after-consult-title': 'Консалтинг для аграріїв',
            'after-consult-desc': 'Надаємо фермерам практичні поради, технологічні карти, економічні розрахунки та рішення, що дозволяють зменшити витрати та підвищити ефективність ведення господарства.',
            'after-log-title': 'Зберігання та логістика',
            'after-log-desc': 'Організовуємо зберігання продукції на сертифікованих складах із дотриманням усіх стандартів якості. Забезпечуємо транспортування сировини та готової продукції по Україні з гарантією терміновості та збереження.',
            'after-btn': 'ДЕТАЛЬНІШЕ',
            // Сторінка «Послуги»
            'services-title': 'Наші Послуги',
            'services-plant-title': 'Рослинництво',
            'services-plant-desc': 'Ми вирощуємо зернові, технічні та овочеві культури, дотримуючись сучасних агротехнічних стандартів. Важливу роль відіграє впровадження елементів точного землеробства: аналіз ґрунтів, оптимізація внесення добрив та ефективне управління технікою. Завдяки цьому ми досягаємо високих врожаїв, зменшуємо витрати та дбаємо про навколишнє середовище.',
            'services-log-title': 'Зберігання та логістика сільгосппродукції',
            'services-log-desc': 'Ми забезпечуємо повний цикл зберігання та транспортування сільськогосподарської продукції. Наші склади обладнані сучасними системами вентиляції та контролю температури, що дозволяє зберігати якість продукції тривалий час. Організовуємо транспортування зерна, овочів та іншої продукції до переробних підприємств, елеваторів і торгових точок, дотримуючись усіх логістичних стандартів.',
            'services-consult-title': 'Агротехнологічний консалтинг',
            'services-consult-desc': 'Ми надаємо професійні консультації агровиробникам щодо підвищення ефективності господарювання. Наші експерти допомагають впроваджувати інноваційні рішення, оптимізувати виробничі процеси, підбирати добрива, засоби захисту рослин та обладнання. Також здійснюємо навчання персоналу, розробку індивідуальних планів розвитку господарств і супровід проектів на всіх етапах.',
            // Сторінка «Про нас»
            'about-title': 'Про компанію',
            'about-company-1': "Cropia — це організація, яка об'єднує досвід, знання та сучасні технології для ефективного розвитку аграрного сектору. Ми орієнтовані на забезпечення високої якості продукції та надання послуг, що відповідають найвищим стандартам.",
            'about-company-2': "З моменту заснування ми ставимо за мету стабільне і сталий розвиток, поєднуючи традиційні методи агровиробництва з передовими інноваціями. Наша компанія спеціалізується на виробництві сільськогосподарської продукції, зберіганні та логістиці, а також надає консалтингові послуги для аграріїв.",
            'about-company-3': "Ми надаємо нашим клієнтам не лише продукцію, але й цінні інструменти для ведення сталого аграрного бізнесу. Всі наші проекти спрямовані на підвищення ефективності і рентабельності агропідприємств, допомагаючи фермерам і бізнесам досягати високих результатів.",
            'about-founder-title': 'Засновник',
            'about-founder-intro': "Мене звати Архип — я засновник цієї компанії та людина, для якої аграрний сектор є не просто справою, а покликанням. Народжений і вирощений у сільській місцевості, змалку бачив, як важка праця на землі приносить плоди. З роками це перетворилося на бажання створити власне підприємство, яке поєднує повагу до природи з можливостями сучасних технологій.",
            'about-founder-1': "Я заснував компанію з однією метою — зробити аграрний сектор ефективнішим, прозорішим та ближчим до людей. Моє бачення — створити середовище, де кожен гектар землі працює на максимум, а кожен працівник знає, що він є важливою частиною великої справи.",
            'about-founder-2': "Моя освіта у сфері аграрних технологій, досвід управління, постійне навчання й участь у міжнародних проєктах допомогли сформувати команду однодумців, яка сьогодні працює над розвитком компанії. Ми не боїмося викликів — навпаки, ми бачимо в них можливості для зростання.",
            'about-team-title': 'Наша команда',
            'about-team-1': "Справжня сила нашої компанії — це команда. Ми не просто співробітники, ми — спільнота, об'єднана спільною метою: ефективно розвивати аграрний сектор України, поєднуючи досвід, інновації та щоденну самовіддачу.",
            'about-team-2': "У нашій роботі ми покладаємося на взаєморозуміння, довіру та відповідальність. Кожен працівник, незалежно від посади, робить свій внесок у загальний результат — і ми цінуємо це. Тут немає 'другорядних' завдань: кожен процес, від підготовки ґрунту до доставки готової продукції клієнту, — частина єдиної системи, яка працює злагоджено й ефективно.",
            'about-team-3': "Ми створюємо середовище, у якому підтримується розвиток і постійне вдосконалення. Молоді спеціалісти отримують наставництво від досвідчених колег, а досвідчені — нові ідеї та енергію молоді. Це партнерство поколінь формує нашу гнучкість, професіоналізм і відкритість до змін."

        },
        en: {
            home: "Home",
            about: "About",
            services: "Services",
            news: "News",
            location_nav: "Location",
            'footer-address-label': 'Address:',
            'footer-phone-label': 'Phone:',
            'footer-email-label': 'Email:',
            'footer-question-title': 'If you have a question',
            'footer-question-subtitle': 'leave your contact details and we will contact you',
            'footer-question-name-ph': "Enter your name",
            'footer-question-phone-ph': 'Enter your phone',
            'footer-question-submit': 'Send',
            'footer-telegram-label': 'Telegram:',
            'footer-hours-label': 'Working hours:',
            'footer-hours-value': 'Mon-Fri 8:00 to 19:00',
            'footer-phone-title': 'Please enter the phone number in the correct format (digits only, "+", "-", brackets and spaces allowed. Minimum length — 10 characters.)',
            'footer-name-title': 'Please enter a valid name (letters only, at least 2 characters.)',
            // Hero section
            'hero-title': 'Your reliable partner in agricultural solutions',
            'hero-desc': 'We offer innovative solutions for the agricultural sector to help you succeed. Our team of experts is always ready to support you at every stage.',
            'hero-more': 'Learn more',
            'hero-contact': 'Contact us',
            // Main content
            'main-title': 'Our products and services for you',
            'main-subtitle': 'We offer a wide range of agricultural products and professional services to meet the needs of modern agriculture. Our team of experts is always ready to help you succeed.',
            'location_title': 'Our Location',
            'location_map_title': 'Office on Google Maps',
            'card1-title': 'Products meet the highest standards',
            'card1-desc': 'Our products are grown in compliance with all technological standards.',
            'card2-title': 'Professional services for farmers',
            'card2-desc': 'We provide consulting services to optimize your business.',
            'card3-title': 'Supplying quality products',
            'card3-desc': 'We supply seeds and fertilizers of the highest quality.',
            // News
            'news-header': 'News',
            // News promo
            'news1-title': 'EXPORT OF UKRAINIAN PRODUCTS ABROAD',
            'news1-date': 'May 10, 2025',
            'news1-desc': 'Ukrainian farmers are actively developing exports, supplying grain, oil, and other products to world markets. Thanks to modern logistics and high product quality, the country strengthens its position among the leading exporters of agricultural products...',
            'news1-link': 'Read more',
            'news2-title': 'FEATURES OF PHOSPHORUS FERTILIZER APPLICATION',
            'news2-date': 'May 5, 2025',
            'news2-desc': 'Phosphorus fertilizers play a key role in root system formation and yield increase. For best results, it is important to consider soil type, timing, and application methods. Optimal phosphorus use promotes plant development and ensures stable yields even in challenging weather conditions...',
            'news2-link': 'Read more',
            'news3-title': 'ADDITIONAL BENEFITS FOR FARMERS DURING WAR',
            'news3-date': 'April 28, 2025',
            'news3-desc': 'During martial law, the state introduced additional benefits for farmers: tax relief, simplified lending, and logistics support. This allows agricultural producers to maintain stability, develop farms, and provide food for the country even in difficult conditions....',
            'news3-link': 'Read more',
            'news4-title': '2025 HARVEST FORECASTS',
            'news4-date': 'April 20, 2025',
            'news4-desc': 'Farmers expect a good harvest in 2025 due to favorable weather, modern technologies, and quality seeds. Experts predict increased production of wheat, corn, and other major crops. This creates positive prospects for the country’s agricultural sector....',
            'news4-link': 'Read more',
            'news5-title': 'Innovative Technologies in Ukrainian Fields',
            'news5-date': 'April 12, 2025',
            'news5-desc': 'Ukrainian farmers are increasingly implementing modern technologies in agriculture. The use of drones, GPS navigation, and automated irrigation systems significantly increases production efficiency and reduces environmental impact...',
            'news5-link': 'Read more',
            'news6-title': 'Record Wheat Harvest in Southern Ukraine',
            'news6-date': 'April 2, 2025',
            'news6-desc': 'Farmers in the Kherson region harvested a record wheat crop for the past 10 years. Thanks to favorable weather conditions and effective fertilizer use, the average yield exceeded 6 t/ha. This creates positive prospects for the country’s agriculture and ensures production stability...',
            'news6-link': 'Read more',
            'news-promo-title': 'Stay up to date!',
            'news-promo-desc': 'Read the latest news and analytics of the agro-sector — be the first to know about important things!',
            'news-promo-btn': 'More news',
            'news1-link': 'Read more',
            'news2-link': 'Read more',
            'news3-link': 'Read more',
            'news4-link': 'Read more',
            'news5-link': 'Read more',
            'news6-link': 'Read more',
            // After video block
            'after-title': 'CROPIA — MODERN SOLUTIONS FOR THE AGRICULTURAL SECTOR',
            'after-desc': 'We are a team of experienced specialists working for the development of agriculture in Ukraine. We combine agricultural traditions with advanced technologies to create effective, reliable and long-term solutions for agribusiness.',
            'after-prod-title': 'Crop Production',
            'after-prod-desc': 'We grow grain and industrial crops based on modern technologies, agrochemical soil analysis and precision farming. The main goal is maximum yield while maintaining natural balance.',
            'after-consult-title': 'Consulting for Farmers',
            'after-consult-desc': 'We provide farmers with practical advice, technological maps, economic calculations and solutions that help reduce costs and increase business efficiency.',
            'after-log-title': 'Storage and Logistics',
            'after-log-desc': 'We organize storage of products in certified warehouses in compliance with all quality standards. We ensure transportation of raw materials and finished products throughout Ukraine with a guarantee of timeliness and preservation.',
            // Services Page
            'services-title': 'Our Services',
            'services-plant-title': 'Crop Production',
            'services-plant-desc': 'We grow grain, industrial, and vegetable crops, adhering to modern agrotechnical standards. The implementation of precision farming elements plays an important role: soil analysis, fertilizer optimization, and efficient machinery management. Thanks to this, we achieve high yields, reduce costs, and care for the environment.',
            'services-log-title': 'Storage and Logistics of Agricultural Products',
            'services-log-desc': 'We provide a full cycle of storage and transportation of agricultural products. Our warehouses are equipped with modern ventilation and temperature control systems, which allows us to maintain product quality for a long time. We organize the transportation of grain, vegetables, and other products to processing enterprises, elevators, and retail outlets, adhering to all logistics standards.',
            'services-consult-title': 'Agrotechnological Consulting',
            'services-consult-desc': 'We provide professional consulting services to agricultural producers to improve farm efficiency. Our experts help implement innovative solutions, optimize production processes, select fertilizers, crop protection products, and equipment. We also provide staff training, develop individual farm development plans, and support projects at all stages.',
            'after-btn': 'LEARN MORE',
            // About page
            'about-title': 'About the Company',
            'about-company-1': "Cropia is an organization that brings together experience, knowledge, and modern technologies for the effective development of the agricultural sector. We are focused on providing high-quality products and services that meet the highest standards.",
            'about-company-2': "Since our founding, our goal has been stable and sustainable development, combining traditional methods of agricultural production with advanced innovations. Our company specializes in the production of agricultural products, storage and logistics, and also provides consulting services for farmers.",
            'about-company-3': "We provide our clients not only with products, but also with valuable tools for running a sustainable agribusiness. All our projects are aimed at increasing the efficiency and profitability of agribusinesses, helping farmers and businesses achieve high results.",
            'about-founder-title': 'Founder',
            'about-founder-intro': "My name is Arсhip — I am the founder of this company and a person for whom the agricultural sector is not just a job, but a calling. Born and raised in a rural area, from an early age I saw how hard work on the land bears fruit. Over the years, this turned into a desire to create my own business, which combines respect for nature with the possibilities of modern technologies.",
            'about-founder-1': "I founded the company with one goal — to make the agricultural sector more efficient, transparent, and closer to people. My vision is to create an environment where every hectare of land works to its maximum, and every employee knows that they are an important part of a great cause.",
            'about-founder-2': "My education in agricultural technologies, management experience, continuous learning, and participation in international projects helped me form a team of like-minded people who are now working on the development of the company. We are not afraid of challenges — on the contrary, we see opportunities for growth in them.",
            'about-team-title': 'Our Team',
            'about-team-1': "The true strength of our company is the team. We are not just employees, we are a community united by a common goal: to effectively develop Ukraine's agricultural sector by combining experience, innovation, and daily dedication.",
            'about-team-2': "In our work, we rely on mutual understanding, trust, and responsibility. Every employee, regardless of position, contributes to the overall result — and we value this. There are no 'secondary' tasks here: every process, from soil preparation to delivery of finished products to the client, is part of a single system that works smoothly and efficiently.",
            'about-team-3': "We create an environment that supports development and continuous improvement. Young specialists receive mentoring from experienced colleagues, and experienced ones — new ideas and the energy of youth. This partnership of generations shapes our flexibility, professionalism, and openness to change."

        },
        es: {
            // Página de Servicios
            'services-title': 'Nuestros Servicios',
            'services-plant-title': 'Producción de cultivos',
            'services-plant-desc': 'Cultivamos cereales, cultivos industriales y hortalizas, cumpliendo con los estándares agro-técnicos modernos. La implementación de la agricultura de precisión juega un papel importante: análisis de suelos, optimización de fertilizantes y gestión eficiente de la maquinaria. Gracias a esto, logramos altos rendimientos, reducimos costos y cuidamos el medio ambiente.',
            'services-log-title': 'Almacenamiento y logística de productos agrícolas',
            'services-log-desc': 'Ofrecemos un ciclo completo de almacenamiento y transporte de productos agrícolas. Nuestros almacenes están equipados con modernos sistemas de ventilación y control de temperatura, lo que permite mantener la calidad del producto durante mucho tiempo. Organizamos el transporte de cereales, hortalizas y otros productos a empresas de procesamiento, elevadores y puntos de venta, cumpliendo con todos los estándares logísticos.',
            'services-consult-title': 'Consultoría agrotecnológica',
            'services-consult-desc': 'Ofrecemos asesoramiento profesional a los productores agrícolas para mejorar la eficiencia de la gestión. Nuestros expertos ayudan a implementar soluciones innovadoras, optimizar procesos productivos, seleccionar fertilizantes, productos de protección de cultivos y equipos. También ofrecemos capacitación al personal, desarrollo de planes individuales de desarrollo agrícola y acompañamiento de proyectos en todas las etapas.',
            home: "Inicio",
            about: "Sobre la empresa",
            services: "Servicios",
            news: "Noticias",
            location_nav: "Ubicación",
            'footer-address-label': 'Dirección:',
            'footer-phone-label': 'Teléfono:',
            'footer-email-label': 'Correo:',
            'footer-question-title': 'Si tiene una pregunta',
            'footer-question-subtitle': 'deje sus datos de contacto y nos comunicaremos con usted',
            'footer-question-name-ph': "Ingrese su nombre",
            'footer-question-phone-ph': 'Ingrese su teléfono',
            'footer-question-submit': 'Enviar',
            'footer-telegram-label': 'Telegram:',
            'footer-hours-label': 'Horario:',
            'footer-hours-value': 'Lun-Vie de 8:00 a 19:00',
            'footer-phone-title': 'Por favor, introduzca el número de teléfono en el formato correcto (solo dígitos, se permiten "+", "-", paréntesis y espacios. Longitud mínima — 10 caracteres.)',
            'footer-name-title': 'Por favor, introduzca un nombre válido (solo letras, mínimo 2 caracteres.)',
            // Hero section
            'hero-title': 'Su socio confiable en soluciones agrícolas',
            'hero-desc': 'Ofrecemos soluciones innovadoras para el sector agrícola que le ayudan a tener éxito. Nuestro equipo de expertos siempre está listo para apoyarle en cada etapa.',
            'hero-more': 'Más detalles',
            'hero-contact': 'Contactar',
            // Main content
            'main-title': 'Nuestros productos y servicios para usted',
            'main-subtitle': 'Ofrecemos una amplia gama de productos agrícolas y servicios profesionales que satisfacen las necesidades de la agricultura moderna. Nuestro equipo de expertos siempre está listo para ayudarle a tener éxito.',
            'location_title': 'Nuestra ubicación',
            'location_map_title': 'Oficina en Google Maps',
            'card1-title': 'Los productos cumplen con los más altos estándares',
            'card1-desc': 'Nuestros productos se cultivan cumpliendo con todas las normas tecnológicas.',
            'card2-title': 'Servicios profesionales para agricultores',
            'card2-desc': 'Ofrecemos servicios de consultoría para optimizar su negocio.',
            'card3-title': 'Suministro de productos de calidad',
            'card3-desc': 'Suministramos semillas y fertilizantes de la más alta calidad.',
            // Noticias
            'news-header': 'Noticias',
            // News promo
            'news1-title': 'EXPORTACIÓN DE PRODUCTOS UCRANIANOS AL EXTRANJERO',
            'news1-date': '10 de mayo de 2025',
            'news1-desc': 'Los agricultores ucranianos desarrollan activamente la exportación, suministrando cereales, aceites y otros productos a los mercados mundiales. Gracias a la logística moderna y la alta calidad, el país fortalece su posición entre los principales exportadores de productos agrícolas...',
            'news1-link': 'Leer más',
            'news2-title': 'CARACTERÍSTICAS DEL USO DE FERTILIZANTES FOSFORADOS',
            'news2-date': '5 de mayo de 2025',
            'news2-desc': 'Los fertilizantes fosforados desempeñan un papel clave en la formación del sistema radicular y el aumento del rendimiento. Para obtener los mejores resultados, es importante considerar el tipo de suelo, los plazos y los métodos de aplicación. El uso óptimo del fósforo promueve el desarrollo de las plantas y garantiza cosechas estables incluso en condiciones climáticas difíciles...',
            'news2-link': 'Leer más',
            'news3-title': 'BENEFICIOS ADICIONALES PARA AGRICULTORES DURANTE LA GUERRA',
            'news3-date': '28 de abril de 2025',
            'news3-desc': 'Durante la ley marcial, el estado introdujo beneficios adicionales para los agricultores: alivio fiscal, préstamos simplificados y apoyo logístico. Esto permite a los productores agrícolas mantener la estabilidad, desarrollar sus explotaciones y abastecer de alimentos al país incluso en condiciones difíciles....',
            'news3-link': 'Leer más',
            'news4-title': 'PRONÓSTICOS DE COSECHA 2025',
            'news4-date': '20 de abril de 2025',
            'news4-desc': 'Los agricultores esperan una buena cosecha en 2025 gracias al clima favorable, las tecnologías modernas y las semillas de calidad. Los expertos prevén un aumento en la producción de trigo, maíz y otros cultivos principales. Esto crea perspectivas positivas para el sector agrícola del país....',
            'news4-link': 'Leer más',
            'news5-title': 'Tecnologías innovadoras en los campos de Ucrania',
            'news5-date': '12 de abril de 2025',
            'news5-desc': 'Los agricultores ucranianos implementan cada vez más tecnologías modernas en la agricultura. El uso de drones, navegación GPS y sistemas de riego automatizados aumenta significativamente la eficiencia de la producción y reduce el impacto ambiental...',
            'news5-link': 'Leer más',
            'news6-title': 'Cosecha récord de trigo en el sur de Ucrania',
            'news6-date': '2 de abril de 2025',
            'news6-desc': 'Los agricultores de la región de Jersón cosecharon una cantidad récord de trigo en los últimos 10 años. Gracias a las condiciones climáticas favorables y al uso eficaz de fertilizantes, el rendimiento medio superó las 6 t/ha. Esto crea perspectivas positivas para la agricultura del país y garantiza la estabilidad de la producción...',
            'news6-link': 'Leer más',
            'news-promo-title': '¡Manténgase informado!',
            'news-promo-desc': 'Lea las últimas noticias y análisis del sector agropecuario: ¡sea el primero en enterarse de lo importante!',
            'news-promo-btn': 'Más noticias',
            'news1-link': 'Leer más',
            'news2-link': 'Leer más',
            'news3-link': 'Leer más',
            'news4-link': 'Leer más',
            'news5-link': 'Leer más',
            'news6-link': 'Leer más',
            // After video block
            'after-title': 'CROPIA — SOLUCIONES MODERNAS PARA EL SECTOR AGRÍCOLA',
            'after-desc': 'Somos un equipo de especialistas experimentados que trabaja para el desarrollo de la agricultura en Ucrania. Combinamos la tradición agrícola con tecnologías avanzadas para crear soluciones eficaces, fiables y duraderas para el negocio agrícola.',
            'after-prod-title': 'Producción agrícola',
            'after-prod-desc': 'Cultivamos cereales y cultivos industriales basándonos en tecnologías modernas, análisis agroquímicos de suelos y agricultura de precisión. El objetivo principal es el máximo rendimiento manteniendo el equilibrio natural.',
            'after-consult-title': 'Consultoría para agricultores',
            'after-consult-desc': 'Ofrecemos a los agricultores asesoramiento práctico, mapas tecnológicos, cálculos económicos y soluciones que ayudan a reducir costes y aumentar la eficiencia empresarial.',
            'after-log-title': 'Almacenamiento y logística',
            'after-log-desc': 'Organizamos el almacenamiento de productos en almacenes certificados cumpliendo todas las normas de calidad. Garantizamos el transporte de materias primas y productos terminados por toda Ucrania con garantía de puntualidad y conservación.',
            'after-btn': 'MÁS DETALLES',
            // About page
            'about-title': 'Sobre la empresa',
            'about-company-1': "Cropia es una organización que reúne experiencia, conocimientos y tecnologías modernas para el desarrollo eficaz del sector agrícola. Nos enfocamos en proporcionar productos y servicios de alta calidad que cumplen con los más altos estándares.",
            'about-company-2': "Desde nuestra fundación, nuestro objetivo ha sido un desarrollo estable y sostenible, combinando métodos tradicionales de producción agrícola con innovaciones avanzadas. Nuestra empresa se especializa en la producción de productos agrícolas, almacenamiento y logística, y también ofrece servicios de consultoría para agricultores.",
            'about-company-3': "Ofrecemos a nuestros clientes no solo productos, sino también valiosas herramientas para gestionar un negocio agrícola sostenible. Todos nuestros proyectos están dirigidos a aumentar la eficiencia y rentabilidad de las empresas agropecuarias, ayudando a agricultores y empresas a lograr grandes resultados.",
            'about-founder-title': 'Fundador',
            'about-founder-intro': "Mi nombre es Arсhip — soy el fundador de esta empresa y una persona para quien el sector agrícola no es solo un trabajo, sino una vocación. Nacido y criado en una zona rural, desde pequeño vi cómo el trabajo duro en la tierra da frutos. Con los años, esto se convirtió en el deseo de crear mi propia empresa, que combina el respeto por la naturaleza con las posibilidades de las tecnologías modernas.",
            'about-founder-1': "Fundé la empresa con un solo objetivo: hacer que el sector agrícola sea más eficiente, transparente y cercano a las personas. Mi visión es crear un entorno donde cada hectárea de tierra trabaje al máximo y cada empleado sepa que es una parte importante de una gran causa.",
            'about-founder-2': "Mi formación en tecnologías agrícolas, experiencia en gestión, aprendizaje continuo y participación en proyectos internacionales me ayudaron a formar un equipo de personas afines que hoy trabajan en el desarrollo de la empresa. No tememos a los desafíos; al contrario, vemos en ellos oportunidades para crecer.",
            'about-team-title': 'Nuestro equipo',
            'about-team-1': "La verdadera fuerza de nuestra empresa es el equipo. No somos solo empleados, somos una comunidad unida por un objetivo común: desarrollar eficazmente el sector agrícola de Ucrania combinando experiencia, innovación y dedicación diaria.",
            'about-team-2': "En nuestro trabajo confiamos en la comprensión mutua, la confianza y la responsabilidad. Cada empleado, independientemente de su puesto, contribuye al resultado general, y lo valoramos. Aquí no hay tareas 'secundarias': cada proceso, desde la preparación del suelo hasta la entrega del producto terminado al cliente, es parte de un sistema único que funciona de manera eficiente y coordinada.",
            'about-team-3': "Creamos un entorno que apoya el desarrollo y la mejora continua. Los jóvenes especialistas reciben tutoría de colegas experimentados, y los experimentados — nuevas ideas y la energía de la juventud. Esta asociación de generaciones da forma a nuestra flexibilidad, profesionalismo y apertura al cambio."

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
        // Переклад placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        // Переклад title
        document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    updateMapLanguage(lang);
}

function updateMapLanguage(lang) {
    const iframe = document.getElementById('map-iframe');
    if (!iframe) return;
    let hl = 'uk';
    if (lang === 'en') hl = 'en';
    if (lang === 'es') hl = 'es';
    iframe.src = `https://www.google.com/maps?q=50.450302,30.523770&z=16&output=embed&hl=${hl}`;
}

    langRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Remove animation from all
            langLabels.forEach(label => label.classList.remove('lang-animate'));
            // Add animation to selected
            const selectedLabel = document.querySelector('.lang-toggle-label[for="' + this.id + '"]');
            if (selectedLabel) selectedLabel.classList.add('lang-animate');
            localStorage.setItem('siteLang', this.value);
            translatePage(this.value);
        });
    });

    // Set radio buttons to match currentLang
    langRadios.forEach(radio => {
        radio.checked = (radio.value === currentLang);
    });

    // Set language on page load
    translatePage(currentLang);

});
