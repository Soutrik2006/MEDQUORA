    function submitComplaint() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMsg = document.getElementById("complaintSuccess");

  if (!name || !email || !subject || !message) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Simulate success
  successMsg.textContent = `Thank you, ${name}. Your complaint has been submitted.`;

  // Clear form
  document.getElementById("complaintForm").reset();

  return false; // Prevent form from refreshing the page
}
