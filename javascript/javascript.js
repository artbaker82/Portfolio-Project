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
