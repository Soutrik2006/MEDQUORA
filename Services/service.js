const services = [
  {
    title: "Doctor Appointment",
    description: "Book appointments with top specialists online and get instant confirmation."
  },
  {
    title: "Online Pharmacy",
    description: "Order genuine medicines at discounted prices delivered to your doorstep."
  },
  {
    title: "Lab Test at Home",
    description: "Schedule sample collection for health tests from the comfort of your home."
  },
  {
    title: "24x7 Emergency Support",
    description: "Call ambulance, hospital admission, and emergency care services anytime."
  },
  {
    title: "Health Insurance",
    description: "Browse and compare affordable health insurance plans from top providers."
  },
  {
    title: "Telemedicine",
    description: "Video consultation with certified doctors without leaving your home."
  }
];

const grid = document.getElementById("serviceGrid");
const searchInput = document.getElementById("serviceSearch");

function displayServices(serviceList) {
  grid.innerHTML = "";
  serviceList.forEach(service => {
    const div = document.createElement("div");
    div.className = "service-card";
    div.innerHTML = `
      <div class="service-title">${service.title}</div>
      <div class="service-desc">${service.description}</div>
    `;
    grid.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = services.filter(service =>
    service.title.toLowerCase().includes(keyword) ||
    service.description.toLowerCase().includes(keyword)
  );
  displayServices(filtered);
});

// Initial display
displayServices(services);
