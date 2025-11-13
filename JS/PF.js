document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("faqSearch");
  const faqItems = document.querySelectorAll(".faq-item");
  const noResults = document.getElementById("noResults");


  function fuzzyMatch(text, term) {
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    term = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const words = term.split(/\s+/).filter(Boolean);
    return words.every(word => text.includes(word));
  }

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase().trim();
    let anyVisible = false;

    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (term === "" || fuzzyMatch(text, term)) {
        item.style.display = "block";
        anyVisible = true;
      } else {
        item.style.display = "none";
      }
    });

    noResults.style.display = anyVisible ? "none" : "block";
  });

  // Acordeón rápido (como Google)
  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
