function goToPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  // Show the selected page
  document.getElementById(`page-${pageNumber}`).style.display = 'flex';
}

// **Slideshow Functionality (Auto-play)**
const slides = [
  { img: "photo1.jpg", text: "Our first trip together!" },
  { img: "IMG-20240628-WA0013.jpg", text: "Remember this?😂 yhi proof hai yha se hi to mijhe har jagah tu dikh rhi thi" },
  { img: "photo3.jpg", text: "That unforgettable dinner date!" }
];

let currentSlide = 0;

function updateSlide() {
  const slideImage = document.getElementById("slideImage");
  const slideText = document.getElementById("slideText");

  if (slideImage && slideText) {
    slideImage.src = slides[currentSlide].img;
    slideText.innerText = slides[currentSlide].text;
  }
}

// Auto change slide every 3 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}, 3000);

// **Mini-Game Functionality**
function handleYesClick() {
  const message = document.getElementById("loveMessage");
  
  if (message) {
    message.innerText = "I love youu tooo cutuuu!";
    message.style.opacity = "1";
    message.style.transform = "scale(1.2)";
  }
}

function moveNoButton() {
  const noButton = document.getElementById("noButton");
  
  if (noButton) {
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  }
}

// **Ensure everything initializes correctly**
document.addEventListener("DOMContentLoaded", function () {
  goToPage(1); // Start on the first page

  // Ensure "Next" button on the first page navigates correctly
  document.querySelector('.btn').addEventListener('click', function() {
    goToPage(2);
  });

  // Attach event listeners for the Mini-Game
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  if (yesButton) yesButton.addEventListener("click", handleYesClick);
  
  if (noButton) {
    noButton.addEventListener("mouseover", moveNoButton); // Move on hover (PC)
    noButton.addEventListener("touchstart", moveNoButton); // Move on touch (Mobile)
  }
});
