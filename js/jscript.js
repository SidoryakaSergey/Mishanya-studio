console.log('Work');

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // код для мобильных устройств
  const viber = document.querySelector('#viber');
  console.log('Mobila');
  viber.href = 'viber://add?number=380503283636';
} else {
  // код для обычных устройств
  console.log('PC');
}

let pageSlider = new Swiper('.page', {
  wrapperClass: 'page__wrapper',
  slideClass: 'page__screen',

  direction: 'vertical',
  slidesPerView: 'auto',

  parallax: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sesitivity: 1,
  },
  watchOverflow: true,
  speed: 800,
  observer: true,
  observeParents: true,
  observeSlideChuldren: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});