document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });








document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.tool-carousel-wrapper');
  const slides = document.querySelectorAll('.tool-slide');
  const prevBtn = document.querySelector('.tool-carousel-prev');
  const nextBtn = document.querySelector('.tool-carousel-next');
  const dotsContainer = document.querySelector('.carousel-dots');

  const slideWidth = slides[0].offsetWidth + 20;
  let totalSlides = slides.length;
  let visibleSlides = Math.floor(document.querySelector('.tool-carousel-container').offsetWidth / slideWidth);
  let totalDots = totalSlides - visibleSlides + 1;
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.carousel-dot');

  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  function updateCarousel() {
    wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalDots;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalDots) % totalDots;
    updateCarousel();
  });

  // Autoplay
  let autoScroll = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalDots;
    updateCarousel();
  }, 3000);

  wrapper.addEventListener('mouseenter', () => clearInterval(autoScroll));
  wrapper.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalDots;
      updateCarousel();
    }, 3000);
  });

  // Recalculate on resize
  window.addEventListener('resize', () => {
    visibleSlides = Math.floor(document.querySelector('.tool-carousel-container').offsetWidth / slideWidth);
    totalDots = totalSlides - visibleSlides + 1;
    currentIndex = 0;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
    updateCarousel();
  });
});

























    const typingElement = document.getElementById('typing');
    const words = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let currentLetters = '';
    let isDeleting = false;
    function type() {
        if (isDeleting) {
            currentLetters = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            currentLetters = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        typingElement.innerHTML = currentLetters;

        let typeSpeed = 200;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex === words.length) {
                wordIndex = 0;
            }
            currentWord = words[wordIndex];
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    currentWord = words[wordIndex];
    type();
});
