// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Navigation toggle
    const searchInput = document.querySelector('#nav input');
    const centerNav = document.querySelector('#center-nav');

    searchInput.addEventListener('focus', function () {
        centerNav.style.opacity = '0';
    });

    searchInput.addEventListener('blur', function () {
        centerNav.style.opacity = '1';
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('#center-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
