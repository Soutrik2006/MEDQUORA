    // Toggle each section on header click
function toggleSection(header) {
  const content = header.nextElementSibling;
  const allSections = document.querySelectorAll(".section-body");

  allSections.forEach(sec => {
    if (sec !== content) sec.style.display = "none";
  });

  content.style.display = content.style.display === "block" ? "none" : "block";
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
