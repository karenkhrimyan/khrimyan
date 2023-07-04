$(function () {
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
