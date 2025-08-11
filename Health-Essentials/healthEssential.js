const drinks = [
  {
    name: "ORS Drink",
    description: "Hydration solution for energy and recovery. Ideal during dehydration."
  },
  {
    name: "Protein Shake",
    description: "High-protein formula for muscle support and post-workout recovery."
  },
  {
    name: "Electrolyte Water",
    description: "Restores essential salts and keeps you energized during summer."
  },
  {
    name: "Herbal Green Tea",
    description: "Boosts immunity, metabolism and relieves stress naturally."
  },
  {
    name: "Amla Juice",
    description: "Rich in Vitamin C. Supports digestion, liver health, and immunity."
  },
  {
    name: "Aloe Vera Juice",
    description: "Soothes stomach, helps skin glow, and detoxifies body."
  },
  {
    name: "Meal Replacement Shake",
    description: "Complete nutrition in one glass for weight management."
  },
  {
    name: "Chyawanprash Mix",
    description: "Ayurvedic health drink mix for daily immunity and strength."
  }
];

const grid = document.getElementById("drinkGrid");
const search = document.getElementById("searchInput");

function displayDrinks(list) {
  grid.innerHTML = "";
  list.forEach(drink => {
    const card = document.createElement("div");
    card.classList.add("drink-card");

    card.innerHTML = `
      <div class="drink-title">${drink.name}</div>
      <div class="drink-desc">${drink.description}</div>
    `;

    grid.appendChild(card);
  });
}

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  const filtered = drinks.filter(d =>
    d.name.toLowerCase().includes(keyword) ||
    d.description.toLowerCase().includes(keyword)
  );
  displayDrinks(filtered);
});

displayDrinks(drinks); // Initial Load
