document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader-container");

  // 🔸 Al terminar de cargar la página, ocultamos el loader
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 300);
  });

  // 🔸 Antes de salir de la página, mostramos el loader
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const url = link.getAttribute("href");

      // Evita que se active en enlaces vacíos, anchors o JS
      if (
        !url ||
        url.startsWith("#") ||
        url.startsWith("javascript:") ||
        link.target === "_blank"
      ) return;

      e.preventDefault();

      // Mostrar el loader visualmente
      loader.classList.remove("hidden");
      loader.style.opacity = "1";
      loader.style.visibility = "visible";

      // Redirigir después del fade-in
      setTimeout(() => {
        window.location.href = url;
      }, 1000); // ← este tiempo define cuánto se ve el loader antes del cambio
    });
  });
});
