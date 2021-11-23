const swiper1 = new Swiper(".swiper1", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  direction: "vertical",
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const swipermob = new Swiper(".swiper-mob", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const swiperteam = new Swiper(".swiper-team", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});
