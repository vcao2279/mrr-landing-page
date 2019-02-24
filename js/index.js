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
let timer;
slides[currentSlide].classList.add("showing");
let slideInterval = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(nextSlide, 3000);
  }
  return false;
};

function nextSlide() {
  slides[currentSlide].classList.remove("showing");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("showing");
}

function lastSlide() {
  slides[currentSlide].classList.remove("showing");
  currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
  slides[currentSlide].classList.add("showing");
}

window.onload = function() {
  slideInterval();
};

// Script to change height of slider dynamically
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slide-image");
let imgHeight = images[0].height;
slider.style.height = `${imgHeight}px`;

window.addEventListener("resize", () => {
  imgHeight = images[0].height;
  slider.style.height = `${imgHeight}px`;
});

// Script to controls slider
const startstop = document.querySelector(".startstop");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const pause = "fa-pause";
const play = "fa-play";

startstop.addEventListener("click", () => {
  startstop.classList.contains(pause)
    ? startstop.classList.replace(pause, play)
    : startstop.classList.replace(play, pause);

  slideInterval();
});

next.addEventListener("click", () => {
  nextSlide();
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  startstop.classList.replace(pause, play);
});

prev.addEventListener("click", () => {
  lastSlide();
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  startstop.classList.replace(pause, play);
});
