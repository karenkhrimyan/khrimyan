$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(this).toggleClass("active");
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

  //BEGIN
  $(".ask").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("open")) {
      $(".answer").fadeOut(0);
      $(".ask").removeClass("open");
      // $(".accordion__arrow").removeClass("accordion__rotate");
    }

    $this.toggleClass("open");
    $this.next().fadeToggle(200);
    // $(".accordion__arrow", this).toggleClass("accordion__rotate");
  });
  //END
});
