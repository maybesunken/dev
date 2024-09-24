// Header scrolling effect
$(window).on('scroll', function() {
        if ($(window).scrollTop()) {
                $('header').addClass('nav-show');
        } else {
                $('header').removeClass('nav-show');
        }
});

// Hamburger menu functionality
const navSlide = () => {
        const hamburger = document.querySelector(".hamburger");
        const navbar = document.querySelector(".nav-bar");
        const navLinks = document.querySelectorAll(".nav-bar li");

        hamburger.onclick = () => {
                navbar.classList.toggle("nav-active");

                // Animation links
                navLinks.forEach((link, index) => {
                        if (link.style.animation) {
                                link.style.animation = "";
                        } else {
                                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
                        }
                });

                // Hamburger animation
                hamburger.classList.toggle("toggle");
        };
};

window.onload = () => navSlide();

// Toggle project details
function toggleDetails(card) {
        const content = card.querySelector('.work-content');
        content.classList.toggle('show-details');
}

// Add click event listener to all project cards
document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => toggleDetails(card));
});
document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
                card.addEventListener('click', () => {
                        const trimesters = card.querySelector('.trimesters');

                        // Verifica se o elemento .trimesters está visível
                        if (trimesters.classList.contains('show-details')) {
                                trimesters.classList.remove('show-details');
                        } else {
                                // Oculta outros trimestres
                                document.querySelectorAll('.trimesters').forEach(trimester => {
                                        trimester.classList.remove('show-details');
                                });

                                // Mostra o trimestre clicado
                                trimesters.classList.add('show-details');
                        }
                });
        });
});