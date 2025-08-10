const cartData = [
  { id: 1, name: "Paracetamol Strip", price: 30.00 },
  { id: 2, name: "Blood Sugar Test Kit", price: 250.00 },
  { id: 3, name: "Vitamin D Tablets", price: 199.00 }
];

const cartItemsContainer = document.getElementById("cartItems");
const totalItemsEl = document.getElementById("totalItems");
const totalPriceEl = document.getElementById("totalPrice");

function renderCart() {
  cartItemsContainer.innerHTML = "";

  let totalItems = 0;
  let totalPrice = 0;

  cartData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <p>${item.name}</p>
      <p>₹${item.price.toFixed(2)}</p>
      <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);

    totalItems++;
    totalPrice += item.price;
  });

  totalItemsEl.textContent = totalItems;
  totalPriceEl.textContent = totalPrice.toFixed(2);
}

function removeItem(id) {
  const index = cartData.findIndex(item => item.id === id);
  if (index !== -1) {
    cartData.splice(index, 1);
    renderCart();
  }
}

function checkout() {
  if (cartData.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to checkout...");
    // You can redirect or integrate payment here
  }
}

// Initial render
renderCart();
