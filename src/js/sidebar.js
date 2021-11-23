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

/* hover btn3 */
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