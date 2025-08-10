    const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    body.style.display = body.style.display === "block" ? "none" : "block";

    // Optional: close others
    headers.forEach(other => {
      if (other !== header) {
        other.nextElementSibling.style.display = "none";
      }
    });
  });
});
