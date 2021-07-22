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
  
var swiper = new Swiper(".section2-tabs-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  observer: true,
  
  observeParents: true ,
  
  observSlideChildren: true,

  // autoplay: {
  //   delay: 1000,
  //   stopOnLastSlide: true,
  //   disableOnInteraction: false
  // }
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


// Переключение табов во второй секции на мобилке

const tabsTriggers = $('.section2-tabs .tabs-nav__trigger');

$('.section2-tabs__mobile-trigger').on('click', function(event) {
  event.preventDefault();
  const currentTab = $('.section2-tabs .tabs-nav__trigger.active');
  const activeIndex = currentTab.parent().index();

  if ($(this).data('move') === 'prev') {
    if ( activeIndex === 0 ) {
      tabsTriggers.eq( tabsTriggers.length - 1 ).tab('show');
    } else {
      tabsTriggers.eq( activeIndex - 1 ).tab('show');
    }
  } else {
    if ( activeIndex === (tabsTriggers.length - 1) ) {
      tabsTriggers.eq(0).tab('show');
    } else {
      tabsTriggers.eq( activeIndex + 1 ).tab('show');
    }
  }
});

// Коллапс Аккордеон собствеными руками.

const accordionItemHeader = document.querySelectorAll(".accordion-item__header")

accordionItemHeader.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item__header.active");
    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }


    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
  })
});