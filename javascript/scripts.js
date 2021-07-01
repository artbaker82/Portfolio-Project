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

    //responsive nav highlights
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

  function getRect(el) {
    return el.getBoundingClientRect();
  }

  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const contact = document.querySelector("#contact");

  let visible = {
    home: true,
    about: false,
    contact: false,
  };

  document.addEventListener("scroll", function () {
    document.querySelector(".aboutcoordinates").textContent = getRect(about).y;

    let coordinates = getRect(about).y;

    if (coordinates <= 310 && coordinates >= -430) {
      visible.home = false; //document.querySelector(".aboutvisible").textContent = "true";
      visible.about = true; //document.querySelector(".home").textContent = "false";
      //document.querySelector(".contact").textContent = "false";
    } else if (coordinates <= -430) {
      //document.querySelector(".contact").textContent = "true";
      visible.about = true; //document.querySelector(".aboutvisible").textContent = "false";
      visible.home = false; //document.querySelector(".home").textContent = "false";
    } else {
      visible.about = false; //document.querySelector(".aboutvisible").textContent = "false";
      visible.home = true; //document.querySelector(".home").textContent = "true";
    }
    //testing
    document.querySelector(".home").textContent = visible.home;
    document.querySelector(".contact").textContent = visible.contact;
    document.querySelector(".aboutvisible").textContent = visible.about;

    //changing active class dynamically based on visible id
    if (visible.about) {
      document.querySelector("#aboutlink").classList.add("active");
      document.querySelector("#homelink").classList.remove("active");
      document.querySelector("#contactlink").classList.remove("active");
    } else if (visible.contact) {
      document.querySelector("#contactlink").classList.add("active");
      document.querySelector("#homelink").classList.remove("active");
      document.querySelector("#aboutlink").classList.remove("active");
    } else {
      document.querySelector("#homelink").classList.add("active");
      document.querySelector("#contactlink").classList.remove("active");
      document.querySelector("#aboutlink").classList.remove("active");
    }
  });
});

/*

*/
