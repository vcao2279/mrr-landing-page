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

const slides = document.querySelectorAll(".slider-images");
let currentSlide = 0;
slides[currentSlide].classList.add("showing");
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].classList.remove("showing");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("showing");
}
