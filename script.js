function goToPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  // Show the selected page
  document.getElementById(`page-${pageNumber}`).style.display = 'flex';
}

function playMiniGame() {
  goToPage(4); // Go to the mini-game page
}

function handleYes() {
  // Create the message element
  const message = document.createElement('p');
  message.innerHTML = "I love you too! 💖";
  message.style.fontSize = '2rem';
  message.style.color = '#FF5678';
  message.style.animation = 'fadeIn 1s ease-in-out';
  
  // Append the message to the mini-game page
  document.querySelector('#page-4 .content').appendChild(message);
}

function handleNo(event) {
  // Get the button's size
  const noButton = event.target;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calculate the random position within the viewport, making sure it doesn't go out of bounds
  const randomX = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - buttonHeight));

  // Set the button to the new position
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Add the fade-in animation keyframes to the document head
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
