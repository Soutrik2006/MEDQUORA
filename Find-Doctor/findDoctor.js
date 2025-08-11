function filterDoctors() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const doctors = document.querySelectorAll('.doctor-card');

  doctors.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const category = card.querySelector('p').textContent.toLowerCase();

    if (name.includes(input) || category.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
