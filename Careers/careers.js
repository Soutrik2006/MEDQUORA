    function applyNow(role) {
  document.getElementById('applicationSection').style.display = 'block';
  document.getElementById('jobRole').value = role;
  document.querySelector('h2').scrollIntoView({ behavior: "smooth" });
}

function submitApplication() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const resume = document.getElementById("resume").value.trim();
  const message = document.getElementById("message").value.trim();
  const role = document.getElementById("jobRole").value;
  const success = document.getElementById("applySuccess");

  if (!name || !email || !resume || !message) {
    alert("Please fill all the fields.");
    return false;
  }

  success.textContent = `Thank you, ${name}. Your application for "${role}" has been submitted!`;

  // Reset form
  document.getElementById("jobForm").reset();
  return false; // Prevent page reload
}
