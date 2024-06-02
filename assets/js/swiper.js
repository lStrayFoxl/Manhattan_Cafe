const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    centeredSlide: true,
    freeMode: true,
    spaceBetween: 30,
    speed: 500,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1111: {
        slidesPerView: 2,
      },
      280: {
        slidesPerView: 1,
      },
    },

});