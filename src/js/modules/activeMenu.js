
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.header__menu-link');
  const currentPath = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const linkPath = link.getAttribute('href').replace('./', '');
    if (
      linkPath === currentPath ||
      (linkPath === 'index.html' && (currentPath === '' || currentPath === 'index.html'))
    ) {
      link.classList.add('active-menu');
      link.classList.add('current-menu-item');
    }
  });
});
