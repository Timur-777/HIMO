const modalBtn = document.querySelector(".bike__link");
const modal = document.querySelector("#pop-up");
const formBtns = document.querySelectorAll(".form__btn");
const popSuccess = document.querySelector(".pop-up__success");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(showByTime, 5000);
  modalBtn.addEventListener("click", modalOpen);
  modal.addEventListener("click", modalClose);
  formBtns.forEach((item) => {
    item.addEventListener("click", function () {
      modal.classList.remove("active");
      popSuccess.classList.add("success");
    });
  });
  popSuccess.addEventListener("click", function () {
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

$(function () {
  $(".bike__slider,.slider__items").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
