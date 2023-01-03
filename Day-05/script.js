// hamburger Effect

const hamburger = document.getElementsByClassName("hamburger");
const navbar_menu = document.getElementsByClassName("navbar-menu");
const hamburger_close = document.getElementsByClassName("hamburger-close");

const close = () => {
  navbar_menu[0].style.display = "none";
  hamburger[0].style.display = "flex";
  hamburger_close[0].style.display = "none";
};

hamburger[0].addEventListener("click", (e) => {
  navbar_menu[0].style.display = "flex";
  hamburger_close[0].style.display = "flex";
  hamburger[0].style.display = "none";
});

hamburger_close[0].addEventListener("click", (e) => {
  close();
});

const menu = document.getElementsByClassName("menu-item");

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", (e) => {
    if (hamburger_close[0].style.display !== "") {
      close();
    }
  });
}

// carousel Effect
var slides = document.getElementsByClassName("carousel-item");
var dots = document.getElementsByClassName("dot");

var slideIndex = 1;
Carousel(slideIndex);

function plusSlides(n) {
  Carousel((slideIndex += n));
}

function currentSlide(n) {
  Carousel((slideIndex = n));
}

function Carousel(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex = n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";

  setTimeout(() => {
    Carousel(slideIndex + 1);
  }, 8000);
}

const video = document.getElementsByClassName("carousel-video");
const video_dots = document.getElementsByClassName("video-dot");

var VideoIndex = 1;
var Videos = [
  "/videos/demo1.mp4",
  "/videos/demo2.mp4",
  "/videos/demo3.mp4",
];


function rotateRight() {
  let last = Videos.pop();
  Videos.unshift(last);
  VideoIndex +=1;
  if (VideoIndex > video.length) {
    VideoIndex = 1;
  } else if (VideoIndex < 1) {
    VideoIndex = video.length;
  }
}
VideoCarousel(VideoIndex);



function VideoCarousel() {

  for (let i = 0; i < video.length; i++) {
    video[i].src = Videos[i];
    video_dots[i].className = video_dots[i].className.replace(" active", "");
  }
  video_dots[VideoIndex - 1].className += " active";
  rotateRight();

  setTimeout(() => {
    VideoCarousel();
  }, 5000);
}
