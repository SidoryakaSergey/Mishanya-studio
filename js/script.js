let userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substr(0, 2).toLowerCase();
document.documentElement.lang = userLang;

const uk_len = document.getElementById('uk');
const ru_len = document.getElementById('ru');
const de_len = document.getElementById('de');

uk_len.addEventListener('click', (e) => {
  document.documentElement.lang = 'uk';
});
ru_len.addEventListener('click', (e) => {
  document.documentElement.lang = 'ru';
});
de_len.addEventListener('click', (e) => {
  document.documentElement.lang = 'de';
});

console.log(userLang);

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  direction: 'vertical',
  slideToClickedSlide: false,
  // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  effect: 'fade',
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: {
    sesitivity: 1,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  watchOverflow: true,
  speed: 800,
  init: false,
  on: {
    init: function () {
      menuSlider();
    },
    slideChange: function () {
      menuSliderRemove();
      menuLinks[mySwiper.realIndex].classList.add('_active');
    },
  },
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
  if (menuLinks.length > 0) {
    menuLinks[mySwiper.realIndex].classList.add('_active');
    for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener('click', (e) => {
        menuSliderRemove();
        mySwiper.slideTo(index, 800);
        menuLink.classList.add('_active');
        e.preventDefault();
      });
    }
  }
}

let content__imgs = document.querySelectorAll('.content__img');

if (content__imgs) {
  for (let i = 0; i < content__imgs.length; i++) {
    const content__img = content__imgs[i];
    content__img.addEventListener('click', (e) => {
      switch (e.target.id) {
        case 'wedding':
          console.log('wedding');
          break;
        case 'family':
          console.log('family');
          break;
      }
    });
  }
}

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.menu__link._active');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_active');
  }
}

mySwiper.init();
