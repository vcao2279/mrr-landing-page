// Script for toggling menu button
const hamburger = document.querySelector(".top-bar i");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  main.classList.toggle("slide-down");
  hamburger.classList.contains("fa-bars")
    ? hamburger.classList.replace("fa-bars", "fa-times")
    : hamburger.classList.replace("fa-times", "fa-bars");
});

// Script for slider

const slides = document.querySelectorAll(".slide-container");
let currentSlide = 0;
slides[currentSlide].classList.add("showing");
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].classList.remove("showing");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("showing");
}

// Script to change height of slider dynamically
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slide-image");
let imgHeight = images[0].height;
slider.style.height = `${imgHeight}px`;

window.addEventListener("resize", () => {
  imgHeight = images[0].height;
  slider.style.height = `${imgHeight}px`;
});
