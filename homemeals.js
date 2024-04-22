const textElement = document.getElementById("text");
const textToType = textElement.innerText;
const wordsToType = [
  "Family",
  "Meal planning",
  "Goals",
  "Special Days",
  "Trips",
  "Work Meals"
];

const maxWordLength = Math.max(...wordsToType.map((word) => word.length));

let currentWordIndex = 0;
let currentWord = wordsToType[currentWordIndex];

let index = 0;
function typeText() {
  textElement.innerText = currentWord.slice(0, index++);

  if (index <= currentWord.length) {
    setTimeout(typeText, 150);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  textElement.innerText = currentWord.slice(0, index);

  if (index > 0) {
    index--;
    setTimeout(eraseText, 150);
  } else {
    currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
    currentWord = wordsToType[currentWordIndex];
    setTimeout(typeText, maxWordLength * 50);
  }
}

typeText();


/////////////////////////////////// Slider combinaciones ////////////////////////////////////

/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      swiper.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      swiper.slidePrev();
    }
  });
}

function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName('quote');
  for (const el of quoteEls) {
    el.style.width = el.offsetWidth;
    el.style.height = el.offsetHeight;
  }
  textFit(quoteEls, { maxFontSize: 14 });
}
resizeTextToFit();
addEventListener("resize", (event) => {
  resizeTextToFit();
});