    // Toggle the visibility of section content
function toggleSection(header) {
  const content = header.nextElementSibling;
  const isVisible = content.style.display === "block";
  document.querySelectorAll(".terms-text").forEach(el => el.style.display = "none");
  content.style.display = isVisible ? "none" : "block";
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
