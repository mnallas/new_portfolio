$(document).ready(function () {
  $(".carousel").carousel();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
  });

  $(document).on("click", "#portfolioBtn", () => {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top,
      },
      1500
    );
  });

  $(document).on("click", "#aboutBtn", () => {
    $("html, body").animate(
      {
        scrollTop: $("#aboutMe").offset().top,
      },
      1500
    );
  });
});
