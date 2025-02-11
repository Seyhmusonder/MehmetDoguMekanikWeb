class Slider {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.slides = document.querySelectorAll('.slide');
        this.progressBar = document.querySelector('.progress-bar');
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.slideInterval = 3000; // 3 saniye
        
        this.init();
    }

    init() {
        this.showSlide(0);
        this.startAutoSlide();

        window.addEventListener('resize', () => {
            this.showSlide(this.currentSlide);
        });
    }

    showSlide(index) {
        this.slider.style.transform = `translateX(-${index * 100}%)`;
        this.currentSlide = index;

        this.progressBar.style.width = '0';
        setTimeout(() => {
            this.progressBar.style.width = '100%';
        }, 50);
    }

    nextSlide() {
        let nextIndex = (this.currentSlide + 1) % this.slideCount;
        this.showSlide(nextIndex);
    }

    startAutoSlide() {
        setInterval(() => {
            this.nextSlide();
        }, this.slideInterval);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Slider();
});


 

