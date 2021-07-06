// Import jQuery module (npm i jquery)
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const jQuery = $;

import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
require('@fancyapps/fancybox/dist/jquery.fancybox.min');

import Swiper from 'swiper';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

const DESKTOP_FROM = 1024;

// section2 tabs sliders
const slidersParents = $('.tabs-contents__item');

if (slidersParents.length) {
  slidersParents.each(function() {
    var _self = $(this);
    var paginationBlock = _self.find('.swiper-pagination');

    var config = {};
    if (paginationBlock.length) {
      config.pagination = {
        el: paginationBlock.get(0),
        clickable: true,
      }
    }
    var swiper = new Swiper(_self.find(".section2-tabs-slider").get(0), config)
  })
}

  var swiper = new Swiper(".section2-tabs-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });


// HEADER MOBILE NAV TOGLE
$('.header__nav-toggle').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.header__navigation').toggleClass('_mobile-nav-open')
})


$('.nav-links__item--parent').on('click', '.nav-links__link', function(event) {
  event.preventDefault();
  if ($(window).width() <= DESKTOP_FROM) {
    $(this).closest('.nav-links__item--parent').toggleClass("active");
    $(this).siblings('.sub-menu').toggle();
  } else {
    $(this).closest('.nav-links__item--parent').removeClass("active");
    $(this).siblings('.sub-menu').removeAttr('style');
  }
});


// для сабменю убрать для таблетов и мобилок ховер и убрать position: absolute
// отступ в выпадающем меню вместо позиции top иначе не работает ховер как надо
