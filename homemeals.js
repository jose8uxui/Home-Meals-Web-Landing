


/////////////////////////////////// Slider combinaciones ////////////////////////////////////

var TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: '1',
      spaceBetween: 10,
      coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 200,
        modifier: 1,
      },
      breakpoints: {

        950: {
          slidesPerView: '2.5',
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: '2.41',
          spaceBetween: 5,
        },
        375: {
          slidesPerView: '1',
          modifier: 1,
          spaceBetween: 10,
          depth: 220,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
});

      var TrandingSlider = new Swiper('.tranding-slider2', {

            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: '1',
            spaceBetween: 10,
            coverflowEffect: {
              rotate: 0,
              stretch: 1,
              depth: 200,
              modifier: 1,
            },
            breakpoints: {

              950: {
                slidesPerView: '2.5',
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: '2.41',
                spaceBetween: 5,
              },
              375: {
                slidesPerView: '1',
                modifier: 1,
                spaceBetween: 10,
                depth: 220,
              },
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }

      });

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