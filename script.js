
function goToPage(pageNumber) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  // Show the selected page
  document.getElementById(`page-${pageNumber}`).style.display = 'flex';
}

function showPhotoSlides() {
  alert("Photo slides coming soon!");
}

function playMiniGame() {
  goToPage(3); // Direct to appreciation page for simplicity
}
