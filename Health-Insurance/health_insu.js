    const plans = [
  {
    name: "Care Health Insurance",
    provider: "Religare",
    coverage: "Covers hospitalization, daycare procedures, and annual checkups."
  },
  {
    name: "Star Health Family Plan",
    provider: "Star Health",
    coverage: "Ideal for family, maternity cover included, cashless across India."
  },
  {
    name: "ICICI Lombard Complete",
    provider: "ICICI",
    coverage: "Covers critical illness, surgery, ambulance, and OPD."
  },
  {
    name: "Max Bupa GoActive",
    provider: "Max Bupa",
    coverage: "Instant claim settlement, wellness rewards, and OPD benefits."
  },
  {
    name: "HDFC Ergo Optima Restore",
    provider: "HDFC Ergo",
    coverage: "Automatic sum insured restore, no claim bonus up to 100%."
  }
];

const container = document.getElementById("plansContainer");
const searchInput = document.getElementById("searchInput");

function displayPlans(planList) {
  container.innerHTML = "";
  planList.forEach(plan => {
    const div = document.createElement("div");
    div.classList.add("plan-card");

    div.innerHTML = `
      <div class="plan-name">${plan.name}</div>
      <div class="plan-provider">Provided by: ${plan.provider}</div>
      <div class="plan-coverage">${plan.coverage}</div>
    `;
    container.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = plans.filter(plan =>
    plan.name.toLowerCase().includes(keyword) ||
    plan.provider.toLowerCase().includes(keyword)
  );
  displayPlans(filtered);
});

displayPlans(plans); // Initial load
