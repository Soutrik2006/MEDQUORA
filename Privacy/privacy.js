    // Toggle section visibility
function toggleSection(heading) {
  const content = heading.nextElementSibling;
  const allSections = document.querySelectorAll(".section-content");
  
  allSections.forEach(sec => {
    if (sec !== content) sec.style.display = "none";
  });

  content.style.display = content.style.display === "block" ? "none" : "block";
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
