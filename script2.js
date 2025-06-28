// GV Lop 10
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const carouselSlide = document.getElementById('carouselSlide');
  const memberCards = document.querySelectorAll('.member-card');

  let currentIndex = 0;
  const totalCards = 12;
  const cardsPerView = 5;

  function updateCarousel() {
    const offset = (currentIndex * -97.7) / cardsPerView;
    carouselSlide.style.transform = `translateX(${offset}%)`;

    memberCards.forEach((card, index) => {
      card.classList.remove('highlight');
      if (index >= currentIndex && index < currentIndex + cardsPerView) {
        if (index === currentIndex + Math.floor(cardsPerView / 2 - 1)) {
          card.classList.add('highlight');
        }
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : totalCards - cardsPerView;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex =
      currentIndex < totalCards - cardsPerView ? currentIndex + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});

// Thanh thong bao
document.addEventListener('DOMContentLoaded', function () {
  let index = 0;
  const items = document.querySelectorAll('.carousel-item');
  const itemCount = items.length;
  const interval = 5000; // 5 seconds

  function showNextItem() {
    items[index].classList.remove('active');
    index = (index + 1) % itemCount;
    items[index].classList.add('active');
  }

  setInterval(showNextItem, interval);
});

//GV Lop 11
document.addEventListener('DOMContentLoaded', () => {
  const prevButton1 = document.getElementById('prevButton1');
  const nextButton1 = document.getElementById('nextButton1');
  const carouselSlide1 = document.getElementById('carouselSlide1');
  const memberCards1 = document.querySelectorAll('.member-card1teacher');

  let currentIndex1 = 0;
  const totalCards1 = 12;
  const cardsPerView1 = 5;

  function updateCarousel() {
    const offset = (currentIndex1 * -97.7) / cardsPerView1;
    carouselSlide1.style.transform = `translateX(${offset}%)`;

    memberCards1.forEach((card, index) => {
      card.classList.remove('highlight1');
      if (index >= currentIndex1 && index < currentIndex1 + cardsPerView1) {
        if (index === currentIndex1 + Math.floor(cardsPerView1 / 2 - 1)) {
          card.classList.add('highlight1');
        }
      }
    });
  }

  prevButton1.addEventListener('click', () => {
    currentIndex1 =
      currentIndex1 > 0 ? currentIndex1 - 1 : totalCards1 - cardsPerView1;
    updateCarousel();
  });

  nextButton1.addEventListener('click', () => {
    currentIndex1 =
      currentIndex1 < totalCards1 - cardsPerView1 ? currentIndex1 + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});

// GV Lop 12
document.addEventListener('DOMContentLoaded', () => {
  const prevButton2 = document.getElementById('prevButton2');
  const nextButton2 = document.getElementById('nextButton2');
  const carouselSlide2 = document.getElementById('carouselSlide2');
  const memberCards2 = document.querySelectorAll('.member-card2teacher');

  let currentIndex2 = 0;
  const totalCards2 = 12;
  const cardsPerView2 = 5;

  function updateCarousel() {
    const offset = (currentIndex2 * -97.7) / cardsPerView2;
    carouselSlide2.style.transform = `translateX(${offset}%)`;

    memberCards2.forEach((card, index) => {
      card.classList.remove('highlight2');
      if (index >= currentIndex2 && index < currentIndex2 + cardsPerView2) {
        if (index === currentIndex2 + Math.floor(cardsPerView2 / 2 - 1)) {
          card.classList.add('highlight2');
        }
      }
    });
  }

  prevButton2.addEventListener('click', () => {
    currentIndex2 =
      currentIndex2 > 0 ? currentIndex2 - 1 : totalCards2 - cardsPerView2;
    updateCarousel();
  });

  nextButton2.addEventListener('click', () => {
    currentIndex2 =
      currentIndex2 < totalCards2 - cardsPerView2 ? currentIndex2 + 1 : 0;
    updateCarousel();
  });

  updateCarousel();
});
