var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  direction: 'vertical',
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
});

const uk_len = document.getElementById('uk');
const ru_len = document.getElementById('ru');
const de_len = document.getElementById('de');
// console.log(change_len);

uk_len.addEventListener('click', (e) => {
  document.documentElement.lang = 'uk';
});
ru_len.addEventListener('click', (e) => {
  document.documentElement.lang = 'ru';
});
de_len.addEventListener('click', (e) => {
  document.documentElement.lang = 'de';
});
