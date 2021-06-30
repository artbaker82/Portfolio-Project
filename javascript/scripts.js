$(function () {
  $(window).on("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#navbar").addClass("bg-dark");
      $(".navbar-brand").removeClass("d-none");
    } else {
      // document.getElementById("navbar").classList.remove("bg-dark");
      $("#navbar").removeClass(" bg-dark");
      $(".navbar-brand").addClass("d-none");
    }
  });

  let navToggler = $(".navbar-toggler");
  let navIcon = $("#navbar-icon");

  navToggler.on("click", () => {
    console.log("clicked");
    if (navIcon.hasClass("fa-caret-down")) {
      navIcon.removeClass("fa-caret-down");
      navIcon.addClass("fa-caret-up");
    } else {
      navIcon.addClass("fa-caret-down");
      navIcon.removeClass("fa-caret-up");
    }
  });
});

/*

*/
