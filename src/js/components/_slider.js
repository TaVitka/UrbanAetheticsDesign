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