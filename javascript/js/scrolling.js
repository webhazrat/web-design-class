// window.onscroll = function () {
//   console.log("Test");
// };

window.addEventListener("scroll", function (event) {
  if (window.scrollY > 100) {
    nav.classList.add("scroll");
    scrollTop.classList.add("show");
  } else {
    nav.classList.remove("scroll");
    scrollTop.classList.remove("show");
  }
});

scrollTop.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

menuBar.addEventListener("click", function (event) {
  event.preventDefault();
  sideNav.classList.toggle("show");
});
