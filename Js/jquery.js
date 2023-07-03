$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(this).toggleClass("active");
  });
});

$(".open-popup").click(function (e) {
  e.preventDefault();
  $(".popup-bg").fadeIn(800);
});

$(".close-popup").click(function () {
  $(".popup-bg").fadeOut(800);
});

$(".open-popup").click(function (e) {
  e.preventDefault();
  $(".popup-bg").fadeIn(800);
  $("html").addClass("no-scroll");
});

$(".close-popup").click(function () {
  $(".popup-bg").fadeOut(800);
  $("html").removeClass("no-scroll");
});
