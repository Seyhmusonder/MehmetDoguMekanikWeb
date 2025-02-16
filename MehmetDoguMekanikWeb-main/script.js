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


 

let currentIndex = 0;
        function showSlide(index) {
            const slider = document.getElementById('customSlider');
            const totalSlides = document.querySelectorAll('.custom-slide').length;
            if (index >= totalSlides) currentIndex = 0;
            else if (index < 0) currentIndex = totalSlides - 1;
            else currentIndex = index;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        function nextSlide() {
            showSlide(currentIndex + 1);
        }
        function prevSlide() {
            showSlide(currentIndex - 1);
        }


        // Dropdown menülerin animasyonlu açılması için
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown-menu');
        dropdown.style.display = 'block';
        setTimeout(() => {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateX(-50%) translateY(0)';
        }, 10);
    });

    item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown-menu');
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateX(-50%) translateY(10px)';
        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 300);
    });
});

function toggleMenu() {
    const menuWindow = document.getElementById("menuWindow");
    menuWindow.classList.toggle("show");
  }

  



  document.getElementById("urunlerMenu").addEventListener("click", function(event) {
    event.preventDefault(); // Bağlantı davranışını engelle (sayfa yenilenmesini önler)
    const urunlerAltMenu = document.getElementById("urunlerAltMenu");
    urunlerAltMenu.classList.toggle("show"); // "show" sınıfını ekle/kaldır
  });

  




  document.getElementById("iletisimMenu").addEventListener("click", function(event) {
    event.preventDefault(); // Bağlantı davranışını engelle (sayfa yenilenmesini önler)
    const iletisimAltMenu = document.getElementById("iletisimAltMenu");
    iletisimAltMenu.classList.toggle("show"); // "show" sınıfını ekle/kaldır
  });

  


  document.getElementById("hizmetlerMenu").addEventListener("click", function(event) {
    event.preventDefault(); // Bağlantı davranışını engelle (sayfa yenilenmesini önler)
    const hizmetlerAltMenu = document.getElementById("hizmetlerAltMenu");
    hizmetlerAltMenu.classList.toggle("show"); // "show" sınıfını ekle/kaldır
  });


  // "Kurumsal" menüsüne tıklama olayını dinle
document.getElementById("kurumsalMenu").addEventListener("click", function(event) {
    event.preventDefault(); // Bağlantı davranışını engelle (sayfa yenilenmesini önler)
    const kurumsalAltMenu = document.getElementById("kurumsalAltMenu");
    kurumsalAltMenu.classList.toggle("show"); // "show" sınıfını ekle/kaldır
  });


  