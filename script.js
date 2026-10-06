document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Abrir/Cerrar menú al presionar la hamburguesa
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Cerrar menú automáticamente al presionar cualquier enlace (Inicio, Cursos, etc.)
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });


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

    window.moveSlide = function(n) {
        clearInterval(carouselInterval);
        slideIndex += n;
        showSlide(slideIndex);
        startCarousel();
    };

    function startCarousel() {
        carouselInterval = setInterval(() => {
            slideIndex++;
            showSlide(slideIndex);
        }, 6000); 
    }
    
    if(slides.length > 0) {
        startCarousel(); 
    }

    // --- LÓGICA DE ANIMACIONES DE SCROLL ---
    const elementosAnimables = document.querySelectorAll('.anim-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    elementosAnimables.forEach(el => observer.observe(el));
});