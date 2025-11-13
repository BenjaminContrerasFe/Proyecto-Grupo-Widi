document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("faqSearch");
  const faqItems = document.querySelectorAll(".faq-item");

  // 🔍 Función para coincidencia "similar"
  function fuzzyMatch(text, term) {
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // elimina tildes
    term = term.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Divide las palabras de búsqueda
    const words = term.split(/\s+/).filter(Boolean);
    return words.every(word => text.includes(word));
  }

  // 🧠 Buscador con coincidencia flexible
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase().trim();
    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      // Si está vacío, muestra todo
      if (term === "") {
        item.style.display = "block";
      } else {
        // Muestra si hay coincidencia flexible
        item.style.display = fuzzyMatch(text, term) ? "block" : "none";
      }
    });
  });

  // 🪄 Acordeón tipo Google (independiente, rápido)
  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      const content = item.querySelector("p");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
