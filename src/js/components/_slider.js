import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperProjects = new Swiper('.projects__slider', {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  speed: 1000,
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  pagination: {
    clickable: true,
    el: '.projects__slider .swiper-pagination',
  },
  draggable: true,
  grabCursor: true,
  navigation: {
    clickable: true,
    nextEl: '.btn__items .btn--next',
    prevEl: '.btn__items .btn--prev',
  },
});

// function initializeSwiper(initialSlideIndex, swiperSlider) {
//   var swiper = new Swiper(swiperSlider, {
//     initialSlide: initialSlideIndex,
//     centeredSlides: true,
//   });
// }
//
// // links from <a> to target slide
// window.addEventListener('DOMContentLoaded', function(){
//
//   function linkToSlide(slider, sliderClassName) {
//
//     let slideId = window.location.hash.substring(1);
//     let targetSlide = document.getElementById(slideId);
//
//     if (targetSlide === null) {
//       return;
//     }
//
//     let slidesArr = Array.from(targetSlide.parentElement.children);
//     let indexOfTargetSlide = slidesArr.indexOf(targetSlide);
//
//     initializeSwiper(indexOfTargetSlide, sliderClassName);
//   }
//
//
//
//   linkToSlide(swiperProjects, '.projects__slider');
// });