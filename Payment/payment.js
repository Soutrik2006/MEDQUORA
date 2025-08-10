    document.querySelectorAll('input[name="paymode"]').forEach(input => {
  input.addEventListener('change', () => {
    const method = document.querySelector('input[name="paymode"]:checked').value;
    document.getElementById('cardSection').style.display = method === 'Card' ? 'block' : 'none';
    document.getElementById('upiSection').style.display = method === 'UPI' ? 'block' : 'none';
  });
});

function submitPayment() {
  const method = document.querySelector('input[name="paymode"]:checked').value;
  const amount = document.getElementById("amount").value;
  const msg = document.getElementById("paymentMessage");

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return false;
  }

  if (method === "Card") {
    const card = document.getElementById("cardNumber").value;
    const cvv = document.getElementById("cvv").value;
    if (card.length !== 16 || cvv.length !== 3) {
      alert("Enter valid card details.");
      return false;
    }
  }

  if (method === "UPI") {
    const upi = document.getElementById("upi").value;
    if (!upi.includes("@")) {
      alert("Enter a valid UPI ID.");
      return false;
    }
  }

  msg.textContent = `Payment of ₹${amount} successful via ${method}!`;
  document.getElementById("paymentForm").reset();
  document.getElementById("cardSection").style.display = "block";
  document.getElementById("upiSection").style.display = "none";

  return false;
}
