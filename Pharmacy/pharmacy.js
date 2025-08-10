const medicines = [
  { name: "Covaccine", image: "../Images/Co-vaccine.jpeg", desc: "₹35.40" },
  { name: "Azithromycin", image: "../Images/azitromycin.jpeg", desc: "₹481.88" },
  {name: "Doxy", image:"../Images/doxy.jpg",desc:"₹279.45"},
  { name: "Gabix", image: "../Images/gabix.jpg", desc: "₹360.95" },
  { name: "Lactic", image: "../Images/lactic_acid.jpg", desc: "₹400" },
  { name: "Nitrostate", image: "../Images/nitrostat.jpg", desc: "₹999.99" },
  { name: "Amio", image: "../Images/amio.jpg", desc: "₹242.71" },
  { name: "PauseMF", image: "../Images/pauseMF.jpg", desc: "₹378.24" },
  { name: "Trapic-650", image: "../Images/trapic650.jpg", desc: "₹192.21" },
  { name: "Relifire", image: "../Images/relifer.jpg", desc: "₹764.84" },
];

function renderMedicines(filter = "") {
  const list = document.getElementById("medicine-list");
  list.innerHTML = "";

  const filtered = medicines.filter(med =>
    med.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(med => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${med.image}" alt="${med.name}">
      <h3>${med.name}</h3>
      <p>${med.desc}</p>
    `;
    list.appendChild(card);
  });

  renderSuggestions(filtered.map(m => m.name), filter);
}

function filterMedicines() {
  const query = document.getElementById("search-box").value;
  renderMedicines(query);
}

function renderSuggestions(suggestions, input) {
  const box = document.getElementById("suggestions");
  box.innerHTML = "";
  if (!input) return;

  suggestions.forEach(name => {
    const div = document.createElement("div");
    div.textContent = name;
    div.className = "suggestion-item";
    div.onclick = () => {
      document.getElementById("search-box").value = name;
      box.innerHTML = "";
      renderMedicines(name);
    };
    box.appendChild(div);
  });
}

window.onload = () => renderMedicines();


