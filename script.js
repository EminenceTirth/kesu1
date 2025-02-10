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
    { img: "IMG-20240628-WA0013.jpg", text: "You returned, and vo kehte haina har jagah uske references dikhte hai, yup yha bhi vhi ho rha tha, lol" },
    { img: "photo3.jpg", text: "That unforgettable dinner date!" },
    { img: "photo4.jpg", text: "Our favorite festival celebration!" }
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
