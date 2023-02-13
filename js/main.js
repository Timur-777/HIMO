const modalBtn = document.querySelector(".bike__link");
const modal = document.querySelector("#pop-up");
const formBtns = document.querySelectorAll(".form__btn");
const popSuccess = document.querySelector(".pop-up__success");
const form = document.querySelector("#form");
const popUpForm = document.querySelector("#pop_up-form");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(showByTime, 5000);
  modalBtn.addEventListener("click", modalOpen);
  modal.addEventListener("click", modalClose);
  formBtns.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.remove("active");
      popSuccess.classList.add("success");
      clearTimeout(showByTime);
    });
  });
  popSuccess.addEventListener("click", function (e) {
    e.preventDefault();
    popSuccess.classList.remove("success");
    document.body.style.overflow = "";
  });
});

function modalOpen(e) {
  e.preventDefault();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
function modalClose(e) {
  if (
    e.target.classList.contains("active") ||
    e.target.classList.contains("pop-up__close")
  ) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
function showByTime() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit form");
});

$(function () {
  $(".bike__slider,.slider__items").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
