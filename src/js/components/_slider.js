import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperProjects = new Swiper('.projects__slider', {
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
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

// links from <a> to target slide
window.addEventListener('DOMContentLoaded', function(){

  function linkToSlide(slider) {

    let slideId = window.location.hash.substring(1);
    let targetSlide = document.getElementById(slideId);

    if (targetSlide === null) {
      return;
    }

    let slidesArr = Array.from(targetSlide.parentElement.children);
    let indexOfTargetSlide = slidesArr.indexOf(targetSlide);

    slider.slideTo(indexOfTargetSlide);
  }


  linkToSlide(swiperProjects);
});