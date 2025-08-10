    // Toggle section visibility
function toggleSection(header) {
  const content = header.nextElementSibling;
  const all = document.querySelectorAll('.section-body');
  all.forEach(sec => {
    if (sec !== content) sec.style.display = 'none';
  });
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
