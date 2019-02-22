const hamburger = document.querySelector(".top-bar i");
const menu = document.querySelector(".menu");
const hamburgerIcon = "fa-bars fa-lg";
const main = document.querySelector("main");
const closeIcon = "fas fa-times fa-lg";

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  main.classList.toggle("slide-down");
  hamburger.classList.contains("fa-bars")
    ? hamburger.classList.replace("fa-bars", "fa-times")
    : hamburger.classList.replace("fa-times", "fa-bars");
});
