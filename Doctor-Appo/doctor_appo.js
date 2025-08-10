document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const specialist = document.getElementById("specialist").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const message = `Thank you, ${name}! Your appointment with a ${specialist} is booked for ${date} at ${time}.`;
  
  document.getElementById("confirmationMessage").textContent = message;

  // Optional: Clear form
  this.reset();
});
