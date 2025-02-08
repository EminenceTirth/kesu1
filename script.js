function goToPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  // Show the selected page
  document.getElementById(`page-${pageNumber}`).style.display = 'flex';
}

// **Slideshow Functionality**
const slides = [
  { img: "photo1.jpg", text: "Our first trip together!" },
  { img: "photo2.jpg", text: "A beautiful memory from last summer." },
  { img: "photo3.jpg", text: "That unforgettable dinner date!" }
];

let currentSlide = 0;
const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");

function updateSlide() {
  slideImage.src = slides[currentSlide].img;
  slideText.innerText = slides[currentSlide].text;
}

// Auto change slide every 3 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}, 3000);

// Initial load
updateSlide();

// **Mini-Game Functionality**
function playMiniGame() {
  goToPage(4); // Go to mini-game page
}

function handleYesClick() {
  const message = document.getElementById("loveMessage");
  message.innerText = "I love you toooo!";
  message.style.opacity = "1";
  message.style.transform = "scale(1.2)";
}

function moveNoButton() {
  const noButton = document.getElementById("noButton");
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// **Fix: Ensures page navigation works**
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the first page is shown correctly
  goToPage(1);

  // Ensure the Next button on the first page works
  const nextButton = document.querySelector('.btn');
  nextButton.addEventListener('click', function() {
    goToPage(2); // Navigate to page 2 (menu page)
  });
});
