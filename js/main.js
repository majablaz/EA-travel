// load animation
var body = document.getElementById('loading');
var preloader = document.getElementById('loader');

window.onload = () => {
  setTimeout(function(){
    console.log("page is fully loaded");
    body.classList.add('loaded' );
    preloader.classList.add('loaded' );
  }, 2000);
  
  
};

// home slider //
const swiper = new Swiper('#home-slider', {
  loop: true,
  autoplay: true,
    effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// offers slider // 

const offers = new Swiper('#offers-slider', {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// mobile navigation//

var hamburger = document.getElementById('menu-btn');
var menu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', function() {
  this.classList.toggle("close");
  menu.classList.toggle("menu-visible");
});
