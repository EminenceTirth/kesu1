// Function to switch between pages
function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(`page-${pageNumber}`).style.display = 'flex';
}

// Slideshow functionality
const slides = [
  { src: "image1.jpg", text: "This is our first special moment together." },
  { src: "image2.jpg", text: "A beautiful day we spent together." },
  { src: "image3.jpg", text: "Our cutest and happiest memory!" },
  { src: "image4.jpg", text: "The moment that made us smile endlessly." }
];

let currentSlide = 0;

function updateSlide() {
  document.getElementById("slideImage").src = slides[currentSlide].src;
  document.getElementById("slideText").textContent = slides[currentSlide].text;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

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
