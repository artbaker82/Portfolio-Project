window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("bg-dark");
    document.getElementById("navbar").classList.add("navbar-dark");
    document.getElementById("navbar").classList.remove("navbar-light");
  } else {
    document.getElementById("navbar").classList.remove("bg-dark");
  }
}
/*
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
*/

/////////////////////////
function getRect(el) {
  return el.getBoundingClientRect();
}

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const featureCards = document.querySelector(".feature-cards");

let visible = {
  home: true,
  about: false,
  contact: false,
};

document.addEventListener("scroll", function () {
  document.querySelector(".aboutcoordinates").textContent = getRect(about).y;
  document.querySelector(".cardstest").textContent = getRect(featureCards).y;

  let coordinates = getRect(about).y;

  if (coordinates <= 179 && coordinates >= -625) {
    visible.home = false; //document.querySelector(".aboutvisible").textContent = "true";
    visible.about = true; //document.querySelector(".home").textContent = "false";
    visible.contact = false; //document.querySelector(".contact").textContent = "false";
  } else if (coordinates <= -625) {
    visible.contact = true; //document.querySelector(".contact").textContent = "true";
    visible.about = false; //document.querySelector(".aboutvisible").textContent = "false";
    visible.home = false; //document.querySelector(".home").textContent = "false";
  } else {
    visible.about = false; //document.querySelector(".aboutvisible").textContent = "false";
    visible.home = true; //document.querySelector(".home").textContent = "true";
    visible.contact = false;
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

let navToggler = document.querySelector(".navbar-toggler");
let navIcon = document.querySelector("#navbar-icon")
navToggler.addEventListener("click", function(){
  if(navIcon.classList.contains("fa-caret-down")){
    console.log("memu cino")
    navIcon.classList.remove("fa-caret-down")
    navIcon.classList.add("fa-caret-up")
  } else {
    navIcon.classList.add("fa-caret-down")
    navIcon.classList.remove("fa-caret-up")
  }
})



