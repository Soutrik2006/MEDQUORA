// prescription.js

const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const form = document.getElementById("uploadForm");
const successMessage = document.getElementById("successMessage");

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    fileName.textContent = `Selected: ${fileInput.files[0].name}`;
  } else {
    fileName.textContent = "No file chosen";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (fileInput.files.length === 0) {
    alert("Please select a file to upload.");
    return;
  }

  // Simulate upload success
  successMessage.textContent = "✅ Prescription uploaded successfully!";
  successMessage.style.display = "block";

  // Clear file input
  fileInput.value = "";
  fileName.textContent = "No file chosen";
});
