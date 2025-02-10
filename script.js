// Function to switch between pages
function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(`page-${pageNumber}`).style.display = 'flex';
}

// **Slideshow Functionality**
const slides = [
    { img: "Screenshot_2024_0326_130426.jpg", text: "Remember the 1st time you accepted to just give our relationship a try in Feb. This was the first time that you gave me a hinttt!" },
    { img: "20250210_193223.png", text: "You Returned , and This was the first time we talked on call !!!!! " },
    { img: "IMG_20250210_200119.jpg", text: "HAHAHA ye vhi moment hai jahase ham dono khulke sab bole the ofc iykyk 😋 yhi to moment tha jisse ham relationship me aa paaye"},
    { img: "IMG-20240628-WA0013.jpg", text: " Vo kehte haina har jagah uske references dikhte hai, yup yha bhi vhi ho rha tha, lol" },
    { img: "Screenshot_20241228_225252.jpg", text: "WE VIDEO CALLED AND TALKED FOR THE FIRST TIMEEEEEEEEE!!!!! " },
    { img: "Screenshot_20241229_224820.jpg", text: "😂....And We continued video calling and capturing great memories and we are still going on😙" }
];

let currentSlide = 0;

// Function to update slideshow
function updateSlide() {
  const slideImage = document.getElementById("slideImage");
  const slideText = document.getElementById("slideText");

  // **Fix: Correctly update the image and text**
  slideImage.src = slides[currentSlide].img;  // Make sure to use .img property
  slideText.textContent = slides[currentSlide].text;
}

// Function to go to next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

// Function to go to previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

// **Fix: Ensure first image updates properly on load**
document.addEventListener("DOMContentLoaded", () => {
  updateSlide();
});

// Mini Game - Yes button text sequence
let loveMessages = [
  "I love youu tooo cutuuu! 😚🫶🏻",
  "I love youu moreee 😚",
  "I love youuuu the mostttttt 🫶🏻🥰",
  "I lovee youuu ♾️"
];
let loveIndex = 0;

function handleYesClick() {
  const message = document.getElementById("loveMessage");

  if (loveIndex < loveMessages.length - 1) {
    message.innerText = loveMessages[loveIndex];
    loveIndex++;
  } else {
    message.innerText = "I love youuu ♾️🫶🏻";
  }

  message.style.opacity = "1";
  message.style.transform = "scale(1.2)";
}

// Mini Game - No button random movement
const noButton = document.getElementById("noButton");

function moveNoButton() {
  const gameContainer = document.getElementById("page-4");
  const maxX = gameContainer.clientWidth - noButton.clientWidth;
  const maxY = gameContainer.clientHeight - noButton.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);
