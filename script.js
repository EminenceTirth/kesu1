function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(`page-${pageNumber}`).style.display = 'flex';
}

// Mini Game Logic
function handleYes() {
  const message = document.createElement('p');
  message.innerHTML = "I love you too! 💖";
  message.style.fontSize = '2rem';
  message.style.color = '#FF5678';
  message.style.animation = 'fadeIn 1s ease-in-out';
  document.querySelector('#page-4 .content').appendChild(message);
}

function handleNo(event) {
  const noButton = event.target;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const randomX = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - buttonHeight));
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Photo Slideshow Logic
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
}

// Adding fade-in animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
