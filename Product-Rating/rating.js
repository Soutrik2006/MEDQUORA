    let selectedRating = 0;

function setRating(rating) {
  selectedRating = rating;
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function submitRating() {
  const product = document.getElementById("product").value.trim();
  const review = document.getElementById("review").value.trim();
  const successMsg = document.getElementById("ratingSuccess");

  if (!product || !review || selectedRating === 0) {
    alert("Please fill in all fields and select a star rating.");
    return false;
  }

  successMsg.textContent = `Thank you for rating "${product}" with ${selectedRating} star(s)!`;

  // Reset form
  document.getElementById("ratingForm").reset();
  setRating(0); // Clear stars
  return false; // Prevent form reload
}
