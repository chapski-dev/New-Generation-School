// Import jQuery module (npm i jquery)
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';

import Swiper from 'swiper';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

$('.header__nav-toggle').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.header__nav-links').toggleClass('_mobile-nav-open')
})


document.addEventListener('DOMContentLoaded', () => {

})
