let userLang = navigator.language || navigator.userLanguage;
userLang = userLang.substr(0, 2).toLowerCase();
document.documentElement.lang = userLang;

const uk_len = document.getElementById('uk');
const ru_len = document.getElementById('ru');
const de_len = document.getElementById('de');
let prevHtml;
let bg_active_page;
let button_back_to;

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

const change_menu = document.querySelector('.burger__menu');
const header__menu = document.querySelector('.header__menu');

// console.log(change_menu);
change_menu.addEventListener('click', () => {
  change_menu.classList.toggle('change_menu');
  header__menu.classList.toggle('header__menu-show');
});

const black_effect = document.querySelector('.black_effect');

let mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  direction: 'vertical',
  slideToClickedSlide: false,
  effect: 'fade',
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
      // black_effect.classList.add('black_effect_visible');
      // setTimeout(() => {
      //   black_effect.classList.remove('black_effect_visible');
      // }, 700);
    },
  },
});

//****   MENU *** */
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
        change_menu.classList.toggle('change_menu');
        header__menu.classList.toggle('header__menu-show');
        e.preventDefault();
      });
    }
  }
}

function menuSliderRemove() {
  let menuLinkActive = document.querySelector('.menu__link._active');
  if (menuLinkActive) {
    menuLinkActive.classList.remove('_active');
  }
}
/**  **** IMG ******  */
let content__imgs = document.querySelectorAll('.content__img');

if (content__imgs) {
  for (let i = 0; i < content__imgs.length; i++) {
    const content__img = content__imgs[i];
    content__img.addEventListener('click', (e) => {
      loadListVideo(e.target.id);
    });
  }
}

let content__texts = document.querySelectorAll('.content__text');

if (content__texts) {
  for (let y = 0; y < content__texts.length; y++) {
    const content__text = content__texts[y];
    content__text.addEventListener('click', (el) => {
      console.log('target =', el.target.id.slice(5));
      loadListVideo(el.target.id.slice(5));
    });
  }
}

function loadListVideo(name) {
  prevHtml = document.querySelector(`#page_n3_${name}`);
  prevHtml.style.zIndex = '1';
  button_back_to = document.querySelector(`#back_to_${name}`);
  if (button_back_to) {
    button_back_to.addEventListener('click', (e) => {
      prevHtml.style.zIndex = '60';
    });
  }
}

/* init Swiper */
mySwiper.init();
