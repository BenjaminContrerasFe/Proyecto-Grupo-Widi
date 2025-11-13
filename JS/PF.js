document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("faqSearch");
  const faqItems = document.querySelectorAll(".faq-item");
  const noResults = document.getElementById("noResults");

  // Mostrar solo las primeras 5 preguntas al cargar la página
  const initialVisibleCount = 5;
  faqItems.forEach((item, index) => {
    item.style.display = index < initialVisibleCount ? "block" : "none";
  });

  // Buscador tipo Google
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    faqItems.forEach(item => {
      const text = item.innerText.toLowerCase();
      const matches = term
        .split(" ")
        .some(word => text.includes(word));

      // Si hay término de búsqueda, mostrar todas las coincidencias
      // Si no hay término, mostrar solo las primeras 5
      if (term === "") {
        const index = Array.from(faqItems).indexOf(item);
        item.style.display = index < initialVisibleCount ? "block" : "none";
        if (index < initialVisibleCount) visibleCount++;
      } else {
        item.style.display = matches ? "block" : "none";
        if (matches) visibleCount++;
      }
    });

    noResults.style.display = visibleCount ? "none" : "block";
  });

  // Acordeón sin lag, clic en todo el div
  faqItems.forEach(item => {
    const title = item.querySelector("h3");

    // Agregamos la flecha si no existe
    if (!item.querySelector(".arrow")) {
      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.innerHTML = "&#9660;"; // ▼
      title.appendChild(arrow);
    }

    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const active = item.classList.contains("active");

      // Cierra todos
      faqItems.forEach(i => {
        i.classList.remove("active");
        const p = i.querySelector("p");
        const arrow = i.querySelector(".arrow");
        p.style.maxHeight = null;
        if (arrow) arrow.innerHTML = "&#9660;"; // ▼
      });

      // Si estaba cerrado, lo abre
      if (!active) {
        item.classList.add("active");
        const p = item.querySelector("p");
        const arrow = item.querySelector(".arrow");
        p.style.maxHeight = p.scrollHeight + "px";
        if (arrow) arrow.innerHTML = "&#9650;"; // ▲
      }
    });
  });
});
