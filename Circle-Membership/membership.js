const plans = [
  {
    title: "Basic",
    price: "₹199/year",
    features: [
      "10% off on all medicines",
      "Free online consultations (2/month)",
      "Priority customer support"
    ]
  },
  {
    title: "Silver",
    price: "₹499/year",
    features: [
      "15% off on medicines",
      "4 free doctor consultations/month",
      "Home sample collection for lab tests",
      "Faster delivery services"
    ]
  },
  {
    title: "Gold",
    price: "₹999/year",
    features: [
      "20% off on medicines",
      "Unlimited online consultations",
      "Free health checkup once a year",
      "Dedicated care manager"
    ]
  }
];

const planGrid = document.getElementById("planGrid");
const message = document.getElementById("message");

function displayPlans() {
  plans.forEach(plan => {
    const card = document.createElement("div");
    card.classList.add("plan-card");

    const featuresList = plan.features.map(item => `<li>${item}</li>`).join("");

    card.innerHTML = `
      <div class="plan-title">${plan.title}</div>
      <div class="plan-price">${plan.price}</div>
      <ul class="plan-features">${featuresList}</ul>
      <button class="join-btn" onclick="joinPlan('${plan.title}')">Join Now</button>
    `;

    planGrid.appendChild(card);
  });
}

function joinPlan(planName) {
  message.textContent = `You have joined the ${planName} Membership Plan!`;
}

displayPlans();
