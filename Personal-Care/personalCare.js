const products = [
  {
    name: "Face Wash",
    description: "Gentle and refreshing skin cleanser for daily use."
  },
  {
    name: "Shampoo",
    description: "Anti-dandruff formula for strong and shiny hair."
  },
  {
    name: "Body Lotion",
    description: "Hydrating lotion to keep your skin moisturized all day."
  },
  {
    name: "Sanitary Napkins",
    description: "Ultra-thin with high absorbency for all-day comfort."
  },
  {
    name: "Toothpaste",
    description: "Fluoride-rich protection for strong teeth and gums."
  },
  {
    name: "Hand Sanitizer",
    description: "Kills 99.9% of germs. Pocket-size for convenience."
  },
  {
    name: "Beard Oil",
    description: "Softens beard and promotes healthy growth."
  },
  {
    name: "Face Mask (Sheet)",
    description: "Instant hydration and glow with herbal extract."
  }
];

const grid = document.getElementById("careGrid");
const searchInput = document.getElementById("searchBar");

function displayProducts(list) {
  grid.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("care-card");
    card.innerHTML = `
      <div class="care-title">${product.name}</div>
      <div class="care-desc">${product.description}</div>
    `;
    grid.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});

displayProducts(products); // Initial load
