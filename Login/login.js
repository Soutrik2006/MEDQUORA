    // login.js

    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMessage = document.getElementById("errorMessage");

      if (email === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        errorMessage.style.display = "block";
      } else {
        // Simulate login success (in real case, use backend API)
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login successful!";
        errorMessage.style.display = "block";

        // Redirect or clear form (optional)
        // window.location.href = "dashboard.html";
      }
    });
