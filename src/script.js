/* Mobile menu */
let mobBurgher = document.querySelector(".burgher");

mobBurgher.addEventListener("click", function () {
  console.log("fine");
  let navMob = document.querySelector(".navigation-mobile");
  let burgLine = document.querySelector(".burgher-line");
  mobBurgher.classList.toggle("burgher-x");
  burgLine.classList.toggle("burgher-line-x");
  navMob.classList.toggle("navigation-mobile-active");
});

/* Menu Dropdown */

let dropDown = document.querySelector(".dropdown");
let dropDownCont = document.querySelector(".dropdown__content");
let arrow = document.querySelector(".dropdown__title");

dropDown.addEventListener("mouseenter", () => {
  arrow.style.color = "white";
  arrow.classList.toggle("dropdown__title-anim");
});

dropDown.addEventListener("mouseleave", () => {
  arrow.style.color = "#000A24";
  arrow.classList.toggle("dropdown__title-anim");
});

$(".language__list").on("click", ".language__item-init", function () {
  $(this)
    .closest(".language__list")
    .children("li:not(.language__item-init)")
    .toggle();
  $(".language__list")
    .children("li:not(.language__item-init)")
    .css("margin-top", "14px");
  $(".language").toggleClass("arrow_anim");
});

var allOptions = $(".language__list").children("li:not(.language__item-init)");
$(".language__list").on("click", "li:not(.language__item-init)", function () {
  $(".language").toggleClass("arrow_anim");
  allOptions.removeClass("selected");
  $(this).addClass("selected");
  $(".language__list").children(".language__item-init").html($(this).html());
  allOptions.toggle();
});

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("accordion-anim");

    let panel = this.nextElementSibling;
    console.log(panel);
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const swiperteam = new Swiper(".swiper-team", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

/* hover btn1 */

const btn1 = document.querySelector(".sidebar__btn-1");
const link1 = document.querySelector(".sidebar__link-test");

btn1.addEventListener("mouseenter", () => {
  link1.style.visibility = "visible";
  link1.addEventListener("mouseenter", () => {
    link1.style.visibility = "visible";
  });
});

link1.addEventListener("mouseleave", () => {
  link1.style.visibility = "hidden";
  btn1.addEventListener("mouseleave", () => {
    link1.style.visibility = "hidden";
  });
});

/* hover btn2 */

const btn2 = document.querySelector(".sidebar__btn-2");
const link2 = document.querySelector(".sidebar__link-prog");
btn2.addEventListener("mouseenter", () => {
  link2.style.visibility = "visible";
  link2.addEventListener("mouseenter", () => {
    link2.style.visibility = "visible";
  });
});

link2.addEventListener("mouseleave", () => {
  link2.style.visibility = "hidden";
  btn2.addEventListener("mouseleave", () => {
    link2.style.visibility = "hidden";
  });
});

/* hover btn2 */
const btn3 = document.querySelector(".sidebar__btn-3");
const link3 = document.querySelector(".sidebar__link-contact");
btn3.addEventListener("mouseenter", () => {
  link3.style.visibility = "visible";
  link3.addEventListener("mouseenter", () => {
    link3.style.visibility = "visible";
  });
});

link3.addEventListener("mouseleave", () => {
  link3.style.visibility = "hidden";
  btn3.addEventListener("mouseleave", () => {
    link3.style.visibility = "hidden";
  });
});

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
  /*   breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }, */
});
