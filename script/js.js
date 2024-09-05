document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const headerNav = document.querySelector('.header__nav');

    navbarToggler.addEventListener('click', function() {
        headerNav.classList.toggle('open');
    });

    // Optional: Close sidebar when a link is clicked in mobile mode
    headerNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (headerNav.classList.contains('open')) {
                headerNav.classList.remove('open');
            }
        });
    });
});
