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

/* Language select */

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

/* Accordeon style */

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


