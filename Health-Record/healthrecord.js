const recordForm = document.getElementById("recordForm");
const recordTableBody = document.getElementById("recordTableBody");
const successMessage = document.getElementById("successMessage");

recordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("recordName").value.trim();
  const date = document.getElementById("recordDate").value;
  const fileInput = document.getElementById("recordFile");
  const file = fileInput.files[0];

  if (!name || !date || !file) {
    successMessage.textContent = "Please fill in all fields.";
    successMessage.style.color = "red";
    return;
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${date}</td>
    <td>${file.name}</td>
  `;

  recordTableBody.appendChild(newRow);
  successMessage.textContent = "✅ Record uploaded successfully!";
  successMessage.style.color = "green";
  recordForm.reset();
});
