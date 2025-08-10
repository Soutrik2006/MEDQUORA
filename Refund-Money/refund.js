    function submitRefund() {
  const orderId = document.getElementById("orderId").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const account = document.getElementById("account").value.trim();
  const email = document.getElementById("email").value.trim();
  const successMsg = document.getElementById("refundSuccess");

  if (!orderId || !amount || !reason || !account || !email) {
    alert("Please fill in all required fields.");
    return false;
  }

  successMsg.textContent = `Your refund request for ₹${amount} has been submitted successfully. We will contact you at ${email}.`;

  // Reset the form
  document.getElementById("refundForm").reset();
  return false; // Prevent page reload
}
