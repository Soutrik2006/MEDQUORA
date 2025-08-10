    function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
  });
}

// Form handling (dummy for now)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formMessage").textContent = "Thank you! We will contact you soon.";
    this.reset();
  } else {
    document.getElementById("formMessage").textContent = "Please fill out all fields.";
  }
});
