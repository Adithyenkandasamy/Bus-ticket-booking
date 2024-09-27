// You can add functionality to enhance user interaction here
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded");
});
let currentSlide = 0;

function showSlide(index) {
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = currentSlide * -100 / totalSlides;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

