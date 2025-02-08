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
function updateSlide() {
  document.getElementById("slideImage").src = slides[currentSlide].img;
  document.getElementById("slideText").innerText = slides[currentSlide].text;
}

// Auto change slide every 3 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}, 3000);

// **Mini-Game Functionality**
function handleYesClick() {
  const message = document.getElementById("loveMessage");
  message.innerText = "I love youu tooo cutuuu!";
  message.style.opacity = "1";
  message.style.transform = "scale(1.2)";
}

function moveNoButton() {
  const noButton = document.getElementById("noButton");

  if (!noButton) return; // Prevent errors if the button isn't found

  const maxX = window.innerWidth - noButton.offsetWidth - 20;
  const maxY = window.innerHeight - noButton.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// **Ensure everything initializes correctly**
document.addEventListener("DOMContentLoaded", function () {
  goToPage(1); // Start on the first page

  // Ensure "Next" button on the first page navigates correctly
  document.querySelector('.btn').addEventListener('click', function() {
    goToPage(2);
  });

  // Ensure Yes and No buttons work in the mini-game
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  if (yesButton) yesButton.addEventListener("click", handleYesClick);
  
  if (noButton) {
    noButton.addEventListener("mouseover", moveNoButton); // Move on hover (PC)
    noButton.addEventListener("touchstart", moveNoButton); // Move on touch (Mobile)
  }
});
