document.addEventListener("DOMContentLoaded", () => {

  let current = 0;
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".arrow.right");
  const prev = document.querySelector(".arrow.left");

  function showSlide(index) {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
  }

  next.addEventListener("click", () => {
    showSlide(current + 1);
  });

  prev.addEventListener("click", () => {
    showSlide(current - 1);
  });

  setInterval(() => showSlide(current + 1), 6000);
});