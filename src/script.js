/* Menu Dropdown */
let dropDown = document.querySelector(".dropdown");
let dropDownCont = document.querySelector(".dropdown__content");
let arrow = document.querySelector(".dropdown__title");

dropDown.addEventListener("mouseenter", () => {
  arrow.classList.toggle("dropdown__title-anim");
});

dropDown.addEventListener("mouseleave", () => {
  arrow.classList.toggle("dropdown__title-anim");
});

/* Language Dropdown */

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
