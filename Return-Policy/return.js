    function toggleSection(header) {
  const content = header.nextElementSibling;
  const allSections = document.querySelectorAll(".section-body");

  allSections.forEach(section => {
    if (section !== content) section.style.display = "none";
  });

  content.style.display = content.style.display === "block" ? "none" : "block";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
