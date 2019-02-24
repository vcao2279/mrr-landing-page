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

// Script to change height of slider dynamically
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slide-image");
let imgHeight = images[0].height;
slider.style.height = `${imgHeight}px`;

window.addEventListener("resize", () => {
  imgHeight = images[0].height;
  slider.style.height = `${imgHeight}px`;
});

// Script for slider
class Slider {
  constructor() {
    this.currentSlide = 0;

    // Create variable to hold setInterval
    this.timer = null;

    // Create array of Image objects
    this.slides = document.querySelectorAll(".slide-container");
    this.slides = Array.from(this.slides).map(slide => new Image(slide));

    // Create Control Button Objects
    this.startStopBtn = document.querySelector(".startstop");
    this.nextBtn = document.querySelector(".next");
    this.prevBtn = document.querySelector(".prev");

    // Current active image;
    this.active = this.slides[this.currentSlide];
  }

  init = () => {
    this.slideInterval();

    const pause = "fa-pause";
    const play = "fa-play";

    this.startStopBtn.addEventListener("click", () => {
      this.startStopBtn.classList.contains(pause)
        ? this.startStopBtn.classList.replace(pause, play)
        : this.startStopBtn.classList.replace(play, pause);

      this.slideInterval();
    });

    this.nextBtn.addEventListener("click", () => {
      this.next();
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.startStopBtn.classList.replace(pause, play);
    });

    this.prevBtn.addEventListener("click", () => {
      this.previous();
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.startStopBtn.classList.replace(pause, play);
    });
  };

  slideInterval = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(this.next, 3000);
    }
  };

  next = () => {
    this.active.deselect();
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.active = this.slides[this.currentSlide];
    this.active.select();
  };

  previous = () => {
    this.active.deselect();
    this.currentSlide =
      this.currentSlide - 1 < 0
        ? this.slides.length - 1
        : this.currentSlide - 1;
    this.active = this.slides[this.currentSlide];
    this.active.select();
  };
}

class Image {
  constructor(el) {
    this.el = el;
  }

  select = () => {
    this.el.classList.add("showing");
  };

  deselect = () => {
    this.el.classList.remove("showing");
  };
}

const slideshow = new Slider();
slideshow.init();
