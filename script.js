document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DEL CARRUSEL ---
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    let carouselInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        slides[slideIndex].classList.add('active');
    }

    // Funciones para botones manuales
    window.moveSlide = function(n) {
        clearInterval(carouselInterval); // Pausa el automático si el usuario hace clic
        slideIndex += n;
        showSlide(slideIndex);
        startCarousel(); // Reinicia el automático
    };

    function startCarousel() {
        carouselInterval = setInterval(() => {
            slideIndex++;
            showSlide(slideIndex);
        }, 6000); // Cambia de imagen cada 6 segundos
    }
    
    startCarousel(); // Inicia el carrusel al cargar la página

    // --- LÓGICA DE ANIMACIONES DE SCROLL ---
    const elementosAnimables = document.querySelectorAll('.anim-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Deja de observar una vez que aparece
            }
        });
    }, observerOptions);

    elementosAnimables.forEach(el => observer.observe(el));
});