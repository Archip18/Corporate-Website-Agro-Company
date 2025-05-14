// Функція для анімації елементів при скролі
document.addEventListener('DOMContentLoaded', function() {
    // Функція перевірки, чи елемент в області видимості
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
        );
    }

    // Отримуємо блок відгуків
    const testimonialsBlock = document.querySelector('.testimonials');
    const testimonialItems = document.querySelectorAll('.testimonials__item');
    
    // Функція, яка викликається при скролі
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
    
    // Викликаємо функцію при скролі
    window.addEventListener('scroll', handleScroll);
    
    // Викликаємо функцію при завантаженні сторінки
    handleScroll();
});
