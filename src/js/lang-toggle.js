// Логіка перемикача мов для Cropia
const langRadios = document.querySelectorAll('input[name="lang"]');
langRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        // Тут можна додати зміну мови сайту
        // this.value — вибрана мова
    });
});
