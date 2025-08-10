function filterLab() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".lab-card");

  cards.forEach(card => {
    const testName = card.querySelector("h3").textContent.toLowerCase();
    const labName = card.querySelector("p").textContent.toLowerCase();

    if (testName.includes(input) || labName.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
