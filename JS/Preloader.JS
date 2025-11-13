document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader-container");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 300);
  });

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
      const url = link.getAttribute("href");

      if (
        !url ||
        url.startsWith("#") ||
        url.startsWith("javascript:") ||
        link.target === "_blank"
      ) return;

      e.preventDefault();

      loader.classList.remove("hidden");
      loader.style.opacity = "1";
      loader.style.visibility = "visible";

      setTimeout(() => {
        window.location.href = url;
      }, 1000);
    });
  });
});
