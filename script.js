let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const totalSlides = slides.length;

function moveCarousel() {
    currentSlide = (currentSlide + 1) % totalSlides;
    const moveAmount = currentSlide * slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${moveAmount}px)`;
}

setInterval(moveCarousel, 3000); // Move carousel every 3 seconds
