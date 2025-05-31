document.addEventListener('DOMContentLoaded', function() {
    // Функція перевірки, чи елемент в області видимості
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }

    // Отримуємо елементи слайдера
    const testimonialsBlock = document.querySelector('.testimonials');
    const sliderWrapper = document.querySelector('.testimonials__slider-wrapper');
    const testimonialItems = document.querySelectorAll('.testimonials__item');
    const prevButton = document.querySelector('.testimonials__arrow--prev');
    const nextButton = document.querySelector('.testimonials__arrow--next');
    
    // Якщо елементи не знайдені, виходимо з функції
    if (!testimonialsBlock || !sliderWrapper || !testimonialItems.length) return;
    
    // Змінні для слайдера
    let currentSlide = 0;
    let slideWidth = 0;
    let slidesToShow = 3; // За замовчуванням показуємо 3 слайди
    let maxSlide = Math.max(0, testimonialItems.length - slidesToShow);
    
    // Функція для оновлення кількості слайдів, які показуються залежно від ширини екрану
    function updateSlidesToShow() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 768) {
            slidesToShow = 1;
        } else if (windowWidth < 1200) {
            slidesToShow = 2;
        } else {
            slidesToShow = 3;
        }
        
        maxSlide = Math.max(0, testimonialItems.length - slidesToShow);
        
        // Якщо поточний слайд більше максимального, встановлюємо його на максимальний
        if (currentSlide > maxSlide) {
            currentSlide = maxSlide;
            updateSliderPosition();
        }
        
        // Оновлюємо ширину слайду
        updateSlideWidth();
    }
    
    // Функція для оновлення ширини слайду
    function updateSlideWidth() {
        const containerWidth = sliderWrapper.parentElement.clientWidth;
        const gapWidth = 30; // Відступ між слайдами (як у CSS)
        
        slideWidth = (containerWidth - (gapWidth * (slidesToShow - 1))) / slidesToShow;
        
        // Встановлюємо ширину для кожного слайду
        testimonialItems.forEach(item => {
            item.style.flex = `0 0 ${slideWidth}px`;
            item.style.minWidth = `${slideWidth}px`;
        });
        
        // Оновлюємо позицію слайдера
        updateSliderPosition();
    }
    
    // Функція для оновлення позиції слайдера і стану кнопок
    function updateSliderPosition() {
        const gapWidth = 30; // Відступ між слайдами (як у CSS)
        const offset = currentSlide * (slideWidth + gapWidth);
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
        
        // Оновлюємо видимість кнопок навігації
        updateArrowsVisibility();
    }
    
    // Функція для оновлення видимості кнопок навігації
    function updateArrowsVisibility() {
        // Приховуємо ліву стрілку на першому слайді
        if (currentSlide === 0) {
            prevButton.style.opacity = '0';
            prevButton.style.pointerEvents = 'none';
        } else {
            prevButton.style.opacity = '1';
            prevButton.style.pointerEvents = 'auto';
        }
        
        // Приховуємо праву стрілку на останньому слайді
        if (currentSlide >= maxSlide) {
            nextButton.style.opacity = '0';
            nextButton.style.pointerEvents = 'none';
        } else {
            nextButton.style.opacity = '1';
            nextButton.style.pointerEvents = 'auto';
        }
    }
    
    // Функція для переходу до наступного слайду
    function nextSlide() {
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateSliderPosition();
        }
    }
    
    // Функція для переходу до попереднього слайду
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSliderPosition();
        }
    }
    
    // Функція, яка викликається при скролі для анімації появи блоку
    function handleScroll() {
        // Перевіряємо, чи блок з відгуками в області видимості
        if (isElementInViewport(testimonialsBlock) && !testimonialsBlock.classList.contains('animated')) {
            // Додаємо клас для анімації всього блоку
            testimonialsBlock.classList.add('animated');
            
            // Додаємо клас для анімації кожного відгуку з затримкою
            testimonialItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('item-animated');
                }, index * 300); // Затримка для кожного наступного елемента (синхронізовано з CSS)
            });
        }
    }
    
    // Додаємо обробники подій для кнопок
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    
    // Додаємо обробник події для зміни розміру вікна
    window.addEventListener('resize', () => {
        updateSlidesToShow();
    });
    
    // Викликаємо функції при завантаженні сторінки
    updateSlidesToShow();
    updateArrowsVisibility(); // Ініціалізуємо видимість стрілок при завантаженні
    handleScroll();
    
    // Викликаємо функцію при скролі
    window.addEventListener('scroll', handleScroll);
});
